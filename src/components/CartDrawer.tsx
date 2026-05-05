import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import './CartDrawer.css';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const { formatPrice, currency } = useCurrency();

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
