import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentWeather, setCurrentWeather] = useState({
    location: 'Delhi, India',
    temp: '28°C',
    condition: 'Sunny',
    humidity: '65%',
    windSpeed: '12 km/h'
  });

  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [voiceDemo, setVoiceDemo] = useState('');

  const handleVoiceDemo = () => {
    setIsVoiceActive(true);
    setVoiceDemo('मुझे गेहूं की खेती के लिए सलाह चाहिए');
    
    setTimeout(() => {
      setVoiceDemo('Wheat cultivation recommendation: Plant in November-December for optimal yield...');
      setIsVoiceActive(false);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      {/* Weather Widget */}
      <div className="absolute top-20 right-4 lg:right-8 z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-brand-lg border border-green-200"
        >
          <div className="flex items-center space-x-3">
            <Icon name="Sun" size={24} className="text-accent weather-pulse" />
            <div>
              <p className="text-sm font-medium text-text-primary">{currentWeather?.temp}</p>
              <p className="text-xs text-text-secondary">{currentWeather?.location}</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-text-secondary">
            <p>Humidity: {currentWeather?.humidity}</p>
            <p>Wind: {currentWeather?.windSpeed}</p>
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-text-primary leading-tight">
                Technology that{' '}
                <span className="text-primary">speaks</span>{' '}
                the farmer's{' '}
                <span className="text-accent">language</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-text-secondary max-w-2xl">
                Get personalized crop recommendations, real-time market prices, and agricultural guidance in your local language - even when offline.
              </p>
            </div>

            {/* Voice Demo Section */}
            <div className="bg-white rounded-xl p-6 shadow-brand-md border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Mic" size={20} className="text-primary" />
                <span className="text-sm font-medium text-text-primary">Voice Assistant Demo</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Button
                    variant={isVoiceActive ? "default" : "outline"}
                    size="sm"
                    onClick={handleVoiceDemo}
                    iconName="Play"
                    iconPosition="left"
                    className={isVoiceActive ? "voice-pulse" : ""}
                  >
                    {isVoiceActive ? "Listening..." : "Try Voice Input"}
                  </Button>
                </div>
                
                {voiceDemo && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-surface p-3 rounded-lg border border-green-200"
                  >
                    <p className="text-sm text-text-primary">{voiceDemo}</p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8 py-4"
                onClick={() => window.location.href = '/live-demo'}
              >
                Try Live Demo
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Users"
                iconPosition="left"
                className="text-lg px-8 py-4"
                onClick={() => window.location.href = '/success-stories'}
              >
                See Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-text-secondary">Farmers Served</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">25%</p>
                <p className="text-sm text-text-secondary">Avg Yield Increase</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-sm text-text-secondary">Languages</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl p-8 shadow-brand-xl border border-green-200">
              {/* Mock Phone Interface */}
              <div className="bg-gray-900 rounded-xl p-4 mb-6">
                <div className="bg-green-500 rounded-lg p-4 text-white">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Smartphone" size={20} />
                    <span className="font-medium">AgriAssist Mobile</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-white/20 rounded p-2">
                      <p className="text-sm">📍 Current Location: Delhi</p>
                      <p className="text-sm">🌡️ Temperature: 28°C</p>
                    </div>
                    
                    <div className="bg-white/20 rounded p-2">
                      <p className="text-sm font-medium">Recommended Crops:</p>
                      <p className="text-xs">🌾 Wheat - Plant by Nov 15</p>
                      <p className="text-xs">🥔 Potato - Ideal conditions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-surface rounded-lg">
                  <Icon name="Wifi" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Works Offline</p>
                </div>
                <div className="text-center p-4 bg-surface rounded-lg">
                  <Icon name="Languages" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">12 Languages</p>
                </div>
                <div className="text-center p-4 bg-surface rounded-lg">
                  <Icon name="TrendingUp" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Market Prices</p>
                </div>
                <div className="text-center p-4 bg-surface rounded-lg">
                  <Icon name="Cloud" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Weather Data</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-accent text-white p-3 rounded-full shadow-lg"
            >
              <Icon name="Zap" size={20} />
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-primary text-white p-3 rounded-full shadow-lg"
            >
              <Icon name="Leaf" size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;