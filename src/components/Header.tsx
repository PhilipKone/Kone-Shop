import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import './Header.css';

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const { currency, setCurrency } = useCurrency();

  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <div className="logo-icon">
            <ShoppingBag size={24} />
          </div>
          <span>Kone Shop</span>
        </div>
        <nav className="nav-links">
          <div className="currency-toggle">
            <button 
              className={`currency-btn ${currency === 'GHS' ? 'active' : ''}`}
              onClick={() => setCurrency('GHS')}
              aria-label="Switch currency to GHS"
            >
              GHS
            </button>
            <button 
              className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
              onClick={() => setCurrency('USD')}
              aria-label="Switch currency to USD"
            >
              USD
            </button>
          </div>
          <button className="cart-trigger" onClick={() => setIsCartOpen(true)} aria-label="Open shopping cart">
            <ShoppingCart size={20} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}
