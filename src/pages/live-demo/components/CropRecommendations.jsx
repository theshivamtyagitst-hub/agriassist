import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CropRecommendations = ({ recommendations, inputData, onSaveResults, onVoicePlayback }) => {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'comparison'
  const [comparisonCrops, setComparisonCrops] = useState([]);

  const mockRecommendations = [
    {
      id: 'wheat',
      name: 'Wheat',
      hindiName: 'गेहूं',
      confidence: 92,
      expectedYield: '45-50 quintals/hectare',
      marketPrice: '₹2,150/quintal',
      pricetrend: 'stable',
      waterRequirement: 'Medium (450-650mm)',
      growthPeriod: '120-150 days',
      profitability: 'High',
      image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=400',
      advantages: [
        'High market demand',
        'Government procurement guarantee',
        'Suitable for your soil type',
        'Good storage life'
      ],
      challenges: [
        'Requires timely irrigation',
        'Pest management needed'
      ],
      investmentRequired: '₹25,000-30,000/hectare',
      expectedProfit: '₹35,000-45,000/hectare',
      schemes: [
        'PM-KISAN Scheme',
        'Wheat Procurement Scheme',
        'Crop Insurance Scheme'
      ]
    },
    {
      id: 'mustard',
      name: 'Mustard',
      hindiName: 'सरसों',
      confidence: 88,
      expectedYield: '15-20 quintals/hectare',
      marketPrice: '₹5,200/quintal',
      pricetrend: 'rising',
      waterRequirement: 'Low (300-400mm)',
      growthPeriod: '90-120 days',
      profitability: 'Very High',
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=400',
      advantages: [
        'High profit margins',
        'Low water requirement',
        'Oil extraction value',
        'Quick harvest cycle'
      ],
      challenges: [
        'Market price volatility',
        'Storage requirements'
      ],
      investmentRequired: '₹15,000-20,000/hectare',
      expectedProfit: '₹45,000-60,000/hectare',
      schemes: [
        'Oilseed Production Scheme',
        'National Food Security Mission'
      ]
    },
    {
      id: 'gram',
      name: 'Gram (Chickpea)',
      hindiName: 'चना',
      confidence: 85,
      expectedYield: '20-25 quintals/hectare',
      marketPrice: '₹4,800/quintal',
      pricetrend: 'stable',
      waterRequirement: 'Low (250-350mm)',
      growthPeriod: '90-120 days',
      profitability: 'High',
      image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=400',
      advantages: [
        'Nitrogen fixation benefit',
        'Low input cost',
        'High protein content',
        'Good market demand'
      ],
      challenges: [
        'Susceptible to pod borer',
        'Weather dependent'
      ],
      investmentRequired: '₹18,000-22,000/hectare',
      expectedProfit: '₹40,000-50,000/hectare',
      schemes: [
        'Pulses Production Scheme',
        'National Food Security Mission'
      ]
    }
  ];

  const displayRecommendations = recommendations || mockRecommendations;

  const handleCropSelection = (crop) => {
    setSelectedCrop(selectedCrop?.id === crop?.id ? null : crop);
  };

  const handleComparisonToggle = (crop) => {
    if (comparisonCrops?.find(c => c?.id === crop?.id)) {
      setComparisonCrops(comparisonCrops?.filter(c => c?.id !== crop?.id));
    } else if (comparisonCrops?.length < 3) {
      setComparisonCrops([...comparisonCrops, crop]);
    }
  };

  const getPriceIcon = (trend) => {
    switch (trend) {
      case 'rising': return { icon: 'TrendingUp', color: 'text-success' };
      case 'falling': return { icon: 'TrendingDown', color: 'text-error' };
      default: return { icon: 'Minus', color: 'text-text-secondary' };
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-success';
    if (confidence >= 80) return 'text-accent';
    return 'text-text-secondary';
  };

  const handleVoicePlayback = (crop) => {
    const text = `${crop?.name} is recommended with ${crop?.confidence}% confidence. Expected yield is ${crop?.expectedYield} with current market price of ${crop?.marketPrice}. This crop requires ${crop?.waterRequirement} water and takes ${crop?.growthPeriod} to grow.`;
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-IN';
      speechSynthesis.speak(utterance);
    }
    
    if (onVoicePlayback) {
      onVoicePlayback(crop, text);
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-brand-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="CheckCircle" size={20} className="text-success" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-primary">
              Crop Recommendations
            </h3>
            <p className="text-sm text-text-secondary">
              AI-powered suggestions based on your farm conditions
            </p>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            iconName="Grid3X3"
          />
          <Button
            variant={viewMode === 'comparison' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('comparison')}
            iconName="BarChart3"
          />
        </div>
      </div>
      {/* Input Summary */}
      {inputData && (
        <div className="mb-6 p-4 bg-surface rounded-lg border border-border">
          <h4 className="text-sm font-medium text-text-primary mb-2">Based on your inputs:</h4>
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
            {inputData?.location && (
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={14} />
                <span>{inputData?.location?.district}, {inputData?.location?.state}</span>
              </div>
            )}
            {inputData?.soil && (
              <div className="flex items-center space-x-1">
                <Icon name="Layers" size={14} />
                <span>{inputData?.soil?.name}</span>
              </div>
            )}
            {inputData?.season && (
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>{inputData?.season?.name}</span>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="space-y-4">
          {displayRecommendations?.map((crop, index) => (
            <div
              key={crop?.id}
              className={`border rounded-lg transition-all duration-200 hover:shadow-brand-md cursor-pointer ${
                selectedCrop?.id === crop?.id
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
              }`}
              onClick={() => handleCropSelection(crop)}
            >
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  {/* Crop Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={crop?.image}
                      alt={crop?.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1 right-1 bg-white/90 rounded-full w-6 h-6 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">#{index + 1}</span>
                    </div>
                  </div>

                  {/* Crop Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-medium text-text-primary">{crop?.name}</h4>
                        <p className="text-sm text-text-secondary">{crop?.hindiName}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`text-sm font-medium ${getConfidenceColor(crop?.confidence)}`}>
                          {crop?.confidence}% match
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e?.stopPropagation();
                            handleVoicePlayback(crop);
                          }}
                          iconName="Volume2"
                          className="voice-pulse"
                        />
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-text-secondary">Expected Yield</p>
                        <p className="text-sm font-medium text-text-primary">{crop?.expectedYield}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <p className="text-xs text-text-secondary">Market Price</p>
                          <Icon 
                            name={getPriceIcon(crop?.pricetrend)?.icon} 
                            size={12} 
                            className={getPriceIcon(crop?.pricetrend)?.color} 
                          />
                        </div>
                        <p className="text-sm font-medium text-text-primary">{crop?.marketPrice}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary">Water Need</p>
                        <p className="text-sm font-medium text-text-primary">{crop?.waterRequirement?.split(' ')?.[0]}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary">Growth Period</p>
                        <p className="text-sm font-medium text-text-primary">{crop?.growthPeriod?.split(' ')?.[0]} days</p>
                      </div>
                    </div>

                    {/* Advantages */}
                    <div className="flex flex-wrap gap-2">
                      {crop?.advantages?.slice(0, 3)?.map((advantage, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-success/10 text-success rounded-full"
                        >
                          {advantage}
                        </span>
                      ))}
                      {crop?.advantages?.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-text-secondary rounded-full">
                          +{crop?.advantages?.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e?.stopPropagation();
                        handleComparisonToggle(crop);
                      }}
                      iconName={comparisonCrops?.find(c => c?.id === crop?.id) ? "Check" : "Plus"}
                      disabled={!comparisonCrops?.find(c => c?.id === crop?.id) && comparisonCrops?.length >= 3}
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedCrop?.id === crop?.id && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Financial Details */}
                      <div>
                        <h5 className="text-sm font-medium text-text-primary mb-3">Financial Analysis</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-text-secondary">Investment Required:</span>
                            <span className="text-sm font-medium text-text-primary">{crop?.investmentRequired}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-text-secondary">Expected Profit:</span>
                            <span className="text-sm font-medium text-success">{crop?.expectedProfit}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-text-secondary">Profitability:</span>
                            <span className="text-sm font-medium text-primary">{crop?.profitability}</span>
                          </div>
                        </div>
                      </div>

                      {/* Government Schemes */}
                      <div>
                        <h5 className="text-sm font-medium text-text-primary mb-3">Available Schemes</h5>
                        <div className="space-y-2">
                          {crop?.schemes?.map((scheme, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Icon name="FileText" size={12} className="text-primary" />
                              <span className="text-sm text-text-secondary">{scheme}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Challenges */}
                    {crop?.challenges?.length > 0 && (
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-text-primary mb-2">Potential Challenges</h5>
                        <div className="flex flex-wrap gap-2">
                          {crop?.challenges?.map((challenge, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-warning/10 text-warning rounded-full"
                            >
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Comparison View */}
      {viewMode === 'comparison' && comparisonCrops?.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-sm font-medium text-text-primary">Crop</th>
                <th className="text-left p-3 text-sm font-medium text-text-primary">Confidence</th>
                <th className="text-left p-3 text-sm font-medium text-text-primary">Yield</th>
                <th className="text-left p-3 text-sm font-medium text-text-primary">Price</th>
                <th className="text-left p-3 text-sm font-medium text-text-primary">Investment</th>
                <th className="text-left p-3 text-sm font-medium text-text-primary">Profit</th>
                <th className="text-left p-3 text-sm font-medium text-text-primary">Water</th>
              </tr>
            </thead>
            <tbody>
              {comparisonCrops?.map((crop) => (
                <tr key={crop?.id} className="border-b border-border hover:bg-surface">
                  <td className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden">
                        <Image
                          src={crop?.image}
                          alt={crop?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-primary">{crop?.name}</p>
                        <p className="text-xs text-text-secondary">{crop?.hindiName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className={`text-sm font-medium ${getConfidenceColor(crop?.confidence)}`}>
                      {crop?.confidence}%
                    </span>
                  </td>
                  <td className="p-3 text-sm text-text-primary">{crop?.expectedYield}</td>
                  <td className="p-3">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-text-primary">{crop?.marketPrice}</span>
                      <Icon 
                        name={getPriceIcon(crop?.pricetrend)?.icon} 
                        size={12} 
                        className={getPriceIcon(crop?.pricetrend)?.color} 
                      />
                    </div>
                  </td>
                  <td className="p-3 text-sm text-text-primary">{crop?.investmentRequired}</td>
                  <td className="p-3 text-sm text-success">{crop?.expectedProfit}</td>
                  <td className="p-3 text-sm text-text-primary">{crop?.waterRequirement?.split(' ')?.[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border">
        <Button
          variant="default"
          onClick={() => onSaveResults && onSaveResults(displayRecommendations)}
          iconName="Download"
          iconPosition="left"
        >
          Save Results
        </Button>
        <Button
          variant="outline"
          iconName="Share"
          iconPosition="left"
        >
          Share with Community
        </Button>
        <Button
          variant="outline"
          iconName="MessageCircle"
          iconPosition="left"
        >
          Get Expert Advice
        </Button>
        {comparisonCrops?.length > 0 && (
          <Button
            variant="outline"
            onClick={() => setComparisonCrops([])}
            iconName="X"
            iconPosition="left"
          >
            Clear Comparison ({comparisonCrops?.length})
          </Button>
        )}
      </div>
    </div>
  );
};

export default CropRecommendations;