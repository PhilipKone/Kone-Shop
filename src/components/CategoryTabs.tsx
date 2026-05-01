import './CategoryTabs.css';

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryTabs({ activeCategory, setActiveCategory }: CategoryTabsProps) {
  const categories = [
    { id: 'hardware', label: 'Hardware' },
    { id: 'software', label: 'Software' },
    { id: 'merch', label: 'Kone Wears' }
  ];

  return (
    <div className="category-tabs glass-panel">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
          onClick={() => setActiveCategory(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
