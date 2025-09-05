import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const APIDocumentation = () => {
  const [activeTab, setActiveTab] = useState('crop-recommendations');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const apiEndpoints = [
    {
      id: 'crop-recommendations',
      title: 'Crop Recommendations',
      description: 'Get AI-powered crop suggestions based on soil, weather, and location data',
      method: 'POST',
      endpoint: '/api/v1/recommendations',
      icon: 'Sprout'
    },
    {
      id: 'weather-data',
      title: 'Weather Data',
      description: 'Access real-time and forecast weather information for agricultural planning',
      method: 'GET',
      endpoint: '/api/v1/weather',
      icon: 'Cloud'
    },
    {
      id: 'market-prices',
      title: 'Market Prices',
      description: 'Retrieve current market prices for crops across different mandis',
      method: 'GET',
      endpoint: '/api/v1/market-prices',
      icon: 'TrendingUp'
    },
    {
      id: 'soil-analysis',
      title: 'Soil Analysis',
      description: 'Analyze soil conditions and get recommendations for improvement',
      method: 'POST',
      endpoint: '/api/v1/soil-analysis',
      icon: 'Mountain'
    }
  ];

  const codeExamples = {
    javascript: {
      'crop-recommendations': `// Get crop recommendations
const response = await fetch('https://api.agriassist.com/v1/recommendations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    location: { lat: 28.6139, lng: 77.2090 },
    soilType: 'loamy',
    season: 'kharif',
    farmSize: 2.5
  })
});

const data = await response.json();
console.log(data.recommendations);`,
      'weather-data': `// Get weather data
const response = await fetch('https://api.agriassist.com/v1/weather?lat=28.6139&lng=77.2090', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const weatherData = await response.json();
console.log(weatherData.current, weatherData.forecast);`,
      'market-prices': `// Get market prices
const response = await fetch('https://api.agriassist.com/v1/market-prices?crop=wheat&state=punjab', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const prices = await response.json();
console.log(prices.data);`,
      'soil-analysis': `// Analyze soil
const response = await fetch('https://api.agriassist.com/v1/soil-analysis', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    ph: 6.5,
    nitrogen: 45,
    phosphorus: 23,
    potassium: 67,
    organicMatter: 2.1
  })
});

const analysis = await response.json();`
    },
    python: {
      'crop-recommendations': `import requests

# Get crop recommendations
response = requests.post('https://api.agriassist.com/v1/recommendations', 
  headers={
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  json={
    'location': {'lat': 28.6139, 'lng': 77.2090},
    'soilType': 'loamy',
    'season': 'kharif',
    'farmSize': 2.5
  }
)

data = response.json()
print(data['recommendations'])`,
      'weather-data': `import requests

# Get weather data
response = requests.get('https://api.agriassist.com/v1/weather',
  params={'lat': 28.6139, 'lng': 77.2090},
  headers={'Authorization': 'Bearer YOUR_API_KEY'}
)

weather_data = response.json()
print(weather_data['current'], weather_data['forecast'])`,
      'market-prices': `import requests

# Get market prices
response = requests.get('https://api.agriassist.com/v1/market-prices',
  params={'crop': 'wheat', 'state': 'punjab'},
  headers={'Authorization': 'Bearer YOUR_API_KEY'}
)

prices = response.json()
print(prices['data'])`,
      'soil-analysis': `import requests

# Analyze soil
response = requests.post('https://api.agriassist.com/v1/soil-analysis',
  headers={
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  json={
    'ph': 6.5,
    'nitrogen': 45,
    'phosphorus': 23,
    'potassium': 67,
    'organicMatter': 2.1
  }
)

analysis = response.json()`
    }
  };

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: 'Code' },
    { id: 'python', name: 'Python', icon: 'Code2' }
  ];

  return (
    <section className="py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-responsive-2xl font-heading font-bold text-text-primary mb-4">
            API Documentation
          </h2>
          <p className="text-responsive-base text-text-secondary max-w-2xl mx-auto">
            Comprehensive documentation with interactive examples and code snippets 
            in multiple programming languages.
          </p>
        </div>
        
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {/* API Endpoints Tabs */}
          <div className="border-b border-border">
            <div className="flex overflow-x-auto">
              {apiEndpoints?.map((endpoint) => (
                <button
                  key={endpoint?.id}
                  onClick={() => setActiveTab(endpoint?.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                    activeTab === endpoint?.id
                      ? 'border-primary text-primary bg-primary/5' :'border-transparent text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={endpoint?.icon} size={16} />
                  <span>{endpoint?.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6">
            {apiEndpoints?.map((endpoint) => (
              <div
                key={endpoint?.id}
                className={activeTab === endpoint?.id ? 'block' : 'hidden'}
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      endpoint?.method === 'GET' ?'bg-green-100 text-green-800' :'bg-blue-100 text-blue-800'
                    }`}>
                      {endpoint?.method}
                    </span>
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                      {endpoint?.endpoint}
                    </code>
                  </div>
                  <p className="text-text-secondary">{endpoint?.description}</p>
                </div>
                
                {/* Language Selector */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm font-medium text-text-primary">Language:</span>
                  {languages?.map((lang) => (
                    <button
                      key={lang?.id}
                      onClick={() => setSelectedLanguage(lang?.id)}
                      className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
                        selectedLanguage === lang?.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-text-secondary hover:bg-muted/80'
                      }`}
                    >
                      <Icon name={lang?.icon} size={14} />
                      <span>{lang?.name}</span>
                    </button>
                  ))}
                </div>
                
                {/* Code Example */}
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    <code>{codeExamples?.[selectedLanguage]?.[endpoint?.id]}</code>
                  </pre>
                </div>
                
                <div className="mt-4 flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    iconName="Copy"
                    iconPosition="left"
                  >
                    Copy Code
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    Try in Sandbox
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIDocumentation;