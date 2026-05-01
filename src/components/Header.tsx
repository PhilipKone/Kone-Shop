import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Header.css';

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();

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
          <a href="#">Store</a>
          <a href="#">Orders</a>
          <button className="cart-trigger" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={20} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}
