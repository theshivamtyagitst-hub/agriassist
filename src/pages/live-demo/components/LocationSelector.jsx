import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const LocationSelector = ({ onLocationSelect, selectedLocation }) => {
  const [inputMethod, setInputMethod] = useState('manual'); // 'manual', 'gps', 'voice'
  const [isListening, setIsListening] = useState(false);
  const [locationData, setLocationData] = useState({
    state: selectedLocation?.state || '',
    district: selectedLocation?.district || '',
    village: selectedLocation?.village || '',
    coordinates: selectedLocation?.coordinates || null
  });

  const stateOptions = [
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
    { value: 'telangana', label: 'Telangana' }
  ];

  const districtOptions = {
    'maharashtra': [
      { value: 'pune', label: 'Pune' },
      { value: 'nashik', label: 'Nashik' },
      { value: 'aurangabad', label: 'Aurangabad' },
      { value: 'solapur', label: 'Solapur' }
    ],
    'punjab': [
      { value: 'ludhiana', label: 'Ludhiana' },
      { value: 'amritsar', label: 'Amritsar' },
      { value: 'jalandhar', label: 'Jalandhar' },
      { value: 'patiala', label: 'Patiala' }
    ],
    'haryana': [
      { value: 'karnal', label: 'Karnal' },
      { value: 'hisar', label: 'Hisar' },
      { value: 'panipat', label: 'Panipat' },
      { value: 'rohtak', label: 'Rohtak' }
    ]
  };

  const handleGPSLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          const coords = {
            latitude: position?.coords?.latitude,
            longitude: position?.coords?.longitude
          };
          setLocationData(prev => ({
            ...prev,
            coordinates: coords,
            state: 'maharashtra',
            district: 'pune',
            village: 'Detected via GPS'
          }));
          onLocationSelect({
            ...locationData,
            coordinates: coords,
            state: 'maharashtra',
            district: 'pune',
            village: 'Detected via GPS'
          });
        },
        (error) => {
          console.error('GPS Error:', error);
        }
      );
    }
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'hi-IN';
      recognition.continuous = false;
      recognition.interimResults = false;

      setIsListening(true);
      recognition?.start();

      recognition.onresult = (event) => {
        const transcript = event?.results?.[0]?.[0]?.transcript;
        // Mock voice processing - in real app would use NLP
        setLocationData(prev => ({
          ...prev,
          village: transcript,
          state: 'maharashtra',
          district: 'pune'
        }));
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    }
  };

  const handleInputChange = (field, value) => {
    const updatedData = { ...locationData, [field]: value };
    setLocationData(updatedData);
    
    if (updatedData?.state && updatedData?.district) {
      onLocationSelect(updatedData);
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-brand-md">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="MapPin" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            Select Your Location
          </h3>
          <p className="text-sm text-text-secondary">
            Choose how you'd like to share your location
          </p>
        </div>
      </div>
      {/* Input Method Selection */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={inputMethod === 'manual' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setInputMethod('manual')}
          iconName="Edit3"
          iconPosition="left"
        >
          Manual Entry
        </Button>
        <Button
          variant={inputMethod === 'gps' ? 'default' : 'outline'}
          size="sm"
          onClick={() => {
            setInputMethod('gps');
            handleGPSLocation();
          }}
          iconName="Navigation"
          iconPosition="left"
        >
          Use GPS
        </Button>
        <Button
          variant={inputMethod === 'voice' ? 'default' : 'outline'}
          size="sm"
          onClick={() => {
            setInputMethod('voice');
            handleVoiceInput();
          }}
          iconName="Mic"
          iconPosition="left"
          className={isListening ? 'voice-pulse' : ''}
        >
          {isListening ? 'Listening...' : 'Voice Input'}
        </Button>
      </div>
      {/* Manual Input Form */}
      {inputMethod === 'manual' && (
        <div className="space-y-4">
          <Select
            label="State"
            placeholder="Select your state"
            options={stateOptions}
            value={locationData?.state}
            onChange={(value) => handleInputChange('state', value)}
            searchable
            required
          />

          {locationData?.state && (
            <Select
              label="District"
              placeholder="Select your district"
              options={districtOptions?.[locationData?.state] || []}
              value={locationData?.district}
              onChange={(value) => handleInputChange('district', value)}
              searchable
              required
            />
          )}

          <Input
            label="Village/Area"
            type="text"
            placeholder="Enter your village or area name"
            value={locationData?.village}
            onChange={(e) => handleInputChange('village', e?.target?.value)}
          />
        </div>
      )}
      {/* GPS Result */}
      {inputMethod === 'gps' && locationData?.coordinates && (
        <div className="bg-success/10 border border-success/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Location Detected</span>
          </div>
          <p className="text-sm text-text-secondary">
            Coordinates: {locationData?.coordinates?.latitude?.toFixed(4)}, {locationData?.coordinates?.longitude?.toFixed(4)}
          </p>
          <p className="text-sm text-text-secondary">
            Area: {locationData?.village}, {locationData?.district}, {locationData?.state}
          </p>
        </div>
      )}
      {/* Voice Input Result */}
      {inputMethod === 'voice' && locationData?.village && !isListening && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Mic" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Voice Input Captured</span>
          </div>
          <p className="text-sm text-text-secondary">
            Detected: "{locationData?.village}"
          </p>
        </div>
      )}
      {/* Current Selection Summary */}
      {(locationData?.state && locationData?.district) && (
        <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
          <h4 className="text-sm font-medium text-text-primary mb-2">Selected Location:</h4>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="MapPin" size={14} />
            <span>
              {locationData?.village && `${locationData?.village}, `}
              {locationData?.district}, {locationData?.state}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;