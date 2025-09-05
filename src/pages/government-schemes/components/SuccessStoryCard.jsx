import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStoryCard = ({ story }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    // In a real implementation, this would open a video modal or player
    console.log('Playing video for:', story?.farmerName);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-brand-md transition-all duration-300">
      {/* Image/Video Section */}
      <div className="relative h-48 bg-surface overflow-hidden">
        <Image
          src={story?.image}
          alt={`${story?.farmerName} success story`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="ghost"
            size="lg"
            onClick={handlePlayVideo}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
            iconName="Play"
          />
        </div>

        {/* Location Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-text-primary">
            <Icon name="MapPin" size={12} />
            <span>{story?.location}</span>
          </div>
        </div>

        {/* Scheme Badge */}
        <div className="absolute top-4 right-4">
          <div className="px-2 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground">
            {story?.schemeName}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
              {story?.farmerName}
            </h3>
            <p className="text-sm text-text-secondary">
              {story?.farmSize} • {story?.cropType}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-accent">
              ₹{story?.benefitAmount}
            </div>
            <div className="text-xs text-text-secondary">
              Benefit Received
            </div>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-sm text-text-secondary italic mb-4 border-l-4 border-primary pl-4">
          "{story?.testimonial}"
        </blockquote>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-surface p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="TrendingDown" size={16} className="text-red-500" />
              <span className="text-xs font-medium text-text-secondary">Before</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-text-primary">
                Yield: {story?.beforeYield}
              </div>
              <div className="text-sm text-text-primary">
                Income: ₹{story?.beforeIncome}
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="TrendingUp" size={16} className="text-green-500" />
              <span className="text-xs font-medium text-green-700">After</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-green-800 font-medium">
                Yield: {story?.afterYield}
              </div>
              <div className="text-sm text-green-800 font-medium">
                Income: ₹{story?.afterIncome}
              </div>
            </div>
          </div>
        </div>

        {/* Improvement Metrics */}
        <div className="flex items-center justify-between mb-4 p-3 bg-accent/10 rounded-lg">
          <div className="text-center">
            <div className="text-lg font-semibold text-accent">
              {story?.yieldIncrease}%
            </div>
            <div className="text-xs text-text-secondary">
              Yield Increase
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-accent">
              {story?.incomeIncrease}%
            </div>
            <div className="text-xs text-text-secondary">
              Income Boost
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-accent">
              {story?.timeToReceive}
            </div>
            <div className="text-xs text-text-secondary">
              Processing Time
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-text-primary mb-2">Key Learnings:</h4>
          <ul className="space-y-1">
            {story?.keyLearnings?.map((learning, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                <Icon name="CheckCircle" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4 text-xs text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={12} />
              <span>{story?.applicationDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{story?.timeToReceive}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="Share2"
              className="text-text-secondary hover:text-primary"
            />
            <Button
              variant="outline"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
            >
              View Scheme
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;