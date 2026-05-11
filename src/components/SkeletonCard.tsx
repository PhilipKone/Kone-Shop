import './ProductGrid.css';

export default function SkeletonCard() {
  return (
    <div className="product-card skeleton-card glass-panel">
      <div className="product-image-wrapper skeleton-shimmer"></div>
      <div className="product-info">
        <div className="skeleton-line skeleton-shimmer" style={{ width: '40%', height: '12px' }}></div>
        <div className="skeleton-line skeleton-shimmer" style={{ width: '80%', height: '24px', marginTop: '8px' }}></div>
        <div className="product-footer" style={{ marginTop: 'auto' }}>
          <div className="skeleton-line skeleton-shimmer" style={{ width: '30%', height: '24px' }}></div>
          <div className="skeleton-shimmer" style={{ width: '40px', height: '40px', borderRadius: '10px' }}></div>
        </div>
      </div>
    </div>
  );
}
