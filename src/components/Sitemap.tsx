import React, { useEffect } from 'react';
import { ChevronLeft, ShoppingBag, Globe, ExternalLink } from 'lucide-react';
import './Sitemap.css';

interface SitemapProps {
  onBack: () => void;
}

const Sitemap: React.FC<SitemapProps> = ({ onBack }) => {
  useEffect(() => {
    const SCHEMA_ID = 'sitemap-breadcrumb-jsonld';
    const existingScript = document.getElementById(SCHEMA_ID);
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = SCHEMA_ID;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Kone Shop",
          "item": "https://shop.koneacademy.io/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sitemap",
          "item": "https://shop.koneacademy.io/#sitemap"
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(SCHEMA_ID);
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return (
    <div className="shop-sitemap-page">
      {/* Header action bar */}
      <div className="shop-sitemap-header">
        <button onClick={onBack} className="shop-sitemap-back-btn">
          <ChevronLeft size={18} /> Back
        </button>
        <span className="shop-sitemap-brand">Kone Shop Index</span>
      </div>

      <div className="shop-sitemap-container">
        <div className="shop-sitemap-card">
          <h1 className="shop-sitemap-title">Kone Shop Sitemap</h1>
          <p className="shop-sitemap-subtitle">
            Local platform index for developer hardware sensors, software licenses, and official Kone Academy merchandise.
          </p>

          <div className="shop-sitemap-grid">
            {/* Column 1: Store Categories & Products */}
            <div className="shop-sitemap-column">
              <div className="shop-sitemap-col-header">
                <ShoppingBag className="shop-sitemap-icon" size={20} />
                <h2>Store Catalog & Products</h2>
              </div>
              <div className="shop-sitemap-list">
                <div className="shop-sitemap-item">
                  <a href="#catalog" className="shop-sitemap-link">
                    Store Homepage / Catalog
                  </a>
                  <p className="shop-sitemap-desc">E-commerce storefront home highlighting hardware, software, and merchandise collections.</p>
                </div>
                <div className="shop-sitemap-item">
                  <a href="#/product/esp32-sensor-node" className="shop-sitemap-link">
                    ESP32 Sensor Node (Product)
                  </a>
                  <p className="shop-sitemap-desc">Compact IoT sensor development board with WiFi and Bluetooth telemetry integration.</p>
                </div>
                <div className="shop-sitemap-item">
                  <a href="#/product/iot-kit" className="shop-sitemap-link">
                    IoT Prototyping Kit (Product)
                  </a>
                  <p className="shop-sitemap-desc">Premium starter kit including microcontrollers, breadboards, jumper wires, and sensors.</p>
                </div>
                <div className="shop-sitemap-item">
                  <a href="#/product/mascot-pack" className="shop-sitemap-link">
                    Kids Mascot Pack (Product)
                  </a>
                  <p className="shop-sitemap-desc">Vinyl stickers and achievement badge keyring collection from Kone Kids.</p>
                </div>
              </div>
            </div>

            {/* Column 2: Ecosystem & Academy links */}
            <div className="shop-sitemap-column">
              <div className="shop-sitemap-col-header">
                <Globe className="shop-sitemap-icon" size={20} />
                <h2>Ecosystem Indexes</h2>
              </div>
              <div className="shop-sitemap-list">
                <div className="shop-sitemap-item">
                  <a href="https://www.koneacademy.io" className="shop-sitemap-link" target="_blank" rel="noopener noreferrer">
                    Kone Academy Main Hub <ExternalLink size={12} className="shop-external-icon" />
                  </a>
                  <p className="shop-sitemap-desc">Parent company landing page containing central index protocols and specs.</p>
                </div>
                <div className="shop-sitemap-item">
                  <a href="https://www.koneacademy.io/sitemap" className="shop-sitemap-link" target="_blank" rel="noopener noreferrer">
                    Central Sitemap Hub <ExternalLink size={12} className="shop-external-icon" />
                  </a>
                  <p className="shop-sitemap-desc">Central link directory connecting all 11 subdomains.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
