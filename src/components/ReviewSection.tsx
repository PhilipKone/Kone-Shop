import { useState } from 'react';
import { Star, MessageSquare, ShieldCheck, Send } from 'lucide-react';
import { reviews as initialReviews } from '../data/reviews';
import type { Review } from '../data/reviews';
import './ReviewSection.css';

interface ReviewSectionProps {
  productId: string;
}

export default function ReviewSection({ productId }: ReviewSectionProps) {
  const [productReviews, setProductReviews] = useState<Review[]>(
    initialReviews.filter(r => r.productId === productId)
  );
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [showForm, setShowForm] = useState(false);

  const averageRating = productReviews.length > 0
    ? (productReviews.reduce((acc, r) => acc + r.rating, 0) / productReviews.length).toFixed(1)
    : '0.0';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newReview: Review = {
      id: `r${Date.now()}`,
      productId,
      userName: 'Kone Student',
      rating: newRating,
      comment: newComment,
      date: new Date().toISOString().split('T')[0],
      isVerified: false
    };

    setProductReviews([newReview, ...productReviews]);
    setNewComment('');
    setShowForm(false);
  };

  return (
    <div className="review-section">
      <div className="review-header">
        <div className="rating-summary">
          <div className="avg-rating">{averageRating}</div>
          <div className="rating-meta">
            <div className="stars-row">
              {[1, 2, 3, 4, 5].map(i => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i <= Math.round(Number(averageRating)) ? 'star-filled' : 'star-empty'} 
                />
              ))}
            </div>
            <span className="total-count">{productReviews.length} Reviews</span>
          </div>
        </div>
        <button className="write-review-btn" onClick={() => setShowForm(!showForm)}>
          <MessageSquare size={18} />
          {showForm ? 'Cancel' : 'Write a Review'}
        </button>
      </div>

      {showForm && (
        <form className="review-form glass-panel" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Rating</label>
            <div className="stars-input">
              {[1, 2, 3, 4, 5].map(i => (
                <Star 
                  key={i} 
                  size={24} 
                  className={i <= newRating ? 'star-filled clickable' : 'star-empty clickable'}
                  onClick={() => setNewRating(i)}
                />
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Comment</label>
            <textarea 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="What do you think of this product?"
              required
            />
          </div>
          <button type="submit" className="submit-review-btn">
            <Send size={18} />
            Post Review
          </button>
        </form>
      )}

      <div className="reviews-list">
        {productReviews.length === 0 ? (
          <div className="no-reviews">No reviews yet. Be the first to share your experience!</div>
        ) : (
          productReviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-card-header">
                <div className="user-info">
                  <div className="user-avatar">{review.userName.charAt(0)}</div>
                  <div className="user-details">
                    <span className="user-name">
                      {review.userName}
                      {review.isVerified && <ShieldCheck size={14} className="verified-icon" />}
                    </span>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i <= review.rating ? 'star-filled' : 'star-empty'} 
                    />
                  ))}
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
