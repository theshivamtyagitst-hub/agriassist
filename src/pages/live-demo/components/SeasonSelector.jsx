import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SeasonSelector = ({ onSeasonSelect, selectedSeason }) => {
  const [currentSeason, setCurrentSeason] = useState(selectedSeason || '');
  const [weatherData, setWeatherData] = useState({
    temperature: '28°C',
    humidity: '65%',
    rainfall: 'Moderate',
    windSpeed: '12 km/h'
  });

  const seasons = [
    {
      id: 'kharif',
      name: 'Kharif Season',
      hindiName: 'खरीफ सीजन',
      period: 'June - October',
      description: 'Monsoon season crops, high rainfall and humidity',
      characteristics: ['Heavy rainfall', 'High humidity', 'Warm temperature'],
      crops: ['Rice', 'Cotton', 'Sugarcane', 'Maize', 'Bajra'],
      icon: 'CloudRain',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50 border-blue-200',
      months: [6, 7, 8, 9, 10]
    },
    {
      id: 'rabi',
      name: 'Rabi Season',
      hindiName: 'रबी सीजन',
      period: 'November - April',
      description: 'Winter season crops, cool and dry conditions',
      characteristics: ['Cool temperature', 'Low humidity', 'Minimal rainfall'],
      crops: ['Wheat', 'Barley', 'Peas', 'Gram', 'Mustard'],
      icon: 'Snowflake',
      color: 'bg-cyan-500',
      bgColor: 'bg-cyan-50 border-cyan-200',
      months: [11, 12, 1, 2, 3, 4]
    },
    {
      id: 'zaid',
      name: 'Zaid Season',
      hindiName: 'जायद सीजन',
      period: 'April - June',
      description: 'Summer season crops, hot and dry with irrigation',
      characteristics: ['High temperature', 'Low humidity', 'Irrigation required'],
      crops: ['Watermelon', 'Muskmelon', 'Cucumber', 'Fodder', 'Vegetables'],
      icon: 'Sun',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50 border-orange-200',
      months: [4, 5, 6]
    }
  ];

  // Auto-detect current season based on month
  useEffect(() => {
    const currentMonth = new Date()?.getMonth() + 1;
    const autoSeason = seasons?.find(season => 
      season?.months?.includes(currentMonth)
    );
    
    if (autoSeason && !selectedSeason) {
      setCurrentSeason(autoSeason?.id);
      onSeasonSelect(autoSeason);
    }
  }, []);

  const handleSeasonSelection = (season) => {
    setCurrentSeason(season?.id);
    onSeasonSelect(season);
  };

  const getCurrentSeasonRecommendation = () => {
    const currentMonth = new Date()?.getMonth() + 1;
    return seasons?.find(season => season?.months?.includes(currentMonth));
  };

  const recommendedSeason = getCurrentSeasonRecommendation();

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-brand-md">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            Select Farming Season
          </h3>
          <p className="text-sm text-text-secondary">
            Choose the season for crop recommendations
          </p>
        </div>
      </div>
      {/* Current Weather Info */}
      <div className="mb-6 p-4 bg-surface rounded-lg border border-border">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium text-text-primary">Current Weather</h4>
          <div className="flex items-center space-x-1 text-xs text-text-secondary">
            <Icon name="Satellite" size={12} />
            <span>ISRO Data</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <Icon name="Thermometer" size={16} className="text-accent mx-auto mb-1" />
            <p className="text-xs text-text-secondary">Temperature</p>
            <p className="text-sm font-medium text-text-primary">{weatherData?.temperature}</p>
          </div>
          <div className="text-center">
            <Icon name="Droplets" size={16} className="text-blue-500 mx-auto mb-1" />
            <p className="text-xs text-text-secondary">Humidity</p>
            <p className="text-sm font-medium text-text-primary">{weatherData?.humidity}</p>
          </div>
          <div className="text-center">
            <Icon name="CloudRain" size={16} className="text-blue-600 mx-auto mb-1" />
            <p className="text-xs text-text-secondary">Rainfall</p>
            <p className="text-sm font-medium text-text-primary">{weatherData?.rainfall}</p>
          </div>
          <div className="text-center">
            <Icon name="Wind" size={16} className="text-gray-500 mx-auto mb-1" />
            <p className="text-xs text-text-secondary">Wind Speed</p>
            <p className="text-sm font-medium text-text-primary">{weatherData?.windSpeed}</p>
          </div>
        </div>
      </div>
      {/* Season Recommendation */}
      {recommendedSeason && (
        <div className="mb-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Lightbulb" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Recommended Season</span>
          </div>
          <p className="text-sm text-text-secondary">
            Based on current date, <strong>{recommendedSeason?.name}</strong> is the ideal season for planting.
          </p>
        </div>
      )}
      {/* Season Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {seasons?.map((season) => (
          <div
            key={season?.id}
            className={`relative cursor-pointer rounded-lg border-2 transition-all duration-200 hover:shadow-brand-md ${
              currentSeason === season?.id
                ? 'border-primary bg-primary/5 shadow-brand-md'
                : `${season?.bgColor} hover:border-primary/30`
            }`}
            onClick={() => handleSeasonSelection(season)}
          >
            <div className="p-4">
              {/* Season Icon and Header */}
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 ${season?.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={season?.icon} size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">{season?.name}</h4>
                  <p className="text-sm text-text-secondary">{season?.hindiName}</p>
                </div>
              </div>

              {/* Period */}
              <div className="mb-3">
                <p className="text-sm font-medium text-primary">{season?.period}</p>
                <p className="text-xs text-text-secondary mt-1">{season?.description}</p>
              </div>

              {/* Characteristics */}
              <div className="mb-3">
                <p className="text-xs font-medium text-text-primary mb-1">Conditions:</p>
                <div className="flex flex-wrap gap-1">
                  {season?.characteristics?.map((char, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-surface rounded-full text-text-secondary"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suitable Crops */}
              <div>
                <p className="text-xs font-medium text-text-primary mb-1">Main Crops:</p>
                <div className="flex flex-wrap gap-1">
                  {season?.crops?.slice(0, 3)?.map((crop, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {crop}
                    </span>
                  ))}
                  {season?.crops?.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 text-text-secondary rounded-full">
                      +{season?.crops?.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Selection Indicator */}
              {currentSeason === season?.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={14} className="text-primary-foreground" />
                </div>
              )}

              {/* Recommended Badge */}
              {recommendedSeason?.id === season?.id && (
                <div className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
                  Recommended
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Voice Selection Option */}
      <div className="flex items-center justify-center">
        <Button
          variant="outline"
          iconName="Mic"
          iconPosition="left"
          className="voice-pulse"
        >
          Tell us your preferred season
        </Button>
      </div>
      {/* Selected Season Summary */}
      {currentSeason && (
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CheckCircle" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Season Selected</span>
          </div>
          <p className="text-sm text-text-secondary">
            {seasons?.find(s => s?.id === currentSeason)?.name} ({seasons?.find(s => s?.id === currentSeason)?.period}) - 
            Ideal for growing {seasons?.find(s => s?.id === currentSeason)?.crops?.slice(0, 3)?.join(', ')}.
          </p>
        </div>
      )}
    </div>
  );
};

export default SeasonSelector;