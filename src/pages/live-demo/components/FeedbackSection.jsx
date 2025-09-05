import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FeedbackSection = ({ recommendations, onFeedbackSubmit }) => {
  const [feedback, setFeedback] = useState({
    overallRating: 0,
    accuracy: 0,
    usefulness: 0,
    easeOfUse: 0,
    comments: '',
    wouldRecommend: false,
    improvements: [],
    contactMethod: 'none'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const improvementOptions = [
    { id: 'more-crops', label: 'More crop options', icon: 'Sprout' },
    { id: 'better-ui', label: 'Better user interface', icon: 'Smartphone' },
    { id: 'voice-support', label: 'Enhanced voice support', icon: 'Mic' },
    { id: 'local-language', label: 'More local languages', icon: 'Globe' },
    { id: 'market-data', label: 'Real-time market data', icon: 'TrendingUp' },
    { id: 'weather-alerts', label: 'Weather alerts', icon: 'CloudRain' },
    { id: 'expert-chat', label: 'Expert consultation', icon: 'MessageCircle' },
    { id: 'offline-mode', label: 'Better offline support', icon: 'Wifi' }
  ];

  const contactMethods = [
    { id: 'none', label: 'No follow-up needed' },
    { id: 'phone', label: 'Phone call' },
    { id: 'whatsapp', label: 'WhatsApp message' },
    { id: 'email', label: 'Email' }
  ];

  const handleRatingChange = (category, rating) => {
    setFeedback(prev => ({
      ...prev,
      [category]: rating
    }));
  };

  const handleImprovementToggle = (improvementId) => {
    setFeedback(prev => ({
      ...prev,
      improvements: prev?.improvements?.includes(improvementId)
        ? prev?.improvements?.filter(id => id !== improvementId)
        : [...prev?.improvements, improvementId]
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (onFeedbackSubmit) {
      onFeedbackSubmit(feedback);
    }

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const StarRating = ({ rating, onRatingChange, label }) => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-text-primary">{label}</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5]?.map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onRatingChange(star)}
              className={`w-8 h-8 rounded-full transition-colors duration-200 ${
                star <= rating
                  ? 'text-accent hover:text-accent/80' :'text-muted-foreground hover:text-accent/50'
              }`}
            >
              <Icon name="Star" size={20} fill={star <= rating ? 'currentColor' : 'none'} />
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-xl p-6 border border-border shadow-brand-md">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
            Thank You for Your Feedback!
          </h3>
          <p className="text-text-secondary mb-6">
            Your input helps us improve AgriAssist for farmers like you. We'll use your suggestions to make our recommendations even better.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant="default"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={() => {
                setSubmitted(false);
                setFeedback({
                  overallRating: 0,
                  accuracy: 0,
                  usefulness: 0,
                  easeOfUse: 0,
                  comments: '',
                  wouldRecommend: false,
                  improvements: [],
                  contactMethod: 'none'
                });
              }}
            >
              Try Another Demo
            </Button>
            <Button
              variant="outline"
              iconName="Share"
              iconPosition="left"
            >
              Share with Friends
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-brand-md">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            Share Your Experience
          </h3>
          <p className="text-sm text-text-secondary">
            Help us improve AgriAssist with your valuable feedback
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Overall Rating */}
        <div className="p-4 bg-surface rounded-lg border border-border">
          <StarRating
            rating={feedback?.overallRating}
            onRatingChange={(rating) => handleRatingChange('overallRating', rating)}
            label="Overall Experience"
          />
        </div>

        {/* Detailed Ratings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-surface rounded-lg border border-border">
            <StarRating
              rating={feedback?.accuracy}
              onRatingChange={(rating) => handleRatingChange('accuracy', rating)}
              label="Recommendation Accuracy"
            />
          </div>
          <div className="p-4 bg-surface rounded-lg border border-border">
            <StarRating
              rating={feedback?.usefulness}
              onRatingChange={(rating) => handleRatingChange('usefulness', rating)}
              label="Information Usefulness"
            />
          </div>
          <div className="p-4 bg-surface rounded-lg border border-border">
            <StarRating
              rating={feedback?.easeOfUse}
              onRatingChange={(rating) => handleRatingChange('easeOfUse', rating)}
              label="Ease of Use"
            />
          </div>
        </div>

        {/* Would Recommend */}
        <div className="p-4 bg-surface rounded-lg border border-border">
          <Checkbox
            label="I would recommend AgriAssist to other farmers"
            checked={feedback?.wouldRecommend}
            onChange={(e) => setFeedback(prev => ({ ...prev, wouldRecommend: e?.target?.checked }))}
          />
        </div>

        {/* Improvement Suggestions */}
        <div>
          <h4 className="text-sm font-medium text-text-primary mb-3">
            What would you like us to improve? (Select all that apply)
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {improvementOptions?.map((option) => (
              <div
                key={option?.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                  feedback?.improvements?.includes(option?.id)
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
                }`}
                onClick={() => handleImprovementToggle(option?.id)}
              >
                <div className="flex items-center space-x-2">
                  <Icon name={option?.icon} size={16} className="text-primary" />
                  <span className="text-sm text-text-primary">{option?.label}</span>
                </div>
                {feedback?.improvements?.includes(option?.id) && (
                  <Icon name="Check" size={14} className="text-primary mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Additional Comments (Optional)
          </label>
          <textarea
            value={feedback?.comments}
            onChange={(e) => setFeedback(prev => ({ ...prev, comments: e?.target?.value }))}
            placeholder="Tell us more about your experience or suggestions for improvement..."
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>

        {/* Contact Preference */}
        <div>
          <h4 className="text-sm font-medium text-text-primary mb-3">
            How would you like us to follow up? (Optional)
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {contactMethods?.map((method) => (
              <label
                key={method?.id}
                className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                  feedback?.contactMethod === method?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
                }`}
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={method?.id}
                  checked={feedback?.contactMethod === method?.id}
                  onChange={(e) => setFeedback(prev => ({ ...prev, contactMethod: e?.target?.value }))}
                  className="sr-only"
                />
                <span className="text-sm text-text-primary">{method?.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        {feedback?.contactMethod !== 'none' && (
          <div className="p-4 bg-surface rounded-lg border border-border">
            <Input
              label={`Your ${feedback?.contactMethod === 'phone' ? 'Phone Number' : 
                     feedback?.contactMethod === 'whatsapp' ? 'WhatsApp Number' : 'Email Address'}`}
              type={feedback?.contactMethod === 'email' ? 'email' : 'tel'}
              placeholder={`Enter your ${feedback?.contactMethod === 'phone' ? 'phone number' : 
                          feedback?.contactMethod === 'whatsapp' ? 'WhatsApp number' : 'email address'}`}
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            disabled={feedback?.overallRating === 0}
            iconName="Send"
            iconPosition="left"
            className="min-w-48"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </Button>
        </div>
      </form>
      {/* Privacy Note */}
      <div className="mt-6 p-3 bg-muted/50 rounded-lg border border-border">
        <div className="flex items-start space-x-2">
          <Icon name="Shield" size={16} className="text-primary mt-0.5" />
          <div>
            <p className="text-xs text-text-secondary">
              <strong>Privacy Note:</strong> Your feedback is anonymous and will only be used to improve our services. 
              Contact information is optional and will only be used if you request follow-up communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;