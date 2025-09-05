import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VoiceInterfaceDemo = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('hindi');
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [accuracy, setAccuracy] = useState(0);

  const languages = [
    { id: 'hindi', name: 'हिंदी', flag: '🇮🇳' },
    { id: 'english', name: 'English', flag: '🇺🇸' },
    { id: 'punjabi', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { id: 'marathi', name: 'मराठी', flag: '🇮🇳' }
  ];

  const sampleQueries = {
    hindi: [
      "मेरी मिट्टी के लिए कौन सी फसल अच्छी है?",
      "आज का मौसम कैसा है?",
      "गेहूं का भाव क्या है?",
      "खाद कब डालना चाहिए?"
    ],
    english: [
      "What crop is best for my soil?",
      "How\'s the weather today?",
      "What\'s the wheat price?",
      "When should I apply fertilizer?"
    ],
    punjabi: [
      "ਮੇਰੀ ਮਿੱਟੀ ਲਈ ਕਿਹੜੀ ਫਸਲ ਚੰਗੀ ਹੈ?",
      "ਅੱਜ ਮੌਸਮ ਕਿਵੇਂ ਹੈ?",
      "ਕਣਕ ਦਾ ਭਾਅ ਕੀ ਹੈ?",
      "ਖਾਦ ਕਦੋਂ ਪਾਉਣੀ ਚਾਹੀਦੀ ਹੈ?"
    ],
    marathi: [
      "माझ्या मातीसाठी कोणते पीक चांगले आहे?",
      "आजचे हवामान कसे आहे?",
      "गव्हाचा भाव काय आहे?",
      "खत कधी टाकावे?"
    ]
  };

  const sampleResponses = {
    hindi: {
      crop: "आपकी काली मिट्टी के लिए कपास और सोयाबीन सबसे अच्छी फसल है। इस मौसम में 85% सफलता की संभावना है।",
      weather: "आज का मौसम साफ है, तापमान 28°C है। बारिश की संभावना 20% है। फसल के लिए अच्छा दिन है।",
      price: "आज गेहूं का भाव ₹2,150 प्रति क्विंटल है। कल से ₹50 बढ़ा है।",
      fertilizer: "आपकी फसल 45 दिन की है। अब यूरिया खाद डालने का सही समय है।"
    },
    english: {
      crop: "For your black soil, cotton and soybean are the best crops. 85% success probability this season.",
      weather: "Today's weather is clear, temperature 28°C. 20% chance of rain. Good day for farming.",
      price: "Today's wheat price is ₹2,150 per quintal. Increased by ₹50 from yesterday.",
      fertilizer: "Your crop is 45 days old. Now is the right time to apply urea fertilizer."
    }
  };

  const startListening = () => {
    setIsListening(true);
    setTranscript('');
    setResponse('');
    setAccuracy(0);

    // Simulate voice recognition
    setTimeout(() => {
      const queries = sampleQueries?.[currentLanguage];
      const randomQuery = queries?.[Math.floor(Math.random() * queries?.length)];
      setTranscript(randomQuery);
      
      // Simulate accuracy calculation
      let acc = 85 + Math.random() * 10;
      setAccuracy(Math.round(acc));
      
      // Generate response
      setTimeout(() => {
        const responses = sampleResponses?.[currentLanguage] || sampleResponses?.english;
        let responseText = '';
        
        if (randomQuery?.includes('फसल') || randomQuery?.includes('crop') || randomQuery?.includes('ਫਸਲ') || randomQuery?.includes('पीक')) {
          responseText = responses?.crop;
        } else if (randomQuery?.includes('मौसम') || randomQuery?.includes('weather') || randomQuery?.includes('ਮੌਸਮ') || randomQuery?.includes('हवामान')) {
          responseText = responses?.weather;
        } else if (randomQuery?.includes('भाव') || randomQuery?.includes('price') || randomQuery?.includes('ਭਾਅ')) {
          responseText = responses?.price;
        } else {
          responseText = responses?.fertilizer;
        }
        
        setResponse(responseText);
        setIsListening(false);
      }, 1500);
    }, 2000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Mic" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary">Voice-First Technology</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Multilingual Voice Interface
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Interact with AgriAssist using your voice in your preferred language. 
            Our advanced speech recognition understands agricultural terminology and local dialects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Voice Interface Panel */}
          <div className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
              Try Voice Commands
            </h3>
            
            {/* Language Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-text-primary mb-3">
                Select Language
              </label>
              <div className="grid grid-cols-2 gap-2">
                {languages?.map((lang) => (
                  <button
                    key={lang?.id}
                    onClick={() => setCurrentLanguage(lang?.id)}
                    className={`p-3 rounded-lg border text-center smooth-transition ${
                      currentLanguage === lang?.id
                        ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/30 text-text-secondary'
                    }`}
                  >
                    <div className="text-lg mb-1">{lang?.flag}</div>
                    <div className="text-sm font-medium">{lang?.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Voice Control */}
            <div className="text-center mb-6">
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 smooth-transition ${
                isListening 
                  ? 'bg-primary text-primary-foreground voice-pulse' 
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}>
                <Icon 
                  name={isListening ? "MicOff" : "Mic"} 
                  size={32} 
                />
              </div>
              
              <Button
                variant={isListening ? "destructive" : "default"}
                size="lg"
                onClick={isListening ? stopListening : startListening}
                iconName={isListening ? "Square" : "Play"}
                iconPosition="left"
              >
                {isListening ? 'Stop Listening' : 'Start Voice Demo'}
              </Button>
              
              {isListening && (
                <p className="text-sm text-text-secondary mt-2">
                  Listening... Speak clearly in {languages?.find(l => l?.id === currentLanguage)?.name}
                </p>
              )}
            </div>

            {/* Sample Queries */}
            <div className="bg-surface rounded-lg p-4">
              <h4 className="font-medium text-text-primary mb-3 flex items-center">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Try These Sample Queries
              </h4>
              <div className="space-y-2">
                {sampleQueries?.[currentLanguage]?.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setTranscript(query);
                      const responses = sampleResponses?.[currentLanguage] || sampleResponses?.english;
                      setTimeout(() => {
                        if (query?.includes('फसल') || query?.includes('crop') || query?.includes('ਫਸਲ') || query?.includes('पीक')) {
                          setResponse(responses?.crop);
                        } else if (query?.includes('मौसम') || query?.includes('weather') || query?.includes('ਮੌਸਮ') || query?.includes('हवामान')) {
                          setResponse(responses?.weather);
                        } else if (query?.includes('भाव') || query?.includes('price') || query?.includes('ਭਾਅ')) {
                          setResponse(responses?.price);
                        } else {
                          setResponse(responses?.fertilizer);
                        }
                        setAccuracy(88 + Math.random() * 7);
                      }, 500);
                    }}
                    className="w-full text-left p-2 rounded text-sm text-text-secondary hover:text-primary hover:bg-primary/5 smooth-transition"
                  >
                    "{query}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Response Panel */}
          <div className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
              Voice Recognition Results
            </h3>
            
            {transcript ? (
              <div className="space-y-6">
                {/* Transcript */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-blue-900 flex items-center">
                      <Icon name="User" size={16} className="mr-2" />
                      You said:
                    </h4>
                    {accuracy > 0 && (
                      <span className="text-sm text-blue-700 bg-blue-100 px-2 py-1 rounded">
                        {accuracy}% accuracy
                      </span>
                    )}
                  </div>
                  <p className="text-blue-800 font-medium">{transcript}</p>
                </div>

                {/* Response */}
                {response && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2 flex items-center">
                      <Icon name="Bot" size={16} className="mr-2" />
                      AgriAssist Response:
                    </h4>
                    <p className="text-green-800">{response}</p>
                    
                    <div className="flex items-center space-x-4 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Volume2"
                        iconPosition="left"
                      >
                        Play Audio
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Copy"
                        iconPosition="left"
                      >
                        Copy Text
                      </Button>
                    </div>
                  </div>
                )}

                {/* Voice Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-surface rounded-lg">
                    <Icon name="Languages" size={24} className="text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-text-primary">12 Languages</div>
                    <div className="text-xs text-text-secondary">Supported</div>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-lg">
                    <Icon name="Zap" size={24} className="text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-text-primary">&lt;2 Seconds</div>
                    <div className="text-xs text-text-secondary">Response Time</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="MessageCircle" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-text-secondary mb-4">
                  Click "Start Voice Demo" or try a sample query to see voice recognition in action.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-text-secondary">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Offline capable</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-text-secondary">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Noise cancellation</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-text-secondary">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Dialect recognition</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-text-secondary">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Agricultural terms</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceInterfaceDemo;