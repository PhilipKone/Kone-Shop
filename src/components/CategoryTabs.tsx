import './CategoryTabs.css';

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeSubCategory: string;
  setActiveSubCategory: (sub: string) => void;
}

export default function CategoryTabs({ 
  activeCategory, 
  setActiveCategory,
  activeSubCategory,
  setActiveSubCategory
}: CategoryTabsProps) {
  const categories = [
    { id: 'hardware', label: 'Hardware' },
    { id: 'software', label: 'Software' },
    { id: 'merch', label: 'Kone Wears' }
  ];

  const subCategories = [
    'All', 'Computing', 'Dev Kits', 'Components', 'Peripherals'
  ];

  return (
    <div className="tabs-wrapper">
      <div className="category-tabs glass-panel">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(cat.id);
              setActiveSubCategory('All');
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
