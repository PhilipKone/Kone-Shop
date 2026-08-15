import { X, ShoppingCart, ShieldCheck, Truck, RotateCcw, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { products } from '../data/products';
import { reviews } from '../data/reviews';
import ReviewSection from './ReviewSection';
import './ProductModal.css';

interface ProductModalProps {
  product: any;
  onClose: () => void;
  onSelectProduct: (product: any) => void;
}

export default function ProductModal({ product, onClose, onSelectProduct }: ProductModalProps) {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  if (!product) return null;

  // Find related products
  const allProducts = [...products.hardware, ...products.software, ...products.merch];
  const relatedProducts = allProducts
    .filter(p => 
      p.id !== product.id && 
      ((p as any).subCategory === product.subCategory || p.category === product.category)
    )
    .slice(0, 3);

  const productReviews = reviews.filter(r => r.productId === product.id);
  const avgRating = productReviews.length > 0
    ? (productReviews.reduce((acc, r) => acc + r.rating, 0) / productReviews.length).toFixed(1)
    : '5.0'; // Default for new items or mock

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close product details">
          <X size={24} />
        </button>

        <div className="modal-body">
          <div className="modal-image-section">
            <img src={product.image} alt={product.name} className="modal-image" />
            {product.tag && <span className="modal-tag">{product.tag}</span>}
          </div>

          <div className="modal-info-section">
            <span className="modal-category">{product.subCategory || product.category}</span>
            <h2 className="modal-title">{product.name}</h2>
            
            <div className="modal-rating-summary">
              <div className="stars-small">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i <= Math.round(parseFloat(avgRating)) ? 'star-filled' : 'star-empty'} 
                  />
                ))}
              </div>
              <span className="rating-text">{avgRating} ({productReviews.length} reviews)</span>
            </div>

            <div className="modal-price">{formatPrice(product.price)}</div>
            
            <p className="modal-description">
              {product.description || 'Professional-grade equipment designed for the Kone Academy ecosystem. High performance, durability, and official support included.'}
            </p>

            <div className="modal-features">
              <div className="feature-item">
                <ShieldCheck size={20} />
                <span>1 Year Warranty</span>
              </div>
              <div className="feature-item">
                <Truck size={20} />
                <span>Fast Delivery</span>
              </div>
              <div className="feature-item">
                <RotateCcw size={20} />
                <span>30-Day Returns</span>
              </div>
            </div>

            <button 
              className="modal-add-btn btn-primary"
              aria-label={`Add ${product.name} to Cart`}
              onClick={() => {
                addToCart(product);
              }}
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-section">
            <h3 className="related-title">Related Products</h3>
            <div className="related-grid">
              {relatedProducts.map(p => (
                <div 
                  key={p.id} 
                  className="related-card"
                  onClick={() => {
                    onSelectProduct(p);
                    // Optional: scroll modal to top
                    const modal = document.querySelector('.modal-content');
                    if (modal) modal.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="related-image-wrapper">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="related-info">
                    <span className="related-name">{p.name}</span>
                    <span className="related-price">{formatPrice(p.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <ReviewSection productId={product.id} />
      </div>
    </div>
  );
}
