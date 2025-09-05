import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AIModelExplanation = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const aiModels = [
    {
      id: 'crop-recommendation',
      name: "Crop Recommendation Engine",
      analogy: "Like an experienced farmer who has seen thousands of seasons",
      description: "Analyzes soil conditions, weather patterns, and market trends to suggest the best crops for your land",
      accuracy: "94.2%",
      dataPoints: "50M+",
      features: ["Soil Analysis", "Weather Integration", "Market Prediction", "Seasonal Planning"]
    },
    {
      id: 'pest-detection',
      name: "Pest & Disease Detection",
      analogy: "Like a village elder who can spot crop problems from experience",
      description: "Identifies potential threats to your crops using image recognition and symptom analysis",
      accuracy: "91.8%",
      dataPoints: "2M+",
      features: ["Image Recognition", "Symptom Analysis", "Treatment Suggestions", "Prevention Tips"]
    },
    {
      id: 'yield-prediction',
      name: "Yield Prediction Model",
      analogy: "Like calculating harvest based on traditional wisdom plus modern data",
      description: "Predicts expected harvest quantities to help with planning and market decisions",
      accuracy: "89.5%",
      dataPoints: "10M+",
      features: ["Harvest Forecasting", "Quality Assessment", "Market Timing", "Storage Planning"]
    }
  ];

  const tabs = [
    { id: 'overview', label: 'How AI Helps', icon: 'Brain' },
    { id: 'models', label: 'Our Models', icon: 'Cpu' },
    { id: 'training', label: 'Learning Process', icon: 'BookOpen' }
  ];

  const learningSteps = [
    {
      step: 1,
      title: "Data Collection",
      description: "We gather information from successful farms across India, learning from real farming experiences",
      icon: "Database"
    },
    {
      step: 2,
      title: "Pattern Recognition",
      description: "Our AI finds patterns in what works best for different soil types, weather conditions, and regions",
      icon: "Search"
    },
    {
      step: 3,
      title: "Continuous Learning",
      description: "Every season, we learn from new data and farmer feedback to improve our recommendations",
      icon: "RefreshCw"
    },
    {
      step: 4,
      title: "Personalized Advice",
      description: "We combine this knowledge with your specific farm conditions to give you tailored suggestions",
      icon: "Target"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-brand-md border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-border">
        <h2 className="text-2xl font-heading font-semibold text-text-primary mb-2">
          AI That Speaks Your Language
        </h2>
        <p className="text-text-secondary">
          Understanding how our artificial intelligence works to help your farm succeed
        </p>
      </div>
      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab?.id
                ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-primary hover:bg-surface'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                Traditional Wisdom + Modern Data = Better Decisions
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Our AI doesn't replace your farming knowledge—it enhances it. Think of it as having access to the combined experience of thousands of successful farmers, available 24/7 on your phone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-surface rounded-lg border border-border">
                <Icon name="Users" size={24} className="text-primary mx-auto mb-3" />
                <h4 className="font-medium text-text-primary mb-2">Community Knowledge</h4>
                <p className="text-sm text-text-secondary">
                  Learning from 50,000+ farmers across India
                </p>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg border border-border">
                <Icon name="Zap" size={24} className="text-accent mx-auto mb-3" />
                <h4 className="font-medium text-text-primary mb-2">Instant Insights</h4>
                <p className="text-sm text-text-secondary">
                  Get recommendations in seconds, not days
                </p>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg border border-border">
                <Icon name="TrendingUp" size={24} className="text-green-600 mx-auto mb-3" />
                <h4 className="font-medium text-text-primary mb-2">Proven Results</h4>
                <p className="text-sm text-text-secondary">
                  Average 23% increase in crop yields
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'models' && (
          <div className="space-y-6">
            {aiModels?.map((model) => (
              <div key={model?.id} className="border border-border rounded-lg p-6 hover:shadow-brand-sm transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                      {model?.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-2">
                      {model?.analogy}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {model?.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-primary">{model?.accuracy}</div>
                    <div className="text-xs text-text-secondary">Accuracy</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {model?.features?.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Database" size={14} className="text-text-secondary" />
                      <span className="text-text-secondary">{model?.dataPoints} data points</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <Icon name="CheckCircle" size={14} />
                    <span className="text-xs">Active & Learning</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'training' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                How Our AI Learns to Help You
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Just like how farmers pass down knowledge through generations, our AI learns from the collective wisdom of successful farming practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningSteps?.map((step, index) => (
                <div key={step?.step} className="flex items-start space-x-4 p-4 bg-surface rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={step?.icon} size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                        Step {step?.step}
                      </span>
                      <h4 className="font-medium text-text-primary">{step?.title}</h4>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-6 border border-accent/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="Lightbulb" size={20} className="text-accent" />
                <h4 className="font-medium text-text-primary">The Result</h4>
              </div>
              <p className="text-text-secondary text-sm">
                Our AI becomes smarter every day, learning from real farming experiences to give you better recommendations. It's like having a farming advisor who never stops learning and is always available to help.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIModelExplanation;