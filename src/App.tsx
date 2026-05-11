import { useState, useEffect } from 'react';
import './App.css';
import { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import { SlidersHorizontal } from 'lucide-react';

const ProductGrid = lazy(() => import('./components/ProductGrid'));
const Footer = lazy(() => import('./components/Footer'));
const InstallBanner = lazy(() => import('./components/InstallBanner'));
const CartDrawer = lazy(() => import('./components/CartDrawer'));
const CompareTray = lazy(() => import('./components/CompareTray'));
const CompareModal = lazy(() => import('./components/CompareModal'));
import { CartProvider } from './context/CartContext';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  const [activeCategory, setActiveCategory] = useState('hardware');
  const [activeSubCategory, setActiveSubCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
  const [sortBy, setSortBy] = useState('featured');
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const toggleCompare = (id: string) => {
    setCompareIds(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeCategory, activeSubCategory]);

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
                <CategoryTabs 
                  activeCategory={activeCategory} 
                  setActiveCategory={(cat) => {
                    setActiveCategory(cat);
                    setSearchQuery('');
                    setActiveSubCategory('All');
                  }}
                  activeSubCategory={activeSubCategory}
                  setActiveSubCategory={setActiveSubCategory}
                />
                
                <div className="mobile-filter-trigger-wrapper">
                  <button 
                    className="mobile-filter-btn glass-panel"
                    onClick={() => setShowMobileFilters(true)}
                  >
                    <SlidersHorizontal size={18} />
                    Filter & Sort
                  </button>
                </div>

                <div className="catalog-layout">
                  <FilterSidebar 
                    activeCategory={activeCategory}
                    activeSubCategory={activeSubCategory}
                    setActiveSubCategory={setActiveSubCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    isOpen={showMobileFilters}
                    onClose={() => setShowMobileFilters(false)}
                  />
                  <div className="catalog-content">
                    <Suspense fallback={<div className="text-center py-5">Loading products...</div>}>
                      <ProductGrid 
                        category={activeCategory} 
                        subCategory={activeSubCategory}
                        searchQuery={searchQuery}
                        priceRange={priceRange}
                        sortBy={sortBy}
                        isLoading={isLoading}
                        compareIds={compareIds}
                        onToggleCompare={toggleCompare}
                      />
                    </Suspense>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Suspense fallback={null}>
            <InstallBanner />
            <CartDrawer />
            <CompareTray 
              compareIds={compareIds} 
              onCompare={() => setShowCompareModal(true)}
              onRemove={toggleCompare}
            />
            {showCompareModal && (
              <CompareModal 
                compareIds={compareIds} 
                onClose={() => setShowCompareModal(false)} 
              />
            )}
            <Footer />
          </Suspense>
        </div>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;
