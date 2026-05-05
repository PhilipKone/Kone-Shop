import { ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import './ProductGrid.css';

interface ProductGridProps {
  category: string;
}

export default function ProductGrid({ category }: ProductGridProps) {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const currentProducts = products[category as keyof typeof products] || [];

  return (
    <div className="product-grid">
      {currentProducts.map((product) => (
        <div key={product.id} className="product-card glass-panel">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} className="product-image" />
            {product.tag && <span className="product-tag">{product.tag}</span>}
          </div>
          <div className="product-info">
            <span className="product-category">{product.category}</span>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-footer">
              <span className="product-price">{formatPrice(product.price)}</span>
              <button 
                className="add-to-cart-btn" 
                aria-label="Add to cart"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
