import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnicalTransparency = () => {
  const [activeDataSource, setActiveDataSource] = useState('isro');

  const dataSources = [
    {
      id: 'isro',
      name: 'ISRO Satellite Data',
      logo: '🛰️',
      description: 'Indian Space Research Organisation provides high-resolution satellite imagery and weather data',
      dataTypes: ['Soil moisture', 'Crop health indices', 'Weather patterns', 'Land use mapping'],
      accuracy: '95%',
      updateFrequency: 'Daily',
      coverage: 'Pan-India',
      credibility: 'Government of India',
      website: 'isro.gov.in'
    },
    {
      id: 'fao',
      name: 'FAO Global Data',
      logo: '🌍',
      description: 'Food and Agriculture Organization provides global agricultural statistics and best practices',
      dataTypes: ['Crop yield data', 'Agricultural practices', 'Market trends', 'Climate data'],
      accuracy: '92%',
      updateFrequency: 'Weekly',
      coverage: 'Global',
      credibility: 'United Nations',
      website: 'fao.org'
    },
    {
      id: 'imd',
      name: 'IMD Weather Data',
      logo: '🌤️',
      description: 'India Meteorological Department provides accurate weather forecasts and climate data',
      dataTypes: ['Temperature', 'Rainfall', 'Humidity', 'Wind patterns'],
      accuracy: '88%',
      updateFrequency: 'Hourly',
      coverage: 'India',
      credibility: 'Ministry of Earth Sciences',
      website: 'imd.gov.in'
    },
    {
      id: 'agmarknet',
      name: 'AgMarkNet Prices',
      logo: '💰',
      description: 'Agricultural Marketing Division provides real-time mandi prices across India',
      dataTypes: ['Commodity prices', 'Market arrivals', 'Price trends', 'Trade volumes'],
      accuracy: '99%',
      updateFrequency: 'Real-time',
      coverage: '3,000+ Markets',
      credibility: 'Ministry of Agriculture',
      website: 'agmarknet.gov.in'
    }
  ];

  const aiModels = [
    {
      name: 'Crop Recommendation Engine',
      type: 'Machine Learning',
      algorithm: 'Random Forest + Neural Networks',
      accuracy: '94.5%',
      trainingData: '2.5M+ farm records',
      features: ['Soil parameters', 'Weather data', 'Historical yields', 'Market prices'],
      lastUpdated: '2025-01-01'
    },
    {
      name: 'Weather Prediction Model',
      type: 'Deep Learning',
      algorithm: 'LSTM + Transformer',
      accuracy: '87.2%',
      trainingData: '10 years weather history',
      features: ['Temperature patterns', 'Rainfall prediction', 'Seasonal trends', 'Climate indices'],
      lastUpdated: '2024-12-28'
    },
    {
      name: 'Price Forecasting System',
      type: 'Time Series Analysis',
      algorithm: 'ARIMA + Prophet',
      accuracy: '82.8%',
      trainingData: '5 years market data',
      features: ['Historical prices', 'Supply-demand', 'Seasonal factors', 'Economic indicators'],
      lastUpdated: '2024-12-30'
    }
  ];

  const integrationPartners = [
    {
      name: 'Government of India',
      type: 'Data Provider',
      services: ['Satellite data', 'Weather information', 'Market prices', 'Scheme details'],
      status: 'Active',
      since: '2023'
    },
    {
      name: 'State Agriculture Departments',
      type: 'Implementation Partner',
      services: ['Local expertise', 'Farmer outreach', 'Training programs', 'Feedback collection'],
      status: 'Active',
      since: '2023'
    },
    {
      name: 'Research Institutions',
      type: 'Technical Partner',
      services: ['Model validation', 'Research collaboration', 'Data analysis', 'Innovation'],
      status: 'Active',
      since: '2024'
    },
    {
      name: 'NGO Partners',
      type: 'Community Partner',
      services: ['Farmer training', 'Digital literacy', 'Local support', 'Impact measurement'],
      status: 'Active',
      since: '2024'
    }
  ];

  const getAccuracyColor = (accuracy) => {
    const numAccuracy = parseInt(accuracy);
    if (numAccuracy >= 90) return 'text-green-600 bg-green-50';
    if (numAccuracy >= 80) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Shield" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary">Trust & Transparency</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Technical Transparency & Data Sources
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Understand the technology behind AgriAssist. We believe in complete transparency 
            about our data sources, AI models, and integration partnerships to build farmer trust.
          </p>
        </div>

        {/* Data Sources Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-text-primary mb-8 text-center">
            Trusted Data Sources
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dataSources?.map((source) => (
              <button
                key={source?.id}
                onClick={() => setActiveDataSource(source?.id)}
                className={`p-4 rounded-xl border text-center smooth-transition ${
                  activeDataSource === source?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30 bg-card'
                }`}
              >
                <div className="text-3xl mb-2">{source?.logo}</div>
                <div className="font-medium text-text-primary text-sm">{source?.name}</div>
                <div className={`text-xs px-2 py-1 rounded-full mt-2 ${getAccuracyColor(source?.accuracy)}`}>
                  {source?.accuracy} accuracy
                </div>
              </button>
            ))}
          </div>

          {/* Active Data Source Details */}
          {dataSources?.map((source) => (
            activeDataSource === source?.id && (
              <div key={source?.id} className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-4xl">{source?.logo}</div>
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-text-primary">
                          {source?.name}
                        </h4>
                        <p className="text-sm text-text-secondary">{source?.credibility}</p>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {source?.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <span className="text-sm font-medium text-text-primary">Update Frequency:</span>
                        <p className="text-text-secondary">{source?.updateFrequency}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-text-primary">Coverage:</span>
                        <p className="text-text-secondary">{source?.coverage}</p>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      Visit {source?.website}
                    </Button>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-text-primary mb-4">Data Types Provided:</h5>
                    <div className="space-y-2">
                      {source?.dataTypes?.map((type, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-green-500" />
                          <span className="text-text-secondary">{type}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-text-primary">Data Accuracy</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAccuracyColor(source?.accuracy)}`}>
                          {source?.accuracy}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: source?.accuracy }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* AI Models Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-text-primary mb-8 text-center">
            AI Models & Algorithms
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {aiModels?.map((model, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Brain" size={20} className="text-primary" />
                  <h4 className="font-heading font-semibold text-text-primary">{model?.name}</h4>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-medium text-text-primary">Type:</span>
                    <p className="text-text-secondary">{model?.type}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-text-primary">Algorithm:</span>
                    <p className="text-text-secondary">{model?.algorithm}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-text-primary">Training Data:</span>
                    <p className="text-text-secondary">{model?.trainingData}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-text-primary">Last Updated:</span>
                    <p className="text-text-secondary">{model?.lastUpdated}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">Accuracy</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAccuracyColor(model?.accuracy)}`}>
                      {model?.accuracy}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: model?.accuracy }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-text-primary mb-2 block">Key Features:</span>
                  <div className="space-y-1">
                    {model?.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Dot" size={12} className="text-primary" />
                        <span className="text-xs text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Partners */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-text-primary mb-8 text-center">
            Integration Partners
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {integrationPartners?.map((partner, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-heading font-semibold text-text-primary">{partner?.name}</h4>
                    <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {partner?.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      partner?.status === 'Active' ? 'text-green-700 bg-green-100' : 'text-gray-700 bg-gray-100'
                    }`}>
                      {partner?.status}
                    </div>
                    <p className="text-xs text-text-secondary mt-1">Since {partner?.since}</p>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-text-primary mb-2 block">Services:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {partner?.services?.map((service, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-green-500" />
                        <span className="text-xs text-text-secondary">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-text-secondary">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">256-bit</div>
            <div className="text-sm text-text-secondary">Encryption</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">ISO 27001</div>
            <div className="text-sm text-text-secondary">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">GDPR</div>
            <div className="text-sm text-text-secondary">Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalTransparency;