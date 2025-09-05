import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SchemeCard = ({ scheme, onApply, onViewDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'closing-soon':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'closed':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'subsidy':
        return 'DollarSign';
      case 'loan':
        return 'CreditCard';
      case 'insurance':
        return 'Shield';
      case 'training':
        return 'GraduationCap';
      case 'equipment':
        return 'Wrench';
      default:
        return 'FileText';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-md transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
            <Icon 
              name={getCategoryIcon(scheme?.category)} 
              size={24} 
              className="text-primary" 
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
              {scheme?.name}
            </h3>
            <p className="text-sm text-text-secondary mb-2">
              {scheme?.department}
            </p>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(scheme?.status)}`}>
                {scheme?.status === 'active' ? 'Active' : 
                 scheme?.status === 'closing-soon' ? 'Closing Soon' : 'Closed'}
              </span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-surface text-text-secondary border border-border">
                {scheme?.category}
              </span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName="Mic"
          className="voice-pulse"
          onClick={() => {
            // Voice explanation functionality
            if ('speechSynthesis' in window) {
              const utterance = new SpeechSynthesisUtterance(
                `${scheme.name}. ${scheme.description}. Subsidy amount: ${scheme.subsidyAmount}. Deadline: ${scheme.deadline}`
              );
              utterance.lang = 'en-IN';
              speechSynthesis.speak(utterance);
            }
          }}
        />
      </div>
      {/* Key Information */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-surface p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <Icon name="DollarSign" size={16} className="text-accent" />
            <span className="text-xs font-medium text-text-secondary">Subsidy Amount</span>
          </div>
          <p className="text-lg font-semibold text-primary">
            {scheme?.subsidyAmount}
          </p>
        </div>
        <div className="bg-surface p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <Icon name="Calendar" size={16} className="text-accent" />
            <span className="text-xs font-medium text-text-secondary">Deadline</span>
          </div>
          <p className="text-sm font-semibold text-text-primary">
            {scheme?.deadline}
          </p>
        </div>
      </div>
      {/* Description */}
      <p className="text-sm text-text-secondary mb-4 line-clamp-2">
        {scheme?.description}
      </p>
      {/* Eligibility Preview */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-text-primary mb-2">Key Eligibility:</h4>
        <div className="flex flex-wrap gap-2">
          {scheme?.eligibility?.slice(0, 3)?.map((criteria, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {criteria}
            </span>
          ))}
          {scheme?.eligibility?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{scheme?.eligibility?.length - 3} more
            </span>
          )}
        </div>
      </div>
      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-border pt-4 mb-4">
          <div className="space-y-4">
            {/* Full Eligibility */}
            <div>
              <h4 className="text-sm font-medium text-text-primary mb-2">
                Complete Eligibility Criteria:
              </h4>
              <ul className="space-y-1">
                {scheme?.eligibility?.map((criteria, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                    <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documents */}
            <div>
              <h4 className="text-sm font-medium text-text-primary mb-2">
                Required Documents:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {scheme?.documents?.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="FileText" size={14} className="text-accent" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Steps */}
            <div>
              <h4 className="text-sm font-medium text-text-primary mb-2">
                Application Process:
              </h4>
              <div className="space-y-2">
                {scheme?.applicationSteps?.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {index + 1}
                    </div>
                    <span className="text-sm text-text-secondary">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
        >
          {isExpanded ? 'Show Less' : 'View Details'}
        </Button>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(scheme)}
            iconName="ExternalLink"
            iconPosition="right"
          >
            Learn More
          </Button>
          {scheme?.status === 'active' && (
            <Button
              variant="default"
              size="sm"
              onClick={() => onApply(scheme)}
              iconName="Send"
              iconPosition="right"
            >
              Apply Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemeCard;