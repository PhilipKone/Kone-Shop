import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import InstallBanner from './components/InstallBanner';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  const [activeCategory, setActiveCategory] = useState('hardware');

  return (
    <CurrencyProvider>
      <CartProvider>
        <div className="app-container">
          <Header />
          <main>
            <Hero />
            <section className="catalog-section" id="catalog">
              <div className="container">
                <h2 className="section-title text-center">Store <span className="text-gradient">Catalog</span></h2>
                <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <ProductGrid category={activeCategory} />
              </div>
            </section>
          </main>
          <InstallBanner />
          <CartDrawer />
          <Footer />
        </div>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;
