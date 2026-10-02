import { useState, useEffect } from 'react';
import { ShoppingCart, Check, ArrowLeftRight, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import SkeletonCard from './SkeletonCard';
import ProductModal from './ProductModal';
import './ProductGrid.css';

interface ProductGridProps {
  category: string;
  subCategory: string;
  searchQuery: string;
  priceRange: { min: number; max: number };
  sortBy: string;
  isLoading?: boolean;
  compareIds?: string[];
  onToggleCompare?: (id: string) => void;
}

export default function ProductGrid({ 
  category, 
  subCategory,
  searchQuery,
  priceRange,
  sortBy,
  isLoading,
  compareIds = [],
  onToggleCompare
}: ProductGridProps) {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  // Check URL pathname (/product/:id/) or query params (?product=id) on initial load
  useEffect(() => {
    let productId: string | null = null;
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    if ((pathParts[0] === 'product' || pathParts[0] === 'products') && pathParts[1]) {
      productId = pathParts[1];
    } else {
      const params = new URLSearchParams(window.location.search);
      productId = params.get('product');
    }

    if (productId) {
      const allProductsList = [
        ...(products.hardware || []),
        ...(products.software || []),
        ...(products.merch || [])
      ];
      const matched = allProductsList.find(p => p.id === productId);
      if (matched) {
        setSelectedProduct(matched);
      }
    }
  }, []);
  
  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    addToCart(product);
    setAddedIds(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds(prev => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);
  };

  const handleShare = async (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/product/${product.id}/`;
    const shareData = {
      title: `${product.name} | Kone Shop`,
      text: `Check out ${product.name} on Kone Shop (${formatPrice(product.price)}):`,
      url: shareUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedId(product.id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  if (isLoading) {
    return (
      <div className="product-grid">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }
  let currentProducts = products[category as keyof typeof products] || [];
  
  // Apply Category/Sub-category Filter
  if (category === 'hardware' && subCategory !== 'All') {
    currentProducts = currentProducts.filter(p => (p as any).subCategory === subCategory);
  }

  // Apply Search Filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    currentProducts = currentProducts.filter(p => 
      p.name.toLowerCase().includes(query) || 
      (p.description && p.description.toLowerCase().includes(query))
    );
  }

  // Apply Price Filter
  currentProducts = currentProducts.filter(p => 
    p.price >= priceRange.min && p.price <= priceRange.max
  );

  // Apply Sorting
  currentProducts = [...currentProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      default:
        return 0; // Featured (original order)
    }
  });

  if (currentProducts.length === 0) {
    return (
      <div className="empty-state glass-panel">
        <p>No products found matching your filters.</p>
        <span className="empty-subtitle">Try adjusting your search or price range.</span>
      </div>
    );
  }

  return (
    <>
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="product-card glass-panel"
            onClick={() => setSelectedProduct(product)}
            style={{ cursor: 'pointer' }}
          >
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
              {product.tag && <span className="product-tag">{product.tag}</span>}
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-footer">
                <span className="product-price">{formatPrice(product.price)}</span>
                <div className="product-card-actions">
                  <button 
                    className={`share-card-btn ${copiedId === product.id ? 'copied' : ''}`}
                    onClick={(e) => handleShare(e, product)}
                    title={copiedId === product.id ? "Link copied!" : "Share product"}
                    aria-label={`Share ${product.name}`}
                  >
                    {copiedId === product.id ? <Check size={18} /> : <Share2 size={18} />}
                    {copiedId === product.id && <span className="share-tooltip">Copied!</span>}
                  </button>
                  <button 
                    className={`compare-btn ${compareIds.includes(product.id) ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleCompare?.(product.id);
                    }}
                    title="Add to comparison"
                    aria-label={`Compare ${product.name}`}
                  >
                    <ArrowLeftRight size={18} />
                  </button>
                  <button 
                    className={`add-to-cart-btn ${addedIds.has(product.id) ? 'added' : ''}`} 
                    aria-label={`Add ${product.name} to cart`}
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    {addedIds.has(product.id) ? <Check size={18} /> : <ShoppingCart size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onSelectProduct={setSelectedProduct}
        />
      )}
    </>
  );
}
