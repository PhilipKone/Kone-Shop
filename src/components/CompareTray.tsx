import { X, ArrowLeftRight } from 'lucide-react';
import { products } from '../data/products';
import './CompareTray.css';

interface CompareTrayProps {
  compareIds: string[];
  onCompare: () => void;
  onRemove: (id: string) => void;
}

export default function CompareTray({ compareIds, onCompare, onRemove }: CompareTrayProps) {
  if (compareIds.length === 0) return null;

  const allProducts = [...products.hardware, ...products.software, ...products.merch];
  const selectedProducts = compareIds.map(id => allProducts.find(p => p.id === id)).filter(Boolean);

  return (
    <div className="compare-tray-wrapper">
      <div className="compare-tray glass-panel">
        <div className="compare-items">
          {selectedProducts.map((p: any) => (
            <div key={p.id} className="compare-item-thumb">
              <img src={p.image} alt={p.name} />
              <button className="remove-thumb" onClick={() => onRemove(p.id)} aria-label={`Remove ${p.name} from comparison`}>
                <X size={12} />
              </button>
            </div>
          ))}
          {compareIds.length < 3 && (
            <div className="compare-placeholder">
              <span>+ Add to compare</span>
            </div>
          )}
        </div>
        
        <div className="compare-actions">
          <div className="compare-count">{compareIds.length} / 3 Items</div>
          <button 
            className="compare-now-btn btn-primary"
            disabled={compareIds.length < 2}
            onClick={onCompare}
          >
            <ArrowLeftRight size={18} />
            Compare Now
          </button>
        </div>
      </div>
    </div>
  );
}
