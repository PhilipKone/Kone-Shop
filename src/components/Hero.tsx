import { ShoppingCart } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content glass-panel">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Store Open
          </div>
          <h1 className="hero-title">
            The Official <span className="text-gradient">Supply Shop</span> for the Tech Community
          </h1>
          <p className="hero-subtitle">
            Equipping you with the right tools to build the future. From high-end GPUs and AI infrastructure to microcontrollers and official merch.
          </p>
          <div className="hero-actions">
            <a href="#catalog" className="btn-primary">
              <ShoppingCart size={20} />
              Browse Catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
