import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
  const [currentMetrics, setCurrentMetrics] = useState({
    uptime: 99.94,
    responseTime: 187,
    activeUsers: 52847,
    apiCalls: 1247893
  });

  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetrics(prev => ({
        uptime: Math.min(99.99, prev?.uptime + (Math.random() * 0.01)),
        responseTime: Math.max(150, prev?.responseTime + (Math.random() - 0.5) * 10),
        activeUsers: prev?.activeUsers + Math.floor(Math.random() * 20 - 10),
        apiCalls: prev?.apiCalls + Math.floor(Math.random() * 50)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const performanceStats = [
    {
      title: "System Uptime",
      value: `${currentMetrics?.uptime?.toFixed(2)}%`,
      description: "Last 30 days availability",
      icon: "Activity",
      color: "text-green-600",
      bgColor: "bg-green-50",
      trend: "+0.02%"
    },
    {
      title: "Response Time",
      value: `${Math.round(currentMetrics?.responseTime)}ms`,
      description: "Average API response time",
      icon: "Zap",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: "-12ms"
    },
    {
      title: "Active Users",
      value: currentMetrics?.activeUsers?.toLocaleString(),
      description: "Farmers using the platform",
      icon: "Users",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: "+2.3K"
    },
    {
      title: "API Calls",
      value: `${(currentMetrics?.apiCalls / 1000000)?.toFixed(1)}M`,
      description: "Total API calls this month",
      icon: "BarChart3",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      trend: "+15.2%"
    }
  ];

  const systemHealth = [
    {
      component: "Crop Recommendation Engine",
      status: "operational",
      responseTime: "156ms",
      uptime: "99.98%",
      lastIncident: "None in 45 days"
    },
    {
      component: "Weather Data Service",
      status: "operational",
      responseTime: "89ms",
      uptime: "99.95%",
      lastIncident: "None in 30 days"
    },
    {
      component: "Market Price API",
      status: "operational",
      responseTime: "203ms",
      uptime: "99.92%",
      lastIncident: "Minor delay 2 days ago"
    },
    {
      component: "Government Schemes DB",
      status: "operational",
      responseTime: "134ms",
      uptime: "99.89%",
      lastIncident: "Maintenance 5 days ago"
    },
    {
      component: "Voice Processing",
      status: "operational",
      responseTime: "267ms",
      uptime: "99.87%",
      lastIncident: "None in 15 days"
    },
    {
      component: "Offline Sync Service",
      status: "operational",
      responseTime: "98ms",
      uptime: "99.96%",
      lastIncident: "None in 60 days"
    }
  ];

  const offlineCapabilities = [
    {
      feature: "Crop Recommendations",
      offlineDuration: "7 days",
      storageSize: "2.3 MB",
      description: "Cached recommendations based on your recent inputs"
    },
    {
      feature: "Weather Forecasts",
      offlineDuration: "3 days",
      storageSize: "0.8 MB",
      description: "Last downloaded weather data and short-term forecasts"
    },
    {
      feature: "Market Prices",
      offlineDuration: "24 hours",
      storageSize: "1.1 MB",
      description: "Recent market price data for your selected crops"
    },
    {
      feature: "Educational Content",
      offlineDuration: "30 days",
      storageSize: "15.2 MB",
      description: "Farming guides, tips, and best practices"
    },
    {
      feature: "Voice Commands",
      offlineDuration: "Unlimited",
      storageSize: "5.7 MB",
      description: "Basic voice recognition works without internet"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': return 'text-green-600 bg-green-100';
      case 'degraded': return 'text-yellow-600 bg-yellow-100';
      case 'down': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      {/* Live Performance Metrics */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Icon name="Activity" size={24} className="text-primary" />
            <div>
              <h2 className="text-2xl font-heading font-semibold text-text-primary">
                Live Performance Metrics
              </h2>
              <p className="text-text-secondary">
                Real-time system performance and reliability statistics
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`}></div>
            <span className="text-sm text-text-secondary">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceStats?.map((stat, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg ${stat?.bgColor} flex items-center justify-center`}>
                  <Icon name={stat?.icon} size={20} className={stat?.color} />
                </div>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  {stat?.trend}
                </span>
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">
                {stat?.value}
              </div>
              <div className="text-sm font-medium text-text-primary mb-1">
                {stat?.title}
              </div>
              <div className="text-xs text-text-secondary">
                {stat?.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* System Health Status */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Shield" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              System Health Status
            </h2>
            <p className="text-text-secondary">
              Individual component status and performance metrics
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {systemHealth?.map((component, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-surface transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(component?.status)}`}>
                  {component?.status}
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">{component?.component}</h3>
                  <p className="text-sm text-text-secondary">{component?.lastIncident}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <div className="text-text-primary font-medium">{component?.responseTime}</div>
                  <div className="text-text-secondary text-xs">Response</div>
                </div>
                <div className="text-center">
                  <div className="text-text-primary font-medium">{component?.uptime}</div>
                  <div className="text-text-secondary text-xs">Uptime</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CheckCircle" size={16} className="text-green-600" />
            <span className="text-sm font-medium text-green-800">All Systems Operational</span>
          </div>
          <p className="text-sm text-green-700">
            All AgriAssist services are running smoothly. Last system-wide incident was 45 days ago.
          </p>
        </div>
      </div>
      {/* Offline Capabilities */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Wifi" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Offline Capabilities
            </h2>
            <p className="text-text-secondary">
              AgriAssist works even when your internet connection is poor or unavailable
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offlineCapabilities?.map((capability, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-text-primary">{capability?.feature}</h3>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">{capability?.offlineDuration}</div>
                  <div className="text-xs text-text-secondary">{capability?.storageSize}</div>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {capability?.description}
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <Icon name="Download" size={14} className="text-green-600" />
                <span className="text-xs text-green-600">Auto-synced when online</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Info" size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Smart Offline Mode</span>
          </div>
          <p className="text-sm text-blue-700">
            AgriAssist automatically detects poor connectivity and switches to offline mode, ensuring you always have access to essential farming information.
          </p>
        </div>
      </div>
      {/* Performance Guarantee */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
        <div className="text-center">
          <Icon name="Award" size={32} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
            Our Performance Promise
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            We guarantee 99.9% uptime and sub-200ms response times. If we don't meet these standards, we'll provide service credits and work around the clock to resolve any issues.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-text-secondary">Uptime Guarantee</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary mb-1">&lt;200ms</div>
              <div className="text-sm text-text-secondary">Response Time</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-text-secondary">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;