import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ isCollapsed = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({
    temp: '28°C',
    condition: 'Sunny',
    humidity: '65%'
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/live-demo', label: 'Live Demo', icon: 'Play' },
    { path: '/features-deep-dive', label: 'Features', icon: 'Layers' },
    { path: '/technology-stack', label: 'Technology', icon: 'Cpu' },
    { path: '/government-schemes', label: 'Schemes', icon: 'FileText' }
  ];

  const secondaryItems = [
    { path: '/developer-hub', label: 'Developer Hub', icon: 'Code' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-brand-sm' 
          : 'bg-background'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-primary-foreground"
                fill="currentColor"
              >
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z" />
                <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-heading font-semibold text-primary">
                AgriAssist
              </span>
              <span className="text-xs text-text-secondary hidden sm:block">
                Smart Farming Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <a
                key={item?.path}
                href={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.label}</span>
              </a>
            ))}
          </nav>

          {/* Weather Widget & Actions */}
          <div className="flex items-center space-x-4">
            {/* Weather Display */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-surface rounded-lg border border-border">
              <Icon name="Sun" size={16} className="text-accent weather-pulse" />
              <div className="text-sm">
                <span className="font-medium text-text-primary">{currentWeather?.temp}</span>
                <span className="text-text-secondary ml-1">{currentWeather?.condition}</span>
              </div>
            </div>

            {/* Voice Assistant Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex voice-pulse"
              iconName="Mic"
              iconPosition="left"
            >
              Voice
            </Button>

            {/* More Menu */}
            <div className="relative hidden lg:block">
              <Button
                variant="ghost"
                size="sm"
                iconName="MoreHorizontal"
                className="text-text-secondary hover:text-primary"
              />
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={toggleMobileMenu}
              iconName={isMobileMenuOpen ? "X" : "Menu"}
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-4 py-2 space-y-1">
              {navigationItems?.map((item) => (
                <a
                  key={item?.path}
                  href={item?.path}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 touch-target ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.label}</span>
                </a>
              ))}
              
              <div className="border-t border-border pt-2 mt-2">
                {secondaryItems?.map((item) => (
                  <a
                    key={item?.path}
                    href={item?.path}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 touch-target ${
                      isActivePath(item?.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-text-secondary hover:text-primary hover:bg-surface'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon name={item?.icon} size={20} />
                    <span>{item?.label}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Weather & Voice */}
              <div className="border-t border-border pt-3 mt-3 space-y-3">
                <div className="flex items-center justify-between px-3 py-2 bg-surface rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="Sun" size={18} className="text-accent" />
                    <span className="text-sm font-medium text-text-primary">
                      {currentWeather?.temp} • {currentWeather?.condition}
                    </span>
                  </div>
                  <span className="text-xs text-text-secondary">
                    Humidity: {currentWeather?.humidity}
                  </span>
                </div>
                
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Mic"
                  iconPosition="left"
                  className="voice-pulse"
                >
                  Voice Assistant
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;