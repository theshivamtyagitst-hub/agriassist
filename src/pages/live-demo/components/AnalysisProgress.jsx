import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AnalysisProgress = ({ isAnalyzing, onComplete, inputData }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const analysisSteps = [
    {
      id: 'weather',
      title: 'Fetching Weather Data',
      description: 'Connecting to ISRO satellite data for real-time weather information',
      icon: 'Satellite',
      duration: 2000
    },
    {
      id: 'soil',
      title: 'Analyzing Soil Conditions',
      description: 'Processing soil type and nutrient analysis for your location',
      icon: 'Layers',
      duration: 1500
    },
    {
      id: 'market',
      title: 'Checking Market Prices',
      description: 'Gathering current market rates and price trends',
      icon: 'TrendingUp',
      duration: 1800
    },
    {
      id: 'ai',
      title: 'AI Recommendation Engine',
      description: 'Our AI is analyzing all factors to generate personalized recommendations',
      icon: 'Brain',
      duration: 2200
    },
    {
      id: 'schemes',
      title: 'Finding Government Schemes',
      description: 'Identifying applicable subsidies and government support programs',
      icon: 'FileText',
      duration: 1200
    }
  ];

  useEffect(() => {
    if (!isAnalyzing) {
      setCurrentStep(0);
      setProgress(0);
      return;
    }

    let stepIndex = 0;
    let progressValue = 0;

    const runAnalysis = () => {
      if (stepIndex < analysisSteps?.length) {
        setCurrentStep(stepIndex);
        
        const step = analysisSteps?.[stepIndex];
        const stepProgress = (stepIndex + 1) / analysisSteps?.length * 100;
        
        // Animate progress for current step
        const progressInterval = setInterval(() => {
          progressValue += 2;
          setProgress(Math.min(progressValue, stepProgress));
          
          if (progressValue >= stepProgress) {
            clearInterval(progressInterval);
            stepIndex++;
            
            setTimeout(() => {
              if (stepIndex >= analysisSteps?.length) {
                onComplete();
              } else {
                runAnalysis();
              }
            }, 300);
          }
        }, step?.duration / 50);
      }
    };

    runAnalysis();
  }, [isAnalyzing, onComplete]);

  if (!isAnalyzing && progress === 0) {
    return null;
  }

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-brand-md">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Zap" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            Analyzing Your Farm Data
          </h3>
          <p className="text-sm text-text-secondary">
            Our AI is processing multiple data sources for accurate recommendations
          </p>
        </div>
      </div>
      {/* Overall Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-primary">Overall Progress</span>
          <span className="text-sm text-text-secondary">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-surface rounded-full h-3">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      {/* Analysis Steps */}
      <div className="space-y-4">
        {analysisSteps?.map((step, index) => (
          <div
            key={step?.id}
            className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
              index === currentStep
                ? 'bg-primary/5 border border-primary/20'
                : index < currentStep
                ? 'bg-success/5 border border-success/20' :'bg-surface border border-border'
            }`}
          >
            {/* Step Icon */}
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                index === currentStep
                  ? 'bg-primary text-primary-foreground animate-pulse'
                  : index < currentStep
                  ? 'bg-success text-success-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {index < currentStep ? (
                <Icon name="Check" size={20} />
              ) : (
                <Icon name={step?.icon} size={20} />
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h4
                  className={`text-sm font-medium ${
                    index === currentStep
                      ? 'text-primary'
                      : index < currentStep
                      ? 'text-success' :'text-text-secondary'
                  }`}
                >
                  {step?.title}
                </h4>
                {index === currentStep && (
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                    <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                )}
              </div>
              <p className="text-xs text-text-secondary">{step?.description}</p>
              
              {/* Step-specific progress for current step */}
              {index === currentStep && (
                <div className="mt-2">
                  <div className="w-full bg-surface rounded-full h-1">
                    <div
                      className="bg-primary h-1 rounded-full transition-all duration-100"
                      style={{
                        width: `${((progress - (index / analysisSteps?.length * 100)) / (100 / analysisSteps?.length)) * 100}%`
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center">
              {index < currentStep ? (
                <Icon name="CheckCircle" size={16} className="text-success" />
              ) : index === currentStep ? (
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <div className="w-4 h-4 rounded-full bg-muted" />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Input Data Summary */}
      {inputData && (
        <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
          <h4 className="text-sm font-medium text-text-primary mb-3">Processing Your Data:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            {inputData?.location && (
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={14} className="text-primary" />
                <span className="text-text-secondary">
                  {inputData?.location?.district}, {inputData?.location?.state}
                </span>
              </div>
            )}
            {inputData?.soil && (
              <div className="flex items-center space-x-2">
                <Icon name="Layers" size={14} className="text-primary" />
                <span className="text-text-secondary">{inputData?.soil?.name}</span>
              </div>
            )}
            {inputData?.season && (
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={14} className="text-primary" />
                <span className="text-text-secondary">{inputData?.season?.name}</span>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Fun Facts During Analysis */}
      <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={16} className="text-accent mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-accent mb-1">Did You Know?</h4>
            <p className="text-sm text-text-secondary">
              Our AI analyzes over 50 different factors including soil pH, rainfall patterns, 
              temperature variations, and market trends to provide you with the most accurate 
              crop recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisProgress;