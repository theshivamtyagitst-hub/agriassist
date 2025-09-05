import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MultilingualAI = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [isListening, setIsListening] = useState(false);
  const [currentDemo, setCurrentDemo] = useState('voice-input');

  const supportedLanguages = [
    {
      code: 'hindi',
      name: 'Hindi',
      nativeName: 'हिंदी',
      flag: '🇮🇳',
      speakers: '600M+',
      accuracy: '96.2%',
      features: ['Voice Recognition', 'Text-to-Speech', 'Regional Dialects'],
      sampleText: 'मेरी फसल के लिए सबसे अच्छा बीज कौन सा है?',
      translation: 'Which is the best seed for my crop?'
    },
    {
      code: 'english',
      name: 'English',
      nativeName: 'English',
      flag: '🇬🇧',
      speakers: '1.5B+',
      accuracy: '98.7%',
      features: ['Voice Recognition', 'Text-to-Speech', 'Technical Terms'],
      sampleText: 'What is the best fertilizer for wheat cultivation?',
      translation: 'What is the best fertilizer for wheat cultivation?'
    },
    {
      code: 'punjabi',
      name: 'Punjabi',
      nativeName: 'ਪੰਜਾਬੀ',
      flag: '🇮🇳',
      speakers: '100M+',
      accuracy: '94.8%',
      features: ['Voice Recognition', 'Agricultural Terms', 'Regional Context'],
      sampleText: 'ਮੇਰੇ ਖੇਤ ਵਿੱਚ ਕਿਹੜੀ ਫਸਲ ਲਗਾਉਣੀ ਚਾਹੀਦੀ ਹੈ?',
      translation: 'Which crop should I plant in my field?'
    },
    {
      code: 'marathi',
      name: 'Marathi',
      nativeName: 'मराठी',
      flag: '🇮🇳',
      speakers: '83M+',
      accuracy: '93.5%',
      features: ['Voice Recognition', 'Agricultural Vocabulary', 'Local Dialects'],
      sampleText: 'माझ्या शेतासाठी योग्य खत कोणते आहे?',
      translation: 'Which fertilizer is suitable for my farm?'
    }
  ];

  const voiceDemos = [
    {
      id: 'voice-input',
      title: 'Voice Input Demo',
      description: 'Speak your farming question in any supported language',
      icon: 'Mic'
    },
    {
      id: 'voice-output',
      title: 'Voice Response Demo',
      description: 'Hear recommendations in your preferred language',
      icon: 'Volume2'
    },
    {
      id: 'translation',
      title: 'Real-time Translation',
      description: 'See how we translate between languages instantly',
      icon: 'Languages'
    }
  ];

  const nlpCapabilities = [
    {
      title: "Agricultural Context Understanding",
      description: "Recognizes farming terminology, crop names, and agricultural practices specific to each region",
      examples: ["Kharif vs Rabi seasons", "Local crop varieties", "Traditional farming methods"],
      icon: "Leaf"
    },
    {
      title: "Regional Dialect Support",
      description: "Understands variations in pronunciation and vocabulary across different regions",
      examples: ["Punjab vs Haryana Hindi", "Coastal vs Inland Marathi", "Urban vs Rural English"],
      icon: "MapPin"
    },
    {
      title: "Code-Switching Handling",
      description: "Processes mixed-language conversations common in rural India",
      examples: ["Hindi-English mix", "Local language + Hindi", "Technical terms in English"],
      icon: "Shuffle"
    },
    {
      title: "Sentiment Analysis",
      description: "Understands farmer emotions and concerns to provide appropriate responses",
      examples: ["Crop failure anxiety", "Weather concerns", "Market price worries"],
      icon: "Heart"
    }
  ];

  const expansionRoadmap = [
    { language: 'Tamil', timeline: 'Q1 2025', speakers: '75M+', status: 'development' },
    { language: 'Telugu', timeline: 'Q1 2025', speakers: '82M+', status: 'development' },
    { language: 'Gujarati', timeline: 'Q2 2025', speakers: '56M+', status: 'planning' },
    { language: 'Bengali', timeline: 'Q2 2025', speakers: '230M+', status: 'planning' },
    { language: 'Kannada', timeline: 'Q3 2025', speakers: '44M+', status: 'research' },
    { language: 'Malayalam', timeline: 'Q3 2025', speakers: '35M+', status: 'research' }
  ];

  const handleVoiceDemo = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false);
    }, 3000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'development': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'research': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Language Support Overview */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Languages" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Multilingual AI Support
            </h2>
            <p className="text-text-secondary">
              Communicate with AgriAssist in your preferred language
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportedLanguages?.map((language) => (
            <div 
              key={language?.code}
              className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                selectedLanguage === language?.code
                  ? 'border-primary bg-primary/5 shadow-brand-sm'
                  : 'border-border hover:border-primary/50 hover:shadow-brand-sm'
              }`}
              onClick={() => setSelectedLanguage(language?.code)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{language?.flag}</span>
                <div>
                  <h3 className="font-medium text-text-primary">{language?.name}</h3>
                  <p className="text-sm text-text-secondary">{language?.nativeName}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Speakers:</span>
                  <span className="text-text-primary font-medium">{language?.speakers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Accuracy:</span>
                  <span className="text-primary font-medium">{language?.accuracy}</span>
                </div>
              </div>

              <div className="space-y-1">
                {language?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={12} className="text-green-600" />
                    <span className="text-xs text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Language Sample */}
        {selectedLanguage && (
          <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
            <h4 className="font-medium text-text-primary mb-3">Sample Conversation</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-border">
                <div className="text-sm text-text-secondary mb-1">Farmer asks:</div>
                <div className="text-text-primary font-medium">
                  {supportedLanguages?.find(lang => lang?.code === selectedLanguage)?.sampleText}
                </div>
              </div>
              <div className="bg-primary/5 p-3 rounded border border-primary/20">
                <div className="text-sm text-text-secondary mb-1">AgriAssist understands:</div>
                <div className="text-text-primary">
                  {supportedLanguages?.find(lang => lang?.code === selectedLanguage)?.translation}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Voice Demo Section */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Mic" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Voice Interaction Demo
            </h2>
            <p className="text-text-secondary">
              Experience how AgriAssist understands and responds to voice commands
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          {voiceDemos?.map((demo) => (
            <button
              key={demo?.id}
              onClick={() => setCurrentDemo(demo?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors duration-200 ${
                currentDemo === demo?.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-white text-text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              <Icon name={demo?.icon} size={16} />
              <span className="text-sm font-medium">{demo?.title}</span>
            </button>
          ))}
        </div>

        <div className="bg-surface rounded-lg p-6 border border-border">
          {currentDemo === 'voice-input' && (
            <div className="text-center">
              <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                isListening ? 'bg-red-100 voice-pulse' : 'bg-primary/10'
              }`}>
                <Icon 
                  name="Mic" 
                  size={32} 
                  className={isListening ? 'text-red-600' : 'text-primary'} 
                />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">
                {isListening ? 'Listening...' : 'Click to speak your question'}
              </h3>
              <p className="text-text-secondary mb-4">
                Ask about crops, weather, market prices, or farming techniques in any supported language
              </p>
              <Button
                variant={isListening ? "destructive" : "default"}
                onClick={handleVoiceDemo}
                iconName={isListening ? "Square" : "Mic"}
                iconPosition="left"
              >
                {isListening ? 'Stop Listening' : 'Start Voice Demo'}
              </Button>
            </div>
          )}

          {currentDemo === 'voice-output' && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Volume2" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">
                Voice Response Demo
              </h3>
              <p className="text-text-secondary mb-4">
                Hear how AgriAssist responds with clear, natural speech in your language
              </p>
              <div className="bg-white p-4 rounded border border-border mb-4">
                <div className="text-sm text-text-secondary mb-2">Sample Response:</div>
                <div className="text-text-primary italic">
                  "Based on your soil type and current weather, I recommend planting wheat this season. The expected yield is 4.2 tons per acre with proper irrigation."
                </div>
              </div>
              <Button variant="outline" iconName="Play" iconPosition="left">
                Play Audio Sample
              </Button>
            </div>
          )}

          {currentDemo === 'translation' && (
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-4 text-center">
                Real-time Translation Demo
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-border">
                  <div className="text-sm text-text-secondary mb-2">Input (Hindi):</div>
                  <div className="text-text-primary mb-3">
                    "मेरे खेत में कीड़े लग गए हैं, क्या करूं?"
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <Icon name="CheckCircle" size={14} />
                    <span>Detected: Hindi</span>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded border border-primary/20">
                  <div className="text-sm text-text-secondary mb-2">Processed (English):</div>
                  <div className="text-text-primary mb-3">
                    "My field has pest infestation, what should I do?"
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <Icon name="Zap" size={14} />
                    <span>Translated in 0.3s</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* NLP Capabilities */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Brain" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Advanced Language Understanding
            </h2>
            <p className="text-text-secondary">
              How our AI processes and understands agricultural conversations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nlpCapabilities?.map((capability, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={capability?.icon} size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-text-primary mb-2">
                    {capability?.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                    {capability?.description}
                  </p>
                  <div className="space-y-1">
                    {capability?.examples?.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center space-x-2">
                        <Icon name="ArrowRight" size={12} className="text-text-secondary" />
                        <span className="text-xs text-text-secondary">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Language Expansion Roadmap */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Calendar" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Language Expansion Roadmap
            </h2>
            <p className="text-text-secondary">
              Upcoming language support to serve more farming communities
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expansionRoadmap?.map((item, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-text-primary">{item?.language}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item?.status)}`}>
                  {item?.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Timeline:</span>
                  <span className="text-text-primary font-medium">{item?.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Speakers:</span>
                  <span className="text-text-primary">{item?.speakers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">Community Driven</span>
          </div>
          <p className="text-sm text-text-secondary">
            Our language expansion is guided by farmer requests and community needs. Request support for your local language through our feedback system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultilingualAI;