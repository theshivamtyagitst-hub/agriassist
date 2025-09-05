import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all demo components
import LocationSelector from './components/LocationSelector';
import SoilTypeSelector from './components/SoilTypeSelector';
import SeasonSelector from './components/SeasonSelector';
import AnalysisProgress from './components/AnalysisProgress';
import CropRecommendations from './components/CropRecommendations';
import GovernmentSchemes from './components/GovernmentSchemes';
import FeedbackSection from './components/FeedbackSection';

const LiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [demoData, setDemoData] = useState({
    location: null,
    soil: null,
    season: null,
    recommendations: null
  });
  const [savedResults, setSavedResults] = useState([]);

  const demoSteps = [
    { id: 1, title: 'Location', icon: 'MapPin', description: 'Select your farm location' },
    { id: 2, title: 'Soil Type', icon: 'Layers', description: 'Identify your soil type' },
    { id: 3, title: 'Season', icon: 'Calendar', description: 'Choose farming season' },
    { id: 4, title: 'Analysis', icon: 'Zap', description: 'AI processing your data' },
    { id: 5, title: 'Results', icon: 'CheckCircle', description: 'View recommendations' }
  ];

  // Auto-save to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('agriassist-demo-data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setDemoData(parsed);
        if (parsed?.recommendations) {
          setAnalysisComplete(true);
          setCurrentStep(5);
        }
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('agriassist-demo-data', JSON.stringify(demoData));
  }, [demoData]);

  const handleLocationSelect = (location) => {
    setDemoData(prev => ({ ...prev, location }));
  };

  const handleSoilSelect = (soil) => {
    setDemoData(prev => ({ ...prev, soil }));
  };

  const handleSeasonSelect = (season) => {
    setDemoData(prev => ({ ...prev, season }));
  };

  const handleStartAnalysis = () => {
    if (demoData?.location && demoData?.soil && demoData?.season) {
      setCurrentStep(4);
      setIsAnalyzing(true);
    }
  };

  const handleAnalysisComplete = () => {
    setIsAnalyzing(false);
    setAnalysisComplete(true);
    setCurrentStep(5);
    
    // Mock recommendations would be generated here
    // In real app, this would come from the API
    setDemoData(prev => ({
      ...prev,
      recommendations: 'generated' // This triggers the CropRecommendations component
    }));
  };

  const handleSaveResults = (recommendations) => {
    const resultData = {
      id: Date.now(),
      timestamp: new Date()?.toISOString(),
      location: demoData?.location,
      soil: demoData?.soil,
      season: demoData?.season,
      recommendations: recommendations,
      saved: true
    };
    
    setSavedResults(prev => [resultData, ...prev]);
    localStorage.setItem('agriassist-saved-results', JSON.stringify([resultData, ...savedResults]));
  };

  const handleFeedbackSubmit = (feedback) => {
    console.log('Feedback submitted:', feedback);
    // In real app, this would be sent to the backend
  };

  const handleResetDemo = () => {
    setCurrentStep(1);
    setIsAnalyzing(false);
    setAnalysisComplete(false);
    setDemoData({
      location: null,
      soil: null,
      season: null,
      recommendations: null
    });
    localStorage.removeItem('agriassist-demo-data');
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1: return demoData?.location;
      case 2: return demoData?.soil;
      case 3: return demoData?.season;
      default: return false;
    }
  };

  const getSelectedCrops = () => {
    // Mock selected crops for schemes component
    if (demoData?.recommendations) {
      return [
        { id: 'wheat', name: 'Wheat' },
        { id: 'mustard', name: 'Mustard' }
      ];
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Demo Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="Play" size={16} />
              <span>Interactive Demo</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
              Experience AgriAssist Live
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Get personalized crop recommendations using real agricultural data. 
              This interactive demo showcases our AI-powered recommendation engine.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 overflow-x-auto pb-4">
              {demoSteps?.map((step, index) => (
                <div key={step?.id} className="flex items-center space-x-4">
                  <div
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      currentStep === step?.id
                        ? 'bg-primary text-primary-foreground'
                        : currentStep > step?.id
                        ? 'bg-success text-success-foreground'
                        : 'bg-surface text-text-secondary'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      {currentStep > step?.id ? (
                        <Icon name="Check" size={16} />
                      ) : (
                        <Icon name={step?.icon} size={16} />
                      )}
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-sm font-medium">{step?.title}</p>
                      <p className="text-xs opacity-80">{step?.description}</p>
                    </div>
                  </div>
                  {index < demoSteps?.length - 1 && (
                    <Icon 
                      name="ChevronRight" 
                      size={16} 
                      className={currentStep > step?.id ? 'text-success' : 'text-muted-foreground'} 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Location Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <LocationSelector
                  onLocationSelect={handleLocationSelect}
                  selectedLocation={demoData?.location}
                />
                
                {demoData?.location && (
                  <div className="flex justify-center">
                    <Button
                      variant="default"
                      onClick={() => setCurrentStep(2)}
                      iconName="ArrowRight"
                      iconPosition="right"
                      size="lg"
                    >
                      Continue to Soil Selection
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Soil Type Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <SoilTypeSelector
                  onSoilSelect={handleSoilSelect}
                  selectedSoil={demoData?.soil?.id}
                />
                
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                    iconName="ArrowLeft"
                    iconPosition="left"
                  >
                    Back
                  </Button>
                  {demoData?.soil && (
                    <Button
                      variant="default"
                      onClick={() => setCurrentStep(3)}
                      iconName="ArrowRight"
                      iconPosition="right"
                      size="lg"
                    >
                      Continue to Season Selection
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Season Selection */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <SeasonSelector
                  onSeasonSelect={handleSeasonSelect}
                  selectedSeason={demoData?.season?.id}
                />
                
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(2)}
                    iconName="ArrowLeft"
                    iconPosition="left"
                  >
                    Back
                  </Button>
                  {demoData?.season && (
                    <Button
                      variant="default"
                      onClick={handleStartAnalysis}
                      iconName="Zap"
                      iconPosition="right"
                      size="lg"
                    >
                      Get AI Recommendations
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Analysis Progress */}
            {currentStep === 4 && (
              <AnalysisProgress
                isAnalyzing={isAnalyzing}
                onComplete={handleAnalysisComplete}
                inputData={demoData}
              />
            )}

            {/* Step 5: Results */}
            {currentStep === 5 && analysisComplete && (
              <div className="space-y-8">
                <CropRecommendations
                  recommendations={null} // Will use mock data
                  inputData={demoData}
                  onSaveResults={handleSaveResults}
                  onVoicePlayback={(crop, text) => console.log('Voice playback:', crop?.name)}
                />

                <GovernmentSchemes
                  selectedCrops={getSelectedCrops()}
                  location={demoData?.location}
                />

                <FeedbackSection
                  recommendations={demoData?.recommendations}
                  onFeedbackSubmit={handleFeedbackSubmit}
                />

                {/* Demo Actions */}
                <div className="flex justify-center space-x-4 pt-6">
                  <Button
                    variant="outline"
                    onClick={handleResetDemo}
                    iconName="RotateCcw"
                    iconPosition="left"
                  >
                    Try Another Demo
                  </Button>
                  <Button
                    variant="default"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    Sign Up for Full Access
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Demo Features Highlight */}
          {currentStep < 4 && (
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-4 text-center">
                  What You'll Experience in This Demo
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Brain" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-medium text-text-primary mb-2">AI-Powered Analysis</h4>
                    <p className="text-sm text-text-secondary">
                      Our AI processes 50+ factors including weather, soil, and market data
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Satellite" size={24} className="text-success" />
                    </div>
                    <h4 className="font-medium text-text-primary mb-2">Real Data Sources</h4>
                    <p className="text-sm text-text-secondary">
                      Live weather from ISRO satellites and current market prices
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="FileText" size={24} className="text-accent" />
                    </div>
                    <h4 className="font-medium text-text-primary mb-2">Government Schemes</h4>
                    <p className="text-sm text-text-secondary">
                      Personalized list of applicable subsidies and support programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Offline Demo Notice */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} className="text-accent mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-accent mb-1">Demo Mode</h4>
                  <p className="text-sm text-text-secondary">
                    This demo uses sample data to showcase AgriAssist's capabilities. 
                    The full version provides real-time data integration and works offline on your mobile device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;