import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products } from '../src/data/products.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const publicDir = path.resolve(__dirname, '../public');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Template dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const allProducts = [
  ...(products.hardware || []),
  ...(products.software || []),
  ...(products.merch || [])
];

console.log(`\n🚀 Generating individual product SEO & Open Graph preview pages for ${allProducts.length} items...`);

const sitemapUrls = [
  {
    loc: 'https://shop.koneacademy.io/',
    priority: '1.0',
    changefreq: 'daily'
  }
];

for (const product of allProducts) {
  let html = template;
  const canonicalUrl = `https://shop.koneacademy.io/product/${product.id}/`;

  // Determine absolute image URL for Open Graph & Twitter cards (WhatsApp, X, Facebook, LinkedIn, iMessage)
  let ogImageUrl = product.image;
  if (!ogImageUrl.startsWith('http')) {
    const baseName = path.basename(product.image, path.extname(product.image));
    const pngPath = path.join(distDir, 'products', `${baseName}.png`);
    
    // Prefer PNG if available for maximum WhatsApp / Open Graph compatibility, else WebP
    if (fs.existsSync(pngPath)) {
      ogImageUrl = `https://shop.koneacademy.io/products/${baseName}.png`;
    } else {
      ogImageUrl = `https://shop.koneacademy.io${product.image}`;
    }
  }

  const title = `${product.name} | Kone Shop`;
  const cleanDescription = (product.description || 'Professional-grade equipment designed for the Kone Academy ecosystem.')
    .replace(/"/g, '&quot;');
  const ogDescription = `${cleanDescription} - Available on Kone Shop for GH₵ ${product.price.toFixed(2)}`;

  // Strip any existing conflicting meta tags from template to avoid duplicates
  html = html.replace(/<title>[\s\S]*?<\/title>/i, '');
  html = html.replace(/<link[^>]*rel=["']canonical["'][^>]*>/gi, '');
  html = html.replace(/<meta[^>]*name=["']description["'][^>]*>/gi, '');
  html = html.replace(/<meta[^>]*property=["']og:[^"']*["'][^>]*>/gi, '');
  html = html.replace(/<meta[^>]*content=["'][^"']*["'][^>]*property=["']og:[^"']*["'][^>]*>/gi, '');
  html = html.replace(/<meta[^>]*name=["']twitter:[^"']*["'][^>]*>/gi, '');
  html = html.replace(/<meta[^>]*property=["']twitter:[^"']*["'][^>]*>/gi, '');
  html = html.replace(/<meta[^>]*property=["']product:[^"']*["'][^>]*>/gi, '');

  // Build clean, comprehensive meta tags
  const newMeta = `
    <title>${title}</title>
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="description" content="${ogDescription}" />

    <!-- Open Graph / WhatsApp / Facebook / LinkedIn / Discord / iMessage -->
    <meta property="og:type" content="product" />
    <meta property="og:site_name" content="Kone Shop" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${ogDescription}" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta property="og:image:secure_url" content="${ogImageUrl}" />
    <meta property="og:image:alt" content="${product.name}" />
    <meta property="og:image:width" content="1024" />
    <meta property="og:image:height" content="1024" />
    <meta property="product:price:amount" content="${product.price.toFixed(2)}" />
    <meta property="product:price:currency" content="GHS" />
    <meta property="product:availability" content="in stock" />

    <!-- Twitter / X Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@koneacademy" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${ogDescription}" />
    <meta name="twitter:image" content="${ogImageUrl}" />
    <meta name="twitter:image:alt" content="${product.name}" />
  `;

  // Inject product specific Schema.org JSON-LD for Google Search & Shopping
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": ogImageUrl,
    "description": product.description || 'Professional-grade equipment designed for the Kone Academy ecosystem.',
    "brand": {
      "@type": "Brand",
      "name": "Kone Academy"
    },
    "category": product.category,
    "sku": `KONE-${product.id.toUpperCase()}`,
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": "GHS",
      "price": product.price.toFixed(2),
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Kone Shop",
        "url": "https://shop.koneacademy.io/"
      }
    }
  };

  const schemaScript = `\n    <script type="application/ld+json" id="product-specific-schema">\n${JSON.stringify(productSchema, null, 2)}\n    </script>\n  `;

  html = html.replace('<head>', `<head>${newMeta}${schemaScript}`);

  // Write static file to dist/product/:id/index.html
  const targetDir = path.join(distDir, 'product', product.id);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf8');

  // Also support plural dist/products/:id/index.html
  const pluralDir = path.join(distDir, 'products', product.id);
  if (!fs.existsSync(pluralDir)) {
    fs.mkdirSync(pluralDir, { recursive: true });
  }
  fs.writeFileSync(path.join(pluralDir, 'index.html'), html, 'utf8');

  sitemapUrls.push({
    loc: canonicalUrl,
    priority: '0.8',
    changefreq: 'weekly'
  });

  console.log(`  ✓ Generated pre-rendered SEO & OG for: ${product.name} (id: ${product.id})`);
}

// Generate updated sitemap.xml with all product URLs
const today = new Date().toISOString().split('T')[0];
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(item => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf8');

console.log(`\n✅ Generated sitemap.xml with ${sitemapUrls.length} indexed URLs (all products included)`);
console.log('🎉 Product SEO & Social Open Graph generation complete!\n');
