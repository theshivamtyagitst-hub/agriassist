import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturesSection = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [isPlaying, setIsPlaying] = useState(null);

  const features = [
    {
      id: 'crop-recommendations',
      icon: 'Wheat',
      title: 'Smart Crop Recommendations',
      description: 'AI-powered suggestions based on soil, weather, and market conditions',
      details: `Get personalized crop recommendations using advanced AI that analyzes:\n• Soil composition and pH levels\n• Local weather patterns and forecasts\n• Historical yield data for your region\n• Current market prices and demand\n• Seasonal farming calendar`,
      voiceExplanation: 'Our AI analyzes your soil type, local weather, and market prices to recommend the best crops for maximum profit.',
      color: 'bg-green-500',
      stats: '94% accuracy rate'
    },
    {
      id: 'weather-integration',
      icon: 'Cloud',
      title: 'Real-time Weather Data',
      description: 'Hyperlocal weather forecasts and agricultural alerts',
      details: `Access comprehensive weather information including:\n• 7-day detailed forecasts\n• Rainfall predictions and alerts\n• Temperature and humidity tracking\n• Wind speed and direction\n• UV index and growing degree days`,
      voiceExplanation: 'Get precise weather forecasts for your exact location with farming-specific alerts and recommendations.',
      color: 'bg-blue-500',
      stats: '99.2% uptime'
    },
    {
      id: 'market-prices',
      icon: 'TrendingUp',
      title: 'Live Market Prices',
      description: 'Real-time mandi rates and price trend analysis',
      details: `Stay updated with market information:\n• Live mandi prices from 500+ markets\n• Price trend analysis and predictions\n• Best selling locations nearby\n• Seasonal price patterns\n• Profit margin calculations`,
      voiceExplanation: 'Track live market prices from over 500 mandis across India to get the best rates for your crops.',
      color: 'bg-orange-500',
      stats: '500+ markets'
    },
    {
      id: 'voice-support',
      icon: 'Mic',
      title: 'Voice Assistant',
      description: 'Speak in your local language for hands-free operation',
      details: `Voice-enabled features include:\n• Hindi and regional language support\n• Voice-to-text crop queries\n• Audio responses and explanations\n• Hands-free navigation\n• Voice-activated emergency alerts`,
      voiceExplanation: 'Ask questions in Hindi or your local language and get instant voice responses with farming advice.',
      color: 'bg-purple-500',
      stats: '12 languages'
    },
    {
      id: 'offline-mode',
      icon: 'Wifi',
      title: 'Works Offline',
      description: 'Access critical information even without internet',
      details: `Offline capabilities include:\n• Cached weather forecasts\n• Stored crop recommendations\n• Offline calculation tools\n• Emergency contact information\n• Basic farming calendar`,
      voiceExplanation: 'Continue using essential features even when internet is not available in your area.',
      color: 'bg-gray-600',
      stats: '72hrs offline data'
    },
    {
      id: 'government-schemes',
      icon: 'FileText',
      title: 'Government Schemes',
      description: 'Easy access to subsidies and agricultural programs',
      details: `Government scheme features:\n• State-specific subsidy information\n• Application process guidance\n• Eligibility checker tools\n• Document requirement lists\n• Application status tracking`,
      voiceExplanation: 'Find and apply for government subsidies and schemes available in your state with step-by-step guidance.',
      color: 'bg-indigo-500',
      stats: '200+ schemes'
    }
  ];

  const handleFeatureExpand = (featureId) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  const handleVoicePlay = (featureId) => {
    setIsPlaying(featureId);
    // Simulate voice playback
    setTimeout(() => {
      setIsPlaying(null);
    }, 3000);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4"
          >
            Everything You Need for Smart Farming
          </motion.h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive tools designed specifically for Indian farmers, with voice support and offline capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features?.map((feature, index) => (
            <motion.div
              key={feature?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl border border-green-200 shadow-brand-md hover:shadow-brand-lg transition-all duration-300 overflow-hidden ${
                expandedFeature === feature?.id ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Feature Header */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => handleFeatureExpand(feature?.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 ${feature?.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon name={feature?.icon} size={28} className="text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-heading font-semibold text-text-primary">
                        {feature?.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          {feature?.stats}
                        </span>
                        <Icon 
                          name={expandedFeature === feature?.id ? "ChevronUp" : "ChevronDown"} 
                          size={16} 
                          className="text-text-secondary" 
                        />
                      </div>
                    </div>
                    
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedFeature === feature?.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-green-100"
                >
                  <div className="p-6 bg-green-50/50">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Detailed Information */}
                      <div>
                        <h4 className="font-medium text-text-primary mb-3">Feature Details</h4>
                        <div className="text-sm text-text-secondary whitespace-pre-line leading-relaxed">
                          {feature?.details}
                        </div>
                      </div>

                      {/* Voice Explanation */}
                      <div>
                        <h4 className="font-medium text-text-primary mb-3">Voice Explanation</h4>
                        <div className="bg-white rounded-lg p-4 border border-green-200">
                          <p className="text-sm text-text-secondary mb-4">
                            {feature?.voiceExplanation}
                          </p>
                          
                          <Button
                            variant={isPlaying === feature?.id ? "default" : "outline"}
                            size="sm"
                            iconName={isPlaying === feature?.id ? "Square" : "Play"}
                            iconPosition="left"
                            onClick={() => handleVoicePlay(feature?.id)}
                            className={isPlaying === feature?.id ? "voice-pulse" : ""}
                          >
                            {isPlaying === feature?.id ? "Playing..." : "Listen in Hindi"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-brand-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Ready to Transform Your Farming?
            </h3>
            <p className="text-text-secondary mb-6">
              Join thousands of farmers already using AgriAssist to increase their yields and profits
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Smartphone"
                iconPosition="left"
                onClick={() => window.location.href = '/live-demo'}
              >
                Try Live Demo
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download App
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;