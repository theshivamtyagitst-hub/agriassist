import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntegrationCapabilities = () => {
  const [activeIntegration, setActiveIntegration] = useState('government');

  const integrationCategories = [
    {
      id: 'government',
      name: 'Government Systems',
      description: 'Direct integration with agricultural departments and scheme databases',
      icon: 'Building2',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'weather',
      name: 'Weather Services',
      description: 'Real-time weather data from multiple meteorological sources',
      icon: 'Cloud',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'market',
      name: 'Market Data',
      description: 'Live commodity prices from mandis and agricultural markets',
      icon: 'TrendingUp',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'satellite',
      name: 'Satellite Data',
      description: 'Crop monitoring and soil analysis from space-based sensors',
      icon: 'Satellite',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const governmentIntegrations = [
    {
      name: 'PM-KISAN Portal',
      description: 'Direct access to farmer registration and benefit status',
      status: 'active',
      dataTypes: ['Farmer Registration', 'Benefit Status', 'Payment History'],
      updateFrequency: 'Real-time',
      coverage: 'Pan-India'
    },
    {
      name: 'State Agricultural Departments',
      description: 'Regional crop advisories and local scheme information',
      status: 'active',
      dataTypes: ['Crop Advisories', 'Local Schemes', 'Extension Services'],
      updateFrequency: 'Daily',
      coverage: '28 States'
    },
    {
      name: 'Soil Health Card Database',
      description: 'Soil testing results and nutrient recommendations',
      status: 'active',
      dataTypes: ['Soil Test Results', 'Nutrient Status', 'Fertilizer Recommendations'],
      updateFrequency: 'Weekly',
      coverage: '600+ Districts'
    },
    {
      name: 'APMC Market Data',
      description: 'Official market prices from Agricultural Produce Market Committees',
      status: 'active',
      dataTypes: ['Market Prices', 'Arrival Data', 'Quality Parameters'],
      updateFrequency: 'Hourly',
      coverage: '7,000+ Markets'
    }
  ];

  const weatherIntegrations = [
    {
      name: 'India Meteorological Department (IMD)',
      description: 'Official weather forecasts and climate data for India',
      status: 'active',
      dataTypes: ['Weather Forecasts', 'Rainfall Data', 'Temperature Trends'],
      updateFrequency: 'Hourly',
      coverage: 'Pan-India'
    },
    {
      name: 'ISRO Weather Satellites',
      description: 'High-resolution weather imagery and atmospheric data',
      status: 'active',
      dataTypes: ['Satellite Imagery', 'Cloud Patterns', 'Atmospheric Data'],
      updateFrequency: 'Real-time',
      coverage: 'South Asia'
    },
    {
      name: 'Local Weather Stations',
      description: 'Ground-based weather monitoring from agricultural stations',
      status: 'active',
      dataTypes: ['Local Weather', 'Microclimate Data', 'Soil Temperature'],
      updateFrequency: '15 minutes',
      coverage: '2,000+ Stations'
    }
  ];

  const marketIntegrations = [
    {
      name: 'National Commodity Exchange (NCDEX)',
      description: 'Futures prices and market trends for agricultural commodities',
      status: 'active',
      dataTypes: ['Futures Prices', 'Market Trends', 'Trading Volume'],
      updateFrequency: 'Real-time',
      coverage: 'Major Commodities'
    },
    {
      name: 'eNAM Platform',
      description: 'Electronic National Agriculture Market price data',
      status: 'active',
      dataTypes: ['Spot Prices', 'Quality Standards', 'Market Arrivals'],
      updateFrequency: 'Real-time',
      coverage: '1,000+ Markets'
    },
    {
      name: 'Regional Mandi Prices',
      description: 'Local market prices from state-level agricultural markets',
      status: 'active',
      dataTypes: ['Local Prices', 'Quality Grades', 'Demand Patterns'],
      updateFrequency: 'Daily',
      coverage: '5,000+ Mandis'
    }
  ];

  const satelliteIntegrations = [
    {
      name: 'ISRO Earth Observation Satellites',
      description: 'Crop monitoring and agricultural land use mapping',
      status: 'active',
      dataTypes: ['Crop Health', 'Land Use', 'Vegetation Index'],
      updateFrequency: 'Weekly',
      coverage: 'Pan-India'
    },
    {
      name: 'NASA MODIS Data',
      description: 'Global agricultural monitoring and climate data',
      status: 'active',
      dataTypes: ['Global Climate', 'Crop Patterns', 'Environmental Data'],
      updateFrequency: 'Daily',
      coverage: 'Global'
    },
    {
      name: 'European Space Agency (ESA)',
      description: 'High-resolution agricultural monitoring from Sentinel satellites',
      status: 'active',
      dataTypes: ['High-res Imagery', 'Crop Classification', 'Yield Estimation'],
      updateFrequency: '5 days',
      coverage: 'Global'
    }
  ];

  const getIntegrationData = (category) => {
    switch (category) {
      case 'government': return governmentIntegrations;
      case 'weather': return weatherIntegrations;
      case 'market': return marketIntegrations;
      case 'satellite': return satelliteIntegrations;
      default: return [];
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'testing': return 'bg-yellow-100 text-yellow-800';
      case 'planned': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const partnershipBenefits = [
    {
      title: 'For Government Agencies',
      benefits: [
        'Reach farmers directly with scheme information',
        'Real-time feedback on policy implementation',
        'Data-driven insights for better policy making',
        'Reduced administrative overhead'
      ],
      icon: 'Building2',
      color: 'text-blue-600'
    },
    {
      title: 'For Agricultural Organizations',
      benefits: [
        'Extend reach to smallholder farmers',
        'Digitize traditional extension services',
        'Access to aggregated agricultural data',
        'Improved farmer engagement'
      ],
      icon: 'Users',
      color: 'text-green-600'
    },
    {
      title: 'For Technology Partners',
      benefits: [
        'Access to comprehensive agricultural APIs',
        'White-label integration options',
        'Shared development resources',
        'Market expansion opportunities'
      ],
      icon: 'Code',
      color: 'text-purple-600'
    },
    {
      title: 'For Research Institutions',
      benefits: [
        'Access to anonymized agricultural datasets',
        'Collaboration on AI model development',
        'Field testing opportunities',
        'Publication and research support'
      ],
      icon: 'GraduationCap',
      color: 'text-orange-600'
    }
  ];

  const upcomingIntegrations = [
    {
      name: 'Crop Insurance Companies',
      description: 'Automated claim processing based on satellite and weather data',
      timeline: 'Q1 2025',
      status: 'development'
    },
    {
      name: 'Banking & Financial Services',
      description: 'Credit scoring based on agricultural data and yield predictions',
      timeline: 'Q2 2025',
      status: 'planning'
    },
    {
      name: 'Supply Chain Partners',
      description: 'Direct connection between farmers and buyers/processors',
      timeline: 'Q2 2025',
      status: 'planning'
    },
    {
      name: 'Agricultural Equipment Manufacturers',
      description: 'Equipment recommendations based on farm size and crop type',
      timeline: 'Q3 2025',
      status: 'research'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Integration Overview */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Link" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Integration Capabilities
            </h2>
            <p className="text-text-secondary">
              Connected to essential agricultural data sources and government systems
            </p>
          </div>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {integrationCategories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveIntegration(category?.id)}
              className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                activeIntegration === category?.id
                  ? 'border-primary bg-primary/5 shadow-brand-sm'
                  : 'border-border hover:border-primary/50 hover:shadow-brand-sm'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg ${category?.bgColor} flex items-center justify-center mb-3`}>
                <Icon name={category?.icon} size={24} className={category?.color} />
              </div>
              <h3 className="font-medium text-text-primary mb-2">{category?.name}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {category?.description}
              </p>
            </button>
          ))}
        </div>

        {/* Active Integration Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            {integrationCategories?.find(cat => cat?.id === activeIntegration)?.name} Integrations
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {getIntegrationData(activeIntegration)?.map((integration, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-sm transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-text-primary">{integration?.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration?.status)}`}>
                    {integration?.status}
                  </span>
                </div>
                
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {integration?.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h5 className="text-xs font-medium text-text-primary mb-2">Data Types:</h5>
                    <div className="flex flex-wrap gap-1">
                      {integration?.dataTypes?.map((type, typeIndex) => (
                        <span 
                          key={typeIndex}
                          className="px-2 py-1 bg-surface text-text-secondary text-xs rounded border border-border"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between text-xs">
                    <div>
                      <span className="text-text-secondary">Update Frequency: </span>
                      <span className="text-text-primary font-medium">{integration?.updateFrequency}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary">Coverage: </span>
                      <span className="text-text-primary font-medium">{integration?.coverage}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Partnership Benefits */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Handshake" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Partnership Benefits
            </h2>
            <p className="text-text-secondary">
              How different organizations benefit from integrating with AgriAssist
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnershipBenefits?.map((partnership, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={partnership?.icon} size={20} className={partnership?.color} />
                </div>
                <h3 className="font-heading font-semibold text-text-primary">
                  {partnership?.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {partnership?.benefits?.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Upcoming Integrations */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Calendar" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Upcoming Integrations
            </h2>
            <p className="text-text-secondary">
              New partnerships and integrations in development
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingIntegrations?.map((integration, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-text-primary">{integration?.name}</h3>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">{integration?.timeline}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration?.status)}`}>
                    {integration?.status}
                  </span>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {integration?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Lightbulb" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">Integration Roadmap</span>
          </div>
          <p className="text-sm text-text-secondary">
            Our integration roadmap is driven by farmer needs and partner requests. We prioritize integrations that provide the most value to agricultural communities.
          </p>
        </div>
      </div>
      {/* Integration Request */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
        <div className="text-center">
          <Icon name="Plus" size={32} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
            Request New Integration
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Have a data source or system that could benefit farmers? We're always looking for new partnerships to enhance our agricultural intelligence platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" iconName="Mail" iconPosition="left">
              Propose Integration
            </Button>
            <Button variant="outline" iconName="FileText" iconPosition="left">
              Integration Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCapabilities;