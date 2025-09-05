import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SoilTypeSelector = ({ onSoilSelect, selectedSoil }) => {
  const [selectedType, setSelectedType] = useState(selectedSoil || '');

  const soilTypes = [
    {
      id: 'alluvial',
      name: 'Alluvial Soil',
      hindiName: 'जलोढ़ मिट्टी',
      description: 'Rich in nutrients, ideal for wheat, rice, and sugarcane',
      characteristics: ['High fertility', 'Good water retention', 'Easy to cultivate'],
      crops: ['Wheat', 'Rice', 'Sugarcane', 'Cotton'],
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-amber-100 border-amber-200',
      icon: 'Droplets'
    },
    {
      id: 'black',
      name: 'Black Soil',
      hindiName: 'काली मिट्टी',
      description: 'High clay content, excellent for cotton cultivation',
      characteristics: ['High water retention', 'Rich in iron', 'Self-plowing'],
      crops: ['Cotton', 'Sugarcane', 'Wheat', 'Jowar'],
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-gray-100 border-gray-300',
      icon: 'Mountain'
    },
    {
      id: 'red',
      name: 'Red Soil',
      hindiName: 'लाल मिट्टी',
      description: 'Iron-rich soil, good for millets and groundnuts',
      characteristics: ['Good drainage', 'Iron oxide rich', 'Moderate fertility'],
      crops: ['Millets', 'Groundnut', 'Cotton', 'Tobacco'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-red-100 border-red-200',
      icon: 'Flame'
    },
    {
      id: 'laterite',
      name: 'Laterite Soil',
      hindiName: 'लैटेराइट मिट्टी',
      description: 'Acidic soil, suitable for tree crops and spices',
      characteristics: ['High acidity', 'Good for trees', 'Low fertility'],
      crops: ['Coconut', 'Cashew', 'Spices', 'Tea'],
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-orange-100 border-orange-200',
      icon: 'TreePine'
    },
    {
      id: 'sandy',
      name: 'Sandy Soil',
      hindiName: 'बलुई मिट्टी',
      description: 'Well-drained soil, good for root vegetables',
      characteristics: ['Excellent drainage', 'Easy cultivation', 'Low water retention'],
      crops: ['Bajra', 'Groundnut', 'Watermelon', 'Vegetables'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-yellow-100 border-yellow-200',
      icon: 'Waves'
    },
    {
      id: 'mountain',
      name: 'Mountain Soil',
      hindiName: 'पर्वतीय मिट्टी',
      description: 'High altitude soil, suitable for fruits and vegetables',
      characteristics: ['Good organic content', 'Cool climate', 'Terraced farming'],
      crops: ['Apple', 'Potato', 'Vegetables', 'Herbs'],
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=300',
      color: 'bg-green-100 border-green-200',
      icon: 'Mountain'
    }
  ];

  const handleSoilSelection = (soilType) => {
    setSelectedType(soilType?.id);
    onSoilSelect(soilType);
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-brand-md">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Layers" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            Identify Your Soil Type
          </h3>
          <p className="text-sm text-text-secondary">
            Select the soil type that matches your farmland
          </p>
        </div>
      </div>
      {/* Soil Type Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {soilTypes?.map((soil) => (
          <div
            key={soil?.id}
            className={`relative cursor-pointer rounded-lg border-2 transition-all duration-200 hover:shadow-brand-md ${
              selectedType === soil?.id
                ? 'border-primary bg-primary/5 shadow-brand-md'
                : `${soil?.color} hover:border-primary/30`
            }`}
            onClick={() => handleSoilSelection(soil)}
          >
            <div className="p-4">
              {/* Soil Image */}
              <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={soil?.image}
                  alt={soil?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <Icon name={soil?.icon} size={16} className="text-primary" />
                </div>
              </div>

              {/* Soil Info */}
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium text-text-primary">{soil?.name}</h4>
                  <p className="text-sm text-text-secondary">{soil?.hindiName}</p>
                </div>
                
                <p className="text-xs text-text-secondary line-clamp-2">
                  {soil?.description}
                </p>

                {/* Characteristics */}
                <div className="space-y-1">
                  <p className="text-xs font-medium text-text-primary">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {soil?.characteristics?.slice(0, 2)?.map((char, index) => (
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
                <div className="space-y-1">
                  <p className="text-xs font-medium text-text-primary">Best Crops:</p>
                  <div className="flex flex-wrap gap-1">
                    {soil?.crops?.slice(0, 3)?.map((crop, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Selection Indicator */}
              {selectedType === soil?.id && (
                <div className="absolute top-2 left-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={14} className="text-primary-foreground" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Help Section */}
      <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
        <div className="flex items-start space-x-3">
          <Icon name="HelpCircle" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-1">
              Need Help Identifying Your Soil?
            </h4>
            <p className="text-sm text-text-secondary mb-3">
              Look at the color, texture, and drainage of your soil. You can also check with local agricultural extension officers.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                iconName="Camera"
                iconPosition="left"
              >
                Take Photo
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
              >
                Call Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Selected Soil Summary */}
      {selectedType && (
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CheckCircle" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Soil Type Selected</span>
          </div>
          <p className="text-sm text-text-secondary">
            {soilTypes?.find(s => s?.id === selectedType)?.name} - Perfect for growing{' '}
            {soilTypes?.find(s => s?.id === selectedType)?.crops?.slice(0, 2)?.join(', ')} and more.
          </p>
        </div>
      )}
    </div>
  );
};

export default SoilTypeSelector;