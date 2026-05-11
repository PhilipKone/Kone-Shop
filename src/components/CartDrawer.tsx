import { X, Minus, Plus, Trash2, ShoppingBag, PlusCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { products } from '../data/products';
import './CartDrawer.css';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, addToCart, totalPrice, totalItems } = useCart();
  const { formatPrice, currency } = useCurrency();

  // Recommendation logic
  const allProducts = [...products.hardware, ...products.software, ...products.merch];
  const cartIds = new Set(cart.map(item => item.id));
  
  const recommendations = Array.from(new Set(
    cart.flatMap(item => item.upsellIds || [])
  ))
  .filter(id => !cartIds.has(id))
  .map(id => allProducts.find(p => p.id === id))
  .filter(Boolean)
  .slice(0, 3);

  const handleCheckout = () => {
    const phoneNumber = '233551993820';
    const itemLines = cart.map(item => `• ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})`).join('%0A');
    
    let totalText = `*Total: ${formatPrice(totalPrice)}*`;
    if (currency === 'USD') {
      totalText += `%0A(Base: GH₵ ${totalPrice.toLocaleString()})`;
    }

    const message = `Hello Kone Shop! 🛍️%0A%0AI'd like to place an order:%0A%0A${itemLines}%0A%0A${totalText}%0A%0APlease let me know the next steps for delivery!`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer glass-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2 className="cart-title">Your <span className="text-gradient">Cart</span> ({totalItems})</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={64} className="empty-icon" />
              <p>Your cart is empty</p>
              <button className="btn-primary" onClick={() => setIsCartOpen(false)}>Start Shopping</button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-img" />
                <div className="item-details">
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-price">{formatPrice(item.price)}</p>
                  <div className="item-actions">
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {cart.length > 0 && recommendations.length > 0 && (
            <div className="upsell-section">
              <h4 className="upsell-title">Frequently Bought Together</h4>
              <div className="upsell-list">
                {recommendations.map((p: any) => (
                  <div key={p.id} className="upsell-card glass-panel">
                    <img src={p.image} alt={p.name} />
                    <div className="upsell-info">
                      <span className="upsell-name">{p.name}</span>
                      <span className="upsell-price">{formatPrice(p.price)}</span>
                    </div>
                    <button className="upsell-add-btn" onClick={() => addToCart(p)}>
                      <PlusCircle size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span className="total-amount">{formatPrice(totalPrice)}</span>
            </div>
            <button className="btn-primary checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
