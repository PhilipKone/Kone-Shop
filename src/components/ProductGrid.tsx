import { useState } from 'react';
import { ShoppingCart, Check, ArrowLeftRight } from 'lucide-react';
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
  const [addedIds, setAddedIds] = useState<Set<number>>(new Set());
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  
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
    currentProducts = currentProducts.filter(p => p.subCategory === subCategory);
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
                    className={`compare-btn ${compareIds.includes(product.id) ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleCompare?.(product.id);
                    }}
                    title="Add to comparison"
                  >
                    <ArrowLeftRight size={18} />
                  </button>
                  <button 
                    className={`add-to-cart-btn ${addedIds.has(product.id) ? 'added' : ''}`} 
                    aria-label="Add to cart"
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
