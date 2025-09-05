import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const CropRecommendationDemo = () => {
  const [selectedSoil, setSelectedSoil] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const soilTypes = [
    { value: 'alluvial', label: 'Alluvial Soil' },
    { value: 'black', label: 'Black Cotton Soil' },
    { value: 'red', label: 'Red Laterite Soil' },
    { value: 'sandy', label: 'Sandy Soil' }
  ];

  const seasons = [
    { value: 'kharif', label: 'Kharif (Monsoon)' },
    { value: 'rabi', label: 'Rabi (Winter)' },
    { value: 'zaid', label: 'Zaid (Summer)' }
  ];

  const regions = [
    { value: 'punjab', label: 'Punjab' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' }
  ];

  const mockRecommendations = {
    'alluvial-kharif-punjab': [
      {
        crop: 'Basmati Rice',
        confidence: 95,
        expectedYield: '4.2 tons/hectare',
        profitability: 'High',
        waterRequirement: 'High',
        marketPrice: '₹2,800/quintal',
        icon: 'Wheat'
      },
      {
        crop: 'Sugarcane',
        confidence: 88,
        expectedYield: '65 tons/hectare',
        profitability: 'Very High',
        waterRequirement: 'Very High',
        marketPrice: '₹350/quintal',
        icon: 'TreePine'
      }
    ],
    'black-rabi-maharashtra': [
      {
        crop: 'Cotton',
        confidence: 92,
        expectedYield: '2.8 tons/hectare',
        profitability: 'High',
        waterRequirement: 'Medium',
        marketPrice: '₹5,200/quintal',
        icon: 'Flower'
      },
      {
        crop: 'Wheat',
        confidence: 85,
        expectedYield: '3.5 tons/hectare',
        profitability: 'Medium',
        waterRequirement: 'Medium',
        marketPrice: '₹2,100/quintal',
        icon: 'Wheat'
      }
    ]
  };

  const handleAnalyze = () => {
    if (!selectedSoil || !selectedSeason || !selectedRegion) return;
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const key = `${selectedSoil}-${selectedSeason}-${selectedRegion}`;
      const results = mockRecommendations?.[key] || mockRecommendations?.['alluvial-kharif-punjab'];
      setRecommendations(results);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getProfitabilityColor = (profitability) => {
    switch (profitability) {
      case 'Very High': return 'text-green-600 bg-green-50';
      case 'High': return 'text-green-500 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Brain" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Analysis</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Intelligent Crop Recommendations
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Experience our advanced recommendation engine that analyzes soil conditions, 
            weather patterns, and market trends to suggest the most profitable crops for your land.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Panel */}
          <div className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
              Enter Your Farm Details
            </h3>
            
            <div className="space-y-6">
              <Select
                label="Soil Type"
                placeholder="Select your soil type"
                options={soilTypes}
                value={selectedSoil}
                onChange={setSelectedSoil}
              />
              
              <Select
                label="Growing Season"
                placeholder="Select growing season"
                options={seasons}
                value={selectedSeason}
                onChange={setSelectedSeason}
              />
              
              <Select
                label="Region"
                placeholder="Select your region"
                options={regions}
                value={selectedRegion}
                onChange={setSelectedRegion}
              />
              
              <Button
                variant="default"
                size="lg"
                fullWidth
                loading={isAnalyzing}
                disabled={!selectedSoil || !selectedSeason || !selectedRegion}
                onClick={handleAnalyze}
                iconName="Zap"
                iconPosition="left"
              >
                {isAnalyzing ? 'Analyzing...' : 'Get Recommendations'}
              </Button>
            </div>

            {/* Soil Analysis Visualization */}
            <div className="mt-8 p-4 bg-surface rounded-lg border border-border">
              <h4 className="font-medium text-text-primary mb-3 flex items-center">
                <Icon name="BarChart3" size={16} className="mr-2" />
                Soil Analysis Preview
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-full h-2 bg-green-200 rounded-full mb-2">
                    <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-text-secondary">Nitrogen: 75%</span>
                </div>
                <div>
                  <div className="w-full h-2 bg-blue-200 rounded-full mb-2">
                    <div className="w-1/2 h-full bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-text-secondary">Phosphorus: 50%</span>
                </div>
                <div>
                  <div className="w-full h-2 bg-purple-200 rounded-full mb-2">
                    <div className="w-5/6 h-full bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-text-secondary">Potassium: 85%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
              Crop Recommendations
            </h3>
            
            {recommendations?.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="Seedling" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-text-secondary">
                  Select your farm details and click "Get Recommendations" to see personalized crop suggestions.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {recommendations?.map((rec, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 hover:border-primary/30 smooth-transition">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={rec?.icon} size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-primary">{rec?.crop}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-text-secondary">Confidence:</span>
                            <span className="text-sm font-medium text-primary">{rec?.confidence}%</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProfitabilityColor(rec?.profitability)}`}>
                        {rec?.profitability}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-text-secondary">Expected Yield:</span>
                        <div className="font-medium text-text-primary">{rec?.expectedYield}</div>
                      </div>
                      <div>
                        <span className="text-text-secondary">Market Price:</span>
                        <div className="font-medium text-text-primary">{rec?.marketPrice}</div>
                      </div>
                      <div>
                        <span className="text-text-secondary">Water Need:</span>
                        <div className="font-medium text-text-primary">{rec?.waterRequirement}</div>
                      </div>
                      <div>
                        <span className="text-text-secondary">Profit Potential:</span>
                        <div className="font-medium text-text-primary">{rec?.profitability}</div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Download"
                  iconPosition="left"
                  className="mt-4"
                >
                  Download Detailed Report
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropRecommendationDemo;