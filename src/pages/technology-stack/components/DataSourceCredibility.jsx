import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DataSourceCredibility = () => {
  const dataSources = [
    {
      id: 1,
      name: "ISRO",
      fullName: "Indian Space Research Organisation",
      logo: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=100&h=100&fit=crop&crop=center",
      description: "Satellite imagery, weather data, and crop monitoring from India's premier space agency",
      dataTypes: ["Weather Patterns", "Soil Moisture", "Crop Health", "Rainfall Data"],
      reliability: "99.8%",
      updateFrequency: "Real-time"
    },
    {
      id: 2,
      name: "FAO",
      fullName: "Food and Agriculture Organization",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      description: "Global agricultural standards, best practices, and crop management guidelines",
      dataTypes: ["Crop Guidelines", "Pest Management", "Nutrition Data", "Global Trends"],
      reliability: "99.5%",
      updateFrequency: "Weekly"
    },
    {
      id: 3,
      name: "State Agricultural Departments",
      fullName: "Government Agricultural Bodies",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop&crop=center",
      description: "Local market prices, government schemes, and region-specific agricultural data",
      dataTypes: ["Market Prices", "Scheme Updates", "Local Advisories", "Subsidy Info"],
      reliability: "98.9%",
      updateFrequency: "Daily"
    },
    {
      id: 4,
      name: "Weather Stations",
      fullName: "IMD & Private Weather Networks",
      logo: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=100&h=100&fit=crop&crop=center",
      description: "Hyperlocal weather forecasts and climate data from ground-based sensors",
      dataTypes: ["Temperature", "Humidity", "Wind Speed", "Precipitation"],
      reliability: "99.2%",
      updateFrequency: "Hourly"
    }
  ];

  const trustMetrics = [
    { label: "Data Sources", value: "15+", icon: "Database" },
    { label: "Accuracy Rate", value: "99.1%", icon: "Target" },
    { label: "Daily Updates", value: "24/7", icon: "Clock" },
    { label: "Farmers Served", value: "50K+", icon: "Users" }
  ];

  return (
    <div className="space-y-8">
      {/* Trust Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {trustMetrics?.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-4 text-center border border-border shadow-brand-sm">
            <Icon name={metric?.icon} size={24} className="text-primary mx-auto mb-2" />
            <div className="text-2xl font-heading font-bold text-text-primary mb-1">
              {metric?.value}
            </div>
            <div className="text-sm text-text-secondary">
              {metric?.label}
            </div>
          </div>
        ))}
      </div>
      {/* Data Sources Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {dataSources?.map((source) => (
          <div key={source?.id} className="bg-white rounded-xl p-6 border border-border shadow-brand-md hover:shadow-brand-lg transition-shadow duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0">
                <Image 
                  src={source?.logo} 
                  alt={`${source?.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-text-primary mb-1">
                  {source?.name}
                </h3>
                <p className="text-sm text-text-secondary mb-2">
                  {source?.fullName}
                </p>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <Icon name="Shield" size={12} className="text-green-600" />
                    <span className="text-green-600 font-medium">{source?.reliability}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="RefreshCw" size={12} className="text-blue-600" />
                    <span className="text-blue-600">{source?.updateFrequency}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              {source?.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-text-primary">Data Types:</h4>
              <div className="flex flex-wrap gap-2">
                {source?.dataTypes?.map((type, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md border border-border"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Partnership Verification */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
        <div className="flex items-center space-x-3 mb-4">
          <Icon name="Award" size={24} className="text-primary" />
          <h3 className="text-xl font-heading font-semibold text-text-primary">
            Verified Partnerships
          </h3>
        </div>
        <p className="text-text-secondary mb-4">
          All our data partnerships are officially verified and regularly audited to ensure the highest quality of information reaches your farm.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-border">
            <Icon name="CheckCircle" size={16} className="text-green-600" />
            <span className="text-sm text-text-primary">Government Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-border">
            <Icon name="Lock" size={16} className="text-blue-600" />
            <span className="text-sm text-text-primary">Data Privacy Compliant</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-border">
            <Icon name="Zap" size={16} className="text-orange-600" />
            <span className="text-sm text-text-primary">Real-time Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSourceCredibility;