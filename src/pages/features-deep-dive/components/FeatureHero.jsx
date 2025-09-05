import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeatureHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-surface to-accent/5 py-16 lg:py-24">
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
              <Icon name="Layers" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Complete Feature Suite
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Comprehensive Agricultural
            <span className="text-primary block">Intelligence Platform</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how AgriAssist transforms traditional farming with intelligent crop recommendations, 
            real-time market insights, and voice-first technology designed for every farmer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="default" 
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Try Interactive Demo
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Download Feature Guide
            </Button>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-text-secondary">Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-text-secondary">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-text-secondary">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-text-secondary">Offline Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;