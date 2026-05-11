import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, MapPin, Phone, Mail, User, Package, CheckCircle2, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import './CheckoutModal.css';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CheckoutStep = 'info' | 'summary' | 'success';

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cart, totalPrice, clearCart } = useCart();
  const { formatPrice, currency } = useCurrency();
  const [step, setStep] = useState<CheckoutStep>('info');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('summary');
  };

  const handleComplete = () => {
    const phoneNumber = '233551993820';
    const itemLines = cart.map(item => `• ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})`).join('%0A');
    
    let totalText = `*Total: ${formatPrice(totalPrice)}*`;
    if (currency === 'USD') {
      totalText += `%0A(Base: GH₵ ${totalPrice.toLocaleString()})`;
    }

    const message = `Hello Kone Shop! 🛍️%0A%0ANew Order from *${formData.name}*%0A%0A*Customer Info:*%0A📞 ${formData.phone}%0A📧 ${formData.email}%0A📍 ${formData.address}%0A%0A*Order Items:*%0A${itemLines}%0A%0A${totalText}${formData.notes ? `%0A%0A*Notes:* ${formData.notes}` : ''}%0A%0APlease confirm my order!`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setStep('success');
    // We'll clear the cart after a small delay or upon closing success
  };

  const closeAndClear = () => {
    if (step === 'success') clearCart();
    onClose();
    setStep('info');
  };

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-modal glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="checkout-close" onClick={closeAndClear}>
          <X size={24} />
        </button>

        <div className="checkout-header">
          <div className="checkout-steps">
            <div className={`step-item ${step === 'info' ? 'active' : 'completed'}`}>
              <span className="step-num">{step !== 'info' ? <CheckCircle2 size={16} /> : '1'}</span>
              <span className="step-label">Details</span>
            </div>
            <div className="step-line" />
            <div className={`step-item ${step === 'summary' ? 'active' : step === 'success' ? 'completed' : ''}`}>
              <span className="step-num">{step === 'success' ? <CheckCircle2 size={16} /> : '2'}</span>
              <span className="step-label">Review</span>
            </div>
            <div className="step-line" />
            <div className={`step-item ${step === 'success' ? 'active' : ''}`}>
              <span className="step-num">3</span>
              <span className="step-label">Finish</span>
            </div>
          </div>
        </div>

        <div className="checkout-body">
          {step === 'info' && (
            <form className="checkout-form" onSubmit={handleNext}>
              <h3 className="step-title">Shipping Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label><User size={16} /> Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label><Mail size={16} /> Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                  />
                </div>
                <div className="form-group">
                  <label><Phone size={16} /> WhatsApp Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+233..."
                  />
                </div>
                <div className="form-group full-width">
                  <label><MapPin size={16} /> Delivery Address</label>
                  <textarea 
                    name="address" 
                    required 
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House No, Street Name, Area, City"
                    rows={3}
                  />
                </div>
                <div className="form-group full-width">
                  <label>Order Notes (Optional)</label>
                  <input 
                    type="text" 
                    name="notes" 
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special instructions?"
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary checkout-next-btn">
                Review Order <ChevronRight size={18} />
              </button>
            </form>
          )}

          {step === 'summary' && (
            <div className="checkout-summary">
              <h3 className="step-title">Order Summary</h3>
              <div className="summary-details glass-panel">
                <div className="summary-section">
                  <h4><MapPin size={16} /> Shipping To</h4>
                  <p>{formData.name}</p>
                  <p>{formData.address}</p>
                  <p>{formData.phone}</p>
                </div>
                <div className="summary-section">
                  <h4><Package size={16} /> Items</h4>
                  <div className="summary-items">
                    {cart.map(item => (
                      <div key={item.id} className="summary-item">
                        <span>{item.quantity}x {item.name}</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="summary-total">
                  <span>Grand Total</span>
                  <span className="total-amount">{formatPrice(totalPrice)}</span>
                </div>
              </div>
              <div className="checkout-actions">
                <button className="btn-secondary" onClick={() => setStep('info')}>
                  <ChevronLeft size={18} /> Back
                </button>
                <button className="btn-primary" onClick={handleComplete}>
                  Complete via WhatsApp <Send size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="checkout-success text-center">
              <div className="success-icon">
                <CheckCircle2 size={80} />
              </div>
              <h3 className="success-title">Order Submitted!</h3>
              <p>We've sent your order details to our WhatsApp line. Our team will contact you shortly to finalize delivery.</p>
              <button className="btn-primary" onClick={closeAndClear}>
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
