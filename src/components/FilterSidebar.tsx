import './FilterSidebar.css';
import { Filter, Search, ArrowUpDown, X } from 'lucide-react';

interface FilterSidebarProps {
  activeCategory: string;
  activeSubCategory: string;
  setActiveSubCategory: (sub: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterSidebar({ 
  activeCategory, 
  activeSubCategory, 
  setActiveSubCategory,
  searchQuery,
  setSearchQuery,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  isOpen,
  onClose
}: FilterSidebarProps) {
  const subCategories = [
    'All', 'Computing', 'Dev Kits', 'Components', 'Peripherals'
  ];

  const showSubCategories = activeCategory === 'hardware';

  return (
    <aside className={`filter-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="header-title">
          <Filter size={20} />
          <h3>Filters</h3>
        </div>
        <button className="mobile-close-btn" onClick={onClose} aria-label="Close filters">
          <X size={20} />
        </button>
      </div>

      <div className="filter-group">
        <label htmlFor="shop-search-input" className="filter-label">Search</label>
        <div className="search-wrapper">
          <Search size={16} className="search-icon" />
          <input 
            id="shop-search-input"
            type="text" 
            placeholder="Search products..." 
            className="search-input"
            aria-label="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="filter-group">
        <label htmlFor="sort-select" className="filter-label">Sort By</label>
        <div className="sort-wrapper">
          <ArrowUpDown size={16} className="sort-icon" />
          <select 
            id="sort-select"
            className="sort-select"
            aria-label="Sort products by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
          </select>
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-label">Categories</h4>
        <div className="filter-options">
          {showSubCategories ? (
            subCategories.map((sub) => (
              <button
                key={sub}
                className={`filter-option ${activeSubCategory === sub ? 'active' : ''}`}
                onClick={() => setActiveSubCategory(sub)}
                aria-label={`Filter by ${sub}`}
              >
                {sub}
              </button>
            ))
          ) : (
            <p className="filter-empty">No sub-categories available</p>
          )}
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-label">Price Range</h4>
        <div className="price-inputs">
          <input 
            type="number" 
            placeholder="Min" 
            aria-label="Minimum price"
            className="price-input"
            value={priceRange.min || ''}
            onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
          />
          <input 
            type="number" 
            placeholder="Max" 
            aria-label="Maximum price"
            className="price-input"
            value={priceRange.max === 1000000 ? '' : priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value ? Number(e.target.value) : 1000000 })}
          />
        </div>
      </div>

      <button 
        className="reset-btn"
        onClick={() => {
          setActiveSubCategory('All');
          setSearchQuery('');
          setPriceRange({ min: 0, max: 1000000 });
          setSortBy('featured');
        }}
      >
        Reset Filters
      </button>
    </aside>
  );
}
