import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterPanel = ({ filters, onFilterChange, onClearFilters, isVoiceSearching, onVoiceSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cropTypes = [
    { value: 'all', label: 'All Crops', icon: 'Wheat' },
    { value: 'rice', label: 'Rice', icon: 'Wheat' },
    { value: 'wheat', label: 'Wheat', icon: 'Wheat' },
    { value: 'cotton', label: 'Cotton', icon: 'Flower' },
    { value: 'sugarcane', label: 'Sugarcane', icon: 'Wheat' },
    { value: 'vegetables', label: 'Vegetables', icon: 'Carrot' },
    { value: 'fruits', label: 'Fruits', icon: 'Apple' },
    { value: 'pulses', label: 'Pulses', icon: 'Wheat' }
  ];

  const states = [
    { value: 'all', label: 'All States' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'andhra-pradesh', label: 'Andhra Pradesh' }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', icon: 'Grid3x3' },
    { value: 'subsidy', label: 'Subsidies', icon: 'DollarSign' },
    { value: 'loan', label: 'Loans', icon: 'CreditCard' },
    { value: 'insurance', label: 'Insurance', icon: 'Shield' },
    { value: 'training', label: 'Training', icon: 'GraduationCap' },
    { value: 'equipment', label: 'Equipment', icon: 'Wrench' }
  ];

  const eligibilityFilters = [
    { value: 'all', label: 'All Farmers' },
    { value: 'small', label: 'Small Farmers (≤2 acres)' },
    { value: 'marginal', label: 'Marginal Farmers (≤1 acre)' },
    { value: 'women', label: 'Women Farmers' },
    { value: 'sc-st', label: 'SC/ST Farmers' },
    { value: 'young', label: 'Young Farmers (≤35 years)' }
  ];

  const handleFilterChange = (filterType, value) => {
    onFilterChange({
      ...filters,
      [filterType]: value
    });
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = 'en-IN';
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onstart = () => {
        onVoiceSearch(true);
      };
      
      recognition.onresult = (event) => {
        const transcript = event?.results?.[0]?.[0]?.transcript;
        handleFilterChange('search', transcript);
        onVoiceSearch(false);
      };
      
      recognition.onerror = () => {
        onVoiceSearch(false);
      };
      
      recognition.onend = () => {
        onVoiceSearch(false);
      };
      
      recognition?.start();
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={24} className="text-primary" />
          <h2 className="text-xl font-heading font-semibold text-text-primary">
            Find Schemes
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
          >
            Clear All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          />
        </div>
      </div>
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search schemes by name, keyword, or description..."
            value={filters?.search}
            onChange={(e) => handleFilterChange('search', e?.target?.value)}
            className="pr-20"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleVoiceSearch}
              disabled={isVoiceSearching}
              iconName={isVoiceSearching ? "Loader2" : "Mic"}
              className={`${isVoiceSearching ? 'animate-spin' : 'voice-pulse'}`}
            />
            <Button
              variant="ghost"
              size="sm"
              iconName="Search"
            />
          </div>
        </div>
      </div>
      {/* Filter Content */}
      <div className={`space-y-6 ${!isExpanded && 'hidden lg:block'}`}>
        {/* Crop Type Filter */}
        <div>
          <h3 className="text-sm font-medium text-text-primary mb-3">Crop Type</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {cropTypes?.map((crop) => (
              <Button
                key={crop?.value}
                variant={filters?.cropType === crop?.value ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange('cropType', crop?.value)}
                iconName={crop?.icon}
                iconPosition="left"
                className="justify-start"
              >
                {crop?.label}
              </Button>
            ))}
          </div>
        </div>

        {/* State Filter */}
        <div>
          <h3 className="text-sm font-medium text-text-primary mb-3">State</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {states?.map((state) => (
              <Button
                key={state?.value}
                variant={filters?.state === state?.value ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange('state', state?.value)}
                className="justify-start"
              >
                {state?.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <h3 className="text-sm font-medium text-text-primary mb-3">Scheme Category</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {categories?.map((category) => (
              <Button
                key={category?.value}
                variant={filters?.category === category?.value ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange('category', category?.value)}
                iconName={category?.icon}
                iconPosition="left"
                className="justify-start"
              >
                {category?.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Eligibility Filter */}
        <div>
          <h3 className="text-sm font-medium text-text-primary mb-3">Eligibility</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {eligibilityFilters?.map((eligibility) => (
              <Button
                key={eligibility?.value}
                variant={filters?.eligibility === eligibility?.value ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange('eligibility', eligibility?.value)}
                className="justify-start"
              >
                {eligibility?.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <h3 className="text-sm font-medium text-text-primary mb-3">Status</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filters?.status === 'all' ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange('status', 'all')}
            >
              All Status
            </Button>
            <Button
              variant={filters?.status === 'active' ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange('status', 'active')}
              iconName="CheckCircle"
              iconPosition="left"
            >
              Active
            </Button>
            <Button
              variant={filters?.status === 'closing-soon' ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange('status', 'closing-soon')}
              iconName="Clock"
              iconPosition="left"
            >
              Closing Soon
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;