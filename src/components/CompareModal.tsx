import { X, ArrowLeftRight } from 'lucide-react';
import { products } from '../data/products';
import './CompareModal.css';

interface CompareModalProps {
  compareIds: string[];
  onClose: () => void;
}

export default function CompareModal({ compareIds, onClose }: CompareModalProps) {
  const allProducts = [...products.hardware, ...products.software, ...products.merch];
  const selectedProducts = compareIds.map(id => allProducts.find(p => p.id === id)).filter(Boolean);

  // Extract all unique spec keys
  const specKeys = Array.from(new Set(
    selectedProducts.flatMap((p: any) => p.specs ? Object.keys(p.specs) : [])
  ));

  return (
    <div className="compare-modal-overlay" onClick={onClose}>
      <div className="compare-modal-content glass-panel" onClick={e => e.stopPropagation()}>
        <div className="compare-modal-header">
          <div className="header-title-row">
            <ArrowLeftRight size={24} className="header-icon" />
            <h2>Product Comparison</h2>
          </div>
          <button className="compare-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="compare-table-wrapper">
          <table className="compare-table">
            <thead>
              <tr>
                <th className="spec-label-col">Feature</th>
                {selectedProducts.map((p: any) => (
                  <th key={p.id} className="product-header-col">
                    <div className="header-product-info">
                      <img src={p.image} alt={p.name} />
                      <span className="p-name">{p.name}</span>
                      <span className="p-price">${p.price.toFixed(2)}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="spec-label">Category</td>
                {selectedProducts.map((p: any) => (
                  <td key={p.id}>{p.subCategory || p.category}</td>
                ))}
              </tr>
              {specKeys.map(key => (
                <tr key={key}>
                  <td className="spec-label">{key}</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.id}>{p.specs?.[key] || '—'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
