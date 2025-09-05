import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const APIDocumentation = () => {
  const [activeEndpoint, setActiveEndpoint] = useState('crop-recommendations');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const apiEndpoints = [
    {
      id: 'crop-recommendations',
      name: 'Crop Recommendations',
      method: 'POST',
      endpoint: '/api/v1/recommendations',
      description: 'Get personalized crop recommendations based on soil and weather data',
      parameters: [
        { name: 'soil_type', type: 'string', required: true, description: 'Type of soil (clay, loam, sandy, etc.)' },
        { name: 'location', type: 'object', required: true, description: 'Latitude and longitude coordinates' },
        { name: 'season', type: 'string', required: true, description: 'Current season (kharif, rabi, zaid)' },
        { name: 'farm_size', type: 'number', required: false, description: 'Farm size in acres' }
      ],
      response: {
        crops: [
          { name: 'Rice', confidence: 0.92, expected_yield: '4.5 tons/acre', market_price: '₹2,100/quintal' },
          { name: 'Wheat', confidence: 0.87, expected_yield: '3.2 tons/acre', market_price: '₹2,350/quintal' }
        ],
        weather_forecast: { temperature: '28°C', rainfall: '45mm', humidity: '68%' }
      }
    },
    {
      id: 'market-prices',
      name: 'Market Prices',
      method: 'GET',
      endpoint: '/api/v1/market-prices',
      description: 'Get current market prices for crops in specific regions',
      parameters: [
        { name: 'crop', type: 'string', required: true, description: 'Crop name' },
        { name: 'state', type: 'string', required: true, description: 'State name' },
        { name: 'district', type: 'string', required: false, description: 'District name for more specific prices' }
      ],
      response: {
        crop: 'Rice',
        prices: [
          { market: 'Delhi Mandi', price: '₹2,100/quintal', date: '2024-12-05' },
          { market: 'Mumbai APMC', price: '₹2,150/quintal', date: '2024-12-05' }
        ],
        trend: 'increasing',
        weekly_change: '+5.2%'
      }
    },
    {
      id: 'weather-data',
      name: 'Weather Data',
      method: 'GET',
      endpoint: '/api/v1/weather',
      description: 'Get detailed weather information and forecasts',
      parameters: [
        { name: 'latitude', type: 'number', required: true, description: 'Latitude coordinate' },
        { name: 'longitude', type: 'number', required: true, description: 'Longitude coordinate' },
        { name: 'days', type: 'number', required: false, description: 'Number of forecast days (1-7)' }
      ],
      response: {
        current: { temperature: '28°C', humidity: '68%', wind_speed: '12 km/h', conditions: 'Partly Cloudy' },
        forecast: [
          { date: '2024-12-06', high: '30°C', low: '22°C', rainfall: '2mm', conditions: 'Sunny' },
          { date: '2024-12-07', high: '29°C', low: '21°C', rainfall: '0mm', conditions: 'Clear' }
        ]
      }
    }
  ];

  const codeExamples = {
    javascript: {
      'crop-recommendations': `// Get crop recommendations
const response = await fetch('/api/v1/recommendations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    soil_type: 'loam',
    location: { lat: 28.6139, lng: 77.2090 },
    season: 'kharif',
    farm_size: 5
  })
});

const data = await response.json();
console.log(data.crops);`,
      'market-prices': `// Get market prices
const response = await fetch('/api/v1/market-prices?crop=rice&state=punjab', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const prices = await response.json();
console.log(prices.prices);`,
      'weather-data': `// Get weather data
const response = await fetch('/api/v1/weather?latitude=28.6139&longitude=77.2090&days=5', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const weather = await response.json();
console.log(weather.forecast);`
    },
    python: {
      'crop-recommendations': `import requests

# Get crop recommendations
url = '/api/v1/recommendations'
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
}
data = {
    'soil_type': 'loam',
    'location': {'lat': 28.6139, 'lng': 77.2090},
    'season': 'kharif',
    'farm_size': 5
}

response = requests.post(url, json=data, headers=headers)
recommendations = response.json()
print(recommendations['crops'])`,
      'market-prices': `import requests

# Get market prices
url = '/api/v1/market-prices'
params = {'crop': 'rice', 'state': 'punjab'}
headers = {'Authorization': 'Bearer YOUR_API_KEY'}

response = requests.get(url, params=params, headers=headers)
prices = response.json()
print(prices['prices'])`,
      'weather-data': `import requests

# Get weather data
url = '/api/v1/weather'
params = {
    'latitude': 28.6139,
    'longitude': 77.2090,
    'days': 5
}
headers = {'Authorization': 'Bearer YOUR_API_KEY'}

response = requests.get(url, params=params, headers=headers)
weather = response.json()
print(weather['forecast'])`
    }
  };

  const partnershipOpportunities = [
    {
      title: "NGO Integration",
      description: "Partner with us to bring AgriAssist to farming communities in your region",
      benefits: ["Free API access for registered NGOs", "Custom training materials", "Multi-language support"],
      icon: "Heart",
      contact: "partnerships@agriassist.in"
    },
    {
      title: "Government Collaboration",
      description: "Integrate AgriAssist with existing agricultural extension programs",
      benefits: ["Bulk licensing discounts", "Custom government dashboards", "Data analytics reports"],
      icon: "Building2",
      contact: "government@agriassist.in"
    },
    {
      title: "Research Institutions",
      description: "Access anonymized agricultural data for research and development",
      benefits: ["Research-grade datasets", "API access for studies", "Collaboration opportunities"],
      icon: "GraduationCap",
      contact: "research@agriassist.in"
    },
    {
      title: "Technology Partners",
      description: "Integrate AgriAssist capabilities into your agricultural technology stack",
      benefits: ["White-label solutions", "Custom API endpoints", "Technical support"],
      icon: "Code",
      contact: "tech@agriassist.in"
    }
  ];

  return (
    <div className="space-y-8">
      {/* API Overview */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Code" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Developer API
            </h2>
            <p className="text-text-secondary">
              Integrate AgriAssist's intelligence into your applications
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 bg-surface rounded-lg border border-border">
            <Icon name="Zap" size={24} className="text-primary mx-auto mb-2" />
            <h3 className="font-medium text-text-primary mb-1">Fast Response</h3>
            <p className="text-sm text-text-secondary">&lt; 200ms average</p>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg border border-border">
            <Icon name="Shield" size={24} className="text-green-600 mx-auto mb-2" />
            <h3 className="font-medium text-text-primary mb-1">99.9% Uptime</h3>
            <p className="text-sm text-text-secondary">Enterprise reliability</p>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg border border-border">
            <Icon name="Globe" size={24} className="text-blue-600 mx-auto mb-2" />
            <h3 className="font-medium text-text-primary mb-1">Global CDN</h3>
            <p className="text-sm text-text-secondary">Low latency worldwide</p>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="flex border-b border-border overflow-x-auto">
            {apiEndpoints?.map((endpoint) => (
              <button
                key={endpoint?.id}
                onClick={() => setActiveEndpoint(endpoint?.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeEndpoint === endpoint?.id
                    ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                <span className={`px-2 py-1 rounded text-xs font-mono ${
                  endpoint?.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {endpoint?.method}
                </span>
                <span>{endpoint?.name}</span>
              </button>
            ))}
          </div>

          <div className="p-6">
            {apiEndpoints?.map((endpoint) => (
              activeEndpoint === endpoint?.id && (
                <div key={endpoint?.id} className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded text-sm font-mono ${
                        endpoint?.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint?.method}
                      </span>
                      <code className="text-sm bg-surface px-3 py-1 rounded border border-border">
                        {endpoint?.endpoint}
                      </code>
                    </div>
                    <p className="text-text-secondary">{endpoint?.description}</p>
                  </div>

                  {/* Parameters */}
                  <div>
                    <h4 className="font-medium text-text-primary mb-3">Parameters</h4>
                    <div className="space-y-2">
                      {endpoint?.parameters?.map((param, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded border border-border">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <code className="text-sm font-mono text-primary">{param?.name}</code>
                              <span className="text-xs bg-border px-2 py-1 rounded">{param?.type}</span>
                              {param?.required && (
                                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">required</span>
                              )}
                            </div>
                            <p className="text-sm text-text-secondary">{param?.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code Example */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-text-primary">Code Example</h4>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedLanguage('javascript')}
                          className={`px-3 py-1 text-xs rounded ${
                            selectedLanguage === 'javascript' ?'bg-primary text-primary-foreground' :'bg-surface text-text-secondary hover:text-primary'
                          }`}
                        >
                          JavaScript
                        </button>
                        <button
                          onClick={() => setSelectedLanguage('python')}
                          className={`px-3 py-1 text-xs rounded ${
                            selectedLanguage === 'python' ?'bg-primary text-primary-foreground' :'bg-surface text-text-secondary hover:text-primary'
                          }`}
                        >
                          Python
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        <code>{codeExamples?.[selectedLanguage]?.[endpoint?.id]}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Response Example */}
                  <div>
                    <h4 className="font-medium text-text-primary mb-3">Response Example</h4>
                    <div className="bg-gray-900 text-blue-400 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        <code>{JSON.stringify(endpoint?.response, null, 2)}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      {/* Partnership Opportunities */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Handshake" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Partnership Opportunities
            </h2>
            <p className="text-text-secondary">
              Join us in democratizing agricultural technology across India
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnershipOpportunities?.map((opportunity, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={opportunity?.icon} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-text-primary mb-2">
                    {opportunity?.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    {opportunity?.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {opportunity?.benefits?.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-green-600" />
                        <span className="text-sm text-text-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-text-secondary">
                      <Icon name="Mail" size={14} className="inline mr-1" />
                      {opportunity?.contact}
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Getting Started */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
        <div className="text-center">
          <Icon name="Rocket" size={32} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Join thousands of developers and organizations using AgriAssist API to build better agricultural solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" iconName="Key" iconPosition="left">
              Get API Key
            </Button>
            <Button variant="outline" iconName="BookOpen" iconPosition="left">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;