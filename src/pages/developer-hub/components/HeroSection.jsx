import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-surface to-accent/5 py-16 lg:py-24">
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary">
              <Icon name="Code" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-lg font-heading font-semibold text-primary">
              Developer Hub
            </span>
          </div>
          
          <h1 className="text-responsive-3xl font-heading font-bold text-text-primary mb-6">
            Build the Future of Agriculture
            <span className="block text-primary mt-2">
              with AgriAssist APIs
            </span>
          </h1>
          
          <p className="text-responsive-lg text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Integrate agricultural intelligence into your applications with our comprehensive APIs. 
            Access crop recommendations, weather data, market prices, and government schemes through 
            developer-friendly endpoints designed for scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="default" 
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="touch-target"
            >
              Try API Sandbox
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="FileText"
              iconPosition="left"
              className="touch-target"
            >
              View Documentation
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-text-secondary">API Calls/Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-text-secondary">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-text-secondary">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-primary mb-1">15</div>
              <div className="text-sm text-text-secondary">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;