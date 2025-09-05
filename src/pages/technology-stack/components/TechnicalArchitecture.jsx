import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalArchitecture = () => {
  const [activeLayer, setActiveLayer] = useState('frontend');

  const architectureLayers = [
    {
      id: 'frontend',
      name: 'User Interface',
      analogy: 'Like the dashboard of a modern tractor - simple controls for complex operations',
      description: 'Progressive Web App that works seamlessly across all devices',
      technologies: [
        { name: 'React 18', purpose: 'Interactive user interface', icon: 'Smartphone' },
        { name: 'Progressive Web App', purpose: 'App-like experience on any device', icon: 'Download' },
        { name: 'Offline-First Design', purpose: 'Works without internet connection', icon: 'Wifi' },
        { name: 'Voice Interface', purpose: 'Hands-free operation for farmers', icon: 'Mic' }
      ],
      benefits: ['Works on any smartphone', 'No app store required', 'Automatic updates', 'Offline functionality']
    },
    {
      id: 'api',
      name: 'API Gateway',
      analogy: 'Like a village post office - receives requests and delivers the right information',
      description: 'Smart routing and processing of all farmer requests',
      technologies: [
        { name: 'REST API', purpose: 'Standard communication protocol', icon: 'Link' },
        { name: 'Rate Limiting', purpose: 'Ensures fair access for all users', icon: 'Shield' },
        { name: 'Authentication', purpose: 'Secure access to personalized data', icon: 'Lock' },
        { name: 'Caching', purpose: 'Faster responses for common queries', icon: 'Zap' }
      ],
      benefits: ['Fast response times', 'Secure data access', 'Scalable to millions', 'Reliable performance']
    },
    {
      id: 'ai',
      name: 'AI Processing',
      analogy: 'Like having thousands of experienced farmers advising you simultaneously',
      description: 'Machine learning models that understand agriculture and provide recommendations',
      technologies: [
        { name: 'TensorFlow', purpose: 'Deep learning for crop recommendations', icon: 'Brain' },
        { name: 'Natural Language Processing', purpose: 'Understands farmer questions', icon: 'MessageCircle' },
        { name: 'Computer Vision', purpose: 'Analyzes crop and soil images', icon: 'Eye' },
        { name: 'Predictive Analytics', purpose: 'Forecasts yields and market trends', icon: 'TrendingUp' }
      ],
      benefits: ['Personalized recommendations', 'Learns from experience', 'Multilingual support', 'Continuous improvement']
    },
    {
      id: 'data',
      name: 'Data Layer',
      analogy: 'Like a vast library of agricultural knowledge, organized and always accessible',
      description: 'Secure storage and management of all agricultural data',
      technologies: [
        { name: 'PostgreSQL', purpose: 'Reliable data storage', icon: 'Database' },
        { name: 'Redis Cache', purpose: 'Lightning-fast data retrieval', icon: 'Zap' },
        { name: 'Data Encryption', purpose: 'Protects farmer privacy', icon: 'Lock' },
        { name: 'Backup Systems', purpose: 'Never lose important data', icon: 'HardDrive' }
      ],
      benefits: ['Data never lost', 'Privacy protected', 'Fast access', 'Scalable storage']
    },
    {
      id: 'integration',
      name: 'External Integrations',
      analogy: 'Like having connections with weather stations, markets, and government offices',
      description: 'Real-time connections to essential agricultural data sources',
      technologies: [
        { name: 'Weather APIs', purpose: 'Real-time weather and forecasts', icon: 'Cloud' },
        { name: 'Satellite Data', purpose: 'Crop monitoring from space', icon: 'Satellite' },
        { name: 'Market Price APIs', purpose: 'Current commodity prices', icon: 'TrendingUp' },
        { name: 'Government Systems', purpose: 'Scheme and subsidy information', icon: 'Building2' }
      ],
      benefits: ['Always current data', 'Multiple data sources', 'Reliable connections', 'Comprehensive coverage']
    }
  ];

  const systemFlow = [
    {
      step: 1,
      title: 'Farmer Input',
      description: 'Farmer asks a question via voice, text, or image',
      icon: 'User',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      step: 2,
      title: 'Smart Processing',
      description: 'AI understands the question and context',
      icon: 'Brain',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      step: 3,
      title: 'Data Gathering',
      description: 'System collects relevant data from multiple sources',
      icon: 'Database',
      color: 'bg-green-100 text-green-600'
    },
    {
      step: 4,
      title: 'AI Analysis',
      description: 'Machine learning models analyze and generate recommendations',
      icon: 'Cpu',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      step: 5,
      title: 'Personalized Response',
      description: 'Tailored advice delivered in farmer\'s preferred language',
      icon: 'MessageSquare',
      color: 'bg-red-100 text-red-600'
    }
  ];

  const securityMeasures = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted both in transit and at rest using industry-standard protocols',
      icon: 'Lock',
      technical: 'AES-256 encryption, TLS 1.3'
    },
    {
      title: 'Access Control',
      description: 'Multi-layered authentication ensures only authorized access to farmer data',
      icon: 'Shield',
      technical: 'OAuth 2.0, JWT tokens, Role-based access'
    },
    {
      title: 'Privacy Protection',
      description: 'Farmer data is anonymized for research and never shared without consent',
      icon: 'Eye',
      technical: 'Data anonymization, GDPR compliance'
    },
    {
      title: 'Secure Infrastructure',
      description: 'Hosted on certified secure cloud infrastructure with regular security audits',
      icon: 'Server',
      technical: 'ISO 27001 certified, SOC 2 compliant'
    }
  ];

  const scalabilityFeatures = [
    {
      title: 'Auto-Scaling',
      description: 'System automatically adjusts to handle varying loads',
      metric: 'Handles 10x traffic spikes',
      icon: 'TrendingUp'
    },
    {
      title: 'Load Balancing',
      description: 'Distributes requests across multiple servers for optimal performance',
      metric: '99.9% uptime guarantee',
      icon: 'BarChart3'
    },
    {
      title: 'Caching Strategy',
      description: 'Smart caching reduces response times and server load',
      metric: '< 200ms response time',
      icon: 'Zap'
    },
    {
      title: 'Database Optimization',
      description: 'Efficient data storage and retrieval for millions of farmers',
      metric: 'Supports 1M+ concurrent users',
      icon: 'Database'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Architecture Overview */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Layers" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Technical Architecture
            </h2>
            <p className="text-text-secondary">
              Built like a modern farming system - simple on the surface, sophisticated underneath
            </p>
          </div>
        </div>

        {/* Architecture Layers */}
        <div className="flex flex-wrap gap-2 mb-6">
          {architectureLayers?.map((layer) => (
            <button
              key={layer?.id}
              onClick={() => setActiveLayer(layer?.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeLayer === layer?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {layer?.name}
            </button>
          ))}
        </div>

        {/* Active Layer Details */}
        {architectureLayers?.map((layer) => (
          activeLayer === layer?.id && (
            <div key={layer?.id} className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Layers" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                      {layer?.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-3">
                      {layer?.analogy}
                    </p>
                    <p className="text-text-secondary">
                      {layer?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {layer?.technologies?.map((tech, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-sm transition-shadow duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                        <Icon name={tech?.icon} size={16} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-text-primary mb-1">{tech?.name}</h4>
                        <p className="text-sm text-text-secondary">{tech?.purpose}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/20">
                <h4 className="font-medium text-text-primary mb-2">Benefits for Farmers:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {layer?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={14} className="text-green-600" />
                      <span className="text-sm text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        ))}
      </div>
      {/* System Flow */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="GitBranch" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              How It All Works Together
            </h2>
            <p className="text-text-secondary">
              From your question to personalized recommendation in seconds
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {systemFlow?.map((step, index) => (
            <div key={step?.step} className="flex items-start space-x-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${step?.color}`}>
                <Icon name={step?.icon} size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                    Step {step?.step}
                  </span>
                  <h3 className="font-medium text-text-primary">{step?.title}</h3>
                </div>
                <p className="text-text-secondary text-sm">{step?.description}</p>
              </div>
              {index < systemFlow?.length - 1 && (
                <div className="absolute left-6 mt-12 w-px h-6 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Security & Privacy */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Shield" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Security & Privacy Architecture
            </h2>
            <p className="text-text-secondary">
              Enterprise-grade security protecting your agricultural data
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityMeasures?.map((measure, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={measure?.icon} size={20} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-text-primary mb-2">{measure?.title}</h3>
                  <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                    {measure?.description}
                  </p>
                  <div className="text-xs text-text-secondary bg-surface px-2 py-1 rounded">
                    {measure?.technical}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Scalability & Performance */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="TrendingUp" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Built to Scale
            </h2>
            <p className="text-text-secondary">
              Designed to serve millions of farmers without compromising performance
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scalabilityFeatures?.map((feature, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={20} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-text-primary mb-2">{feature?.title}</h3>
                  <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                    {feature?.description}
                  </p>
                  <div className="text-sm font-medium text-primary">
                    {feature?.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Zap" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">Performance Promise</span>
          </div>
          <p className="text-sm text-text-secondary">
            Our architecture is designed to handle the agricultural needs of all of India's 600+ million farmers, with room to grow as we expand globally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalArchitecture;