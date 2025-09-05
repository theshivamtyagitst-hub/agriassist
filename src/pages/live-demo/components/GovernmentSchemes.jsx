import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const GovernmentSchemes = ({ selectedCrops, location }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const schemeCategories = [
    { id: 'all', label: 'All Schemes', icon: 'FileText' },
    { id: 'subsidy', label: 'Subsidies', icon: 'DollarSign' },
    { id: 'insurance', label: 'Insurance', icon: 'Shield' },
    { id: 'loan', label: 'Loans', icon: 'CreditCard' },
    { id: 'training', label: 'Training', icon: 'GraduationCap' }
  ];

  const mockSchemes = [
    {
      id: 'pm-kisan',
      name: 'PM-KISAN Scheme',
      hindiName: 'प्रधानमंत्री किसान सम्मान निधि योजना',
      category: 'subsidy',
      description: 'Direct income support of ₹6,000 per year to small and marginal farmers',
      benefits: '₹2,000 every 4 months (3 installments per year)',
      eligibility: [
        'Small and marginal farmers',
        'Land holding up to 2 hectares',
        'Valid Aadhaar card required'
      ],
      documents: [
        'Aadhaar Card',
        'Bank Account Details',
        'Land Records',
        'Mobile Number'
      ],
      applicationProcess: 'Online application through PM-KISAN portal',
      deadline: 'Open throughout the year',
      status: 'active',
      applicableFor: ['wheat', 'rice', 'mustard', 'gram'],
      contactInfo: {
        helpline: '155261',
        website: 'https://pmkisan.gov.in',
        email: 'pmkisan-ict@gov.in'
      }
    },
    {
      id: 'crop-insurance',
      name: 'Pradhan Mantri Fasal Bima Yojana',
      hindiName: 'प्रधानमंत्री फसल बीमा योजना',
      category: 'insurance',
      description: 'Comprehensive crop insurance scheme covering pre-sowing to post-harvest losses',
      benefits: 'Up to 100% sum insured for crop losses due to natural calamities',
      eligibility: [
        'All farmers (sharecroppers and tenant farmers included)',
        'Applicable for notified crops in notified areas',
        'Premium payment within due date'
      ],
      documents: [
        'Aadhaar Card',
        'Bank Account Details',
        'Land Records/Tenancy Agreement',
        'Sowing Certificate'
      ],
      applicationProcess: 'Through banks, CSCs, or insurance company offices',
      deadline: 'Before sowing season (varies by crop and state)',
      status: 'active',
      applicableFor: ['wheat', 'mustard', 'gram'],
      contactInfo: {
        helpline: '14447',
        website: 'https://pmfby.gov.in',
        email: 'support.pmfby@gov.in'
      }
    },
    {
      id: 'kisan-credit-card',
      name: 'Kisan Credit Card Scheme',
      hindiName: 'किसान क्रेडिट कार्ड योजना',
      category: 'loan',
      description: 'Credit facility for farmers to meet their agricultural and allied activities',
      benefits: 'Credit limit up to ₹3 lakh at 4% interest rate (with 3% subvention)',
      eligibility: [
        'All farmers (individual/joint)',
        'Tenant farmers and sharecroppers',
        'Self Help Group members'
      ],
      documents: [
        'Application Form',
        'Identity Proof',
        'Address Proof',
        'Land Documents'
      ],
      applicationProcess: 'Apply at nearest bank branch or through online banking',
      deadline: 'Open throughout the year',
      status: 'active',
      applicableFor: ['wheat', 'mustard', 'gram'],
      contactInfo: {
        helpline: '1800-180-1551',
        website: 'https://www.nabard.org',
        email: 'kcc@nabard.org'
      }
    },
    {
      id: 'soil-health-card',
      name: 'Soil Health Card Scheme',
      hindiName: 'मृदा स्वास्थ्य कार्ड योजना',
      category: 'subsidy',
      description: 'Free soil testing and nutrient management recommendations',
      benefits: 'Free soil testing every 2 years with fertilizer recommendations',
      eligibility: [
        'All farmers',
        'One card per 2.5 acres of land',
        'Valid for 2 years'
      ],
      documents: [
        'Aadhaar Card',
        'Land Records',
        'Soil Sample'
      ],
      applicationProcess: 'Through Village Level Workers or Soil Testing Labs',
      deadline: 'Open throughout the year',
      status: 'active',
      applicableFor: ['wheat', 'mustard', 'gram'],
      contactInfo: {
        helpline: '1800-180-1551',
        website: 'https://soilhealth.dac.gov.in',
        email: 'soilhealth.dac@nic.in'
      }
    },
    {
      id: 'organic-farming',
      name: 'Paramparagat Krishi Vikas Yojana',
      hindiName: 'परम्परागत कृषि विकास योजना',
      category: 'subsidy',
      description: 'Promotion of organic farming through cluster approach',
      benefits: '₹50,000 per hectare over 3 years for organic farming',
      eligibility: [
        'Farmers willing to adopt organic farming',
        'Minimum cluster size of 50 acres',
        'Group formation required'
      ],
      documents: [
        'Group Formation Certificate',
        'Land Records',
        'Aadhaar Card',
        'Bank Account Details'
      ],
      applicationProcess: 'Through State Agriculture Departments',
      deadline: 'As per state notification',
      status: 'active',
      applicableFor: ['wheat', 'mustard', 'gram'],
      contactInfo: {
        helpline: '1800-180-1551',
        website: 'https://pgsindia-ncof.gov.in',
        email: 'ncof@nic.in'
      }
    }
  ];

  const filteredSchemes = mockSchemes?.filter(scheme => {
    const matchesSearch = scheme?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         scheme?.hindiName?.includes(searchTerm) ||
                         scheme?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || scheme?.category === selectedCategory;
    
    const matchesCrop = !selectedCrops || selectedCrops?.length === 0 || 
                       selectedCrops?.some(crop => scheme?.applicableFor?.includes(crop?.id));
    
    return matchesSearch && matchesCategory && matchesCrop;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-success bg-success/10';
      case 'upcoming': return 'text-accent bg-accent/10';
      case 'expired': return 'text-error bg-error/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  const getCategoryIcon = (category) => {
    const cat = schemeCategories?.find(c => c?.id === category);
    return cat ? cat?.icon : 'FileText';
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-brand-md">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="FileText" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            Government Schemes
          </h3>
          <p className="text-sm text-text-secondary">
            Available subsidies and support programs for your crops
          </p>
        </div>
      </div>
      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <Input
          type="search"
          placeholder="Search schemes by name or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          className="w-full"
        />

        <div className="flex flex-wrap gap-2">
          {schemeCategories?.map((category) => (
            <Button
              key={category?.id}
              variant={selectedCategory === category?.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category?.id)}
              iconName={category?.icon}
              iconPosition="left"
            >
              {category?.label}
            </Button>
          ))}
        </div>
      </div>
      {/* Selected Crops Info */}
      {selectedCrops && selectedCrops?.length > 0 && (
        <div className="mb-6 p-4 bg-surface rounded-lg border border-border">
          <h4 className="text-sm font-medium text-text-primary mb-2">
            Showing schemes for your selected crops:
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedCrops?.map((crop) => (
              <span
                key={crop?.id}
                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
              >
                {crop?.name}
              </span>
            ))}
          </div>
        </div>
      )}
      {/* Schemes List */}
      <div className="space-y-4">
        {filteredSchemes?.map((scheme) => (
          <div
            key={scheme?.id}
            className="border border-border rounded-lg p-4 hover:shadow-brand-md transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={getCategoryIcon(scheme?.category)} size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-primary">{scheme?.name}</h4>
                  <p className="text-sm text-text-secondary">{scheme?.hindiName}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(scheme?.status)}`}>
                {scheme?.status?.charAt(0)?.toUpperCase() + scheme?.status?.slice(1)}
              </span>
            </div>

            <p className="text-sm text-text-secondary mb-4">{scheme?.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Benefits */}
              <div>
                <h5 className="text-sm font-medium text-text-primary mb-2">Benefits:</h5>
                <p className="text-sm text-success">{scheme?.benefits}</p>
              </div>

              {/* Application Process */}
              <div>
                <h5 className="text-sm font-medium text-text-primary mb-2">How to Apply:</h5>
                <p className="text-sm text-text-secondary">{scheme?.applicationProcess}</p>
              </div>
            </div>

            {/* Eligibility */}
            <div className="mb-4">
              <h5 className="text-sm font-medium text-text-primary mb-2">Eligibility:</h5>
              <div className="flex flex-wrap gap-2">
                {scheme?.eligibility?.map((criteria, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                  >
                    {criteria}
                  </span>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="mb-4">
              <h5 className="text-sm font-medium text-text-primary mb-2">Required Documents:</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {scheme?.documents?.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-1">
                    <Icon name="FileText" size={12} className="text-primary" />
                    <span className="text-xs text-text-secondary">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-surface rounded-lg p-3 mb-4">
              <h5 className="text-sm font-medium text-text-primary mb-2">Contact Information:</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} className="text-primary" />
                  <span className="text-text-secondary">Helpline: {scheme?.contactInfo?.helpline}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={14} className="text-primary" />
                  <span className="text-text-secondary">Website</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} className="text-primary" />
                  <span className="text-text-secondary">Email Support</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant="default"
                size="sm"
                iconName="ExternalLink"
                iconPosition="left"
              >
                Apply Online
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
              >
                Download Form
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
              >
                Call Helpline
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Bookmark"
                iconPosition="left"
              >
                Save Scheme
              </Button>
            </div>

            {/* Deadline Warning */}
            {scheme?.deadline !== 'Open throughout the year' && (
              <div className="mt-3 p-2 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-warning" />
                  <span className="text-sm text-warning">
                    Deadline: {scheme?.deadline}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* No Results */}
      {filteredSchemes?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="text-lg font-medium text-text-primary mb-2">No schemes found</h4>
          <p className="text-sm text-text-secondary mb-4">
            Try adjusting your search terms or category filters
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Clear Filters
          </Button>
        </div>
      )}
      {/* Help Section */}
      <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
        <div className="flex items-start space-x-3">
          <Icon name="HelpCircle" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-accent mb-1">Need Help with Applications?</h4>
            <p className="text-sm text-text-secondary mb-3">
              Visit your nearest Common Service Center (CSC) or contact your local agriculture extension officer for assistance with scheme applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                iconName="MapPin"
                iconPosition="left"
              >
                Find Nearest CSC
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Users"
                iconPosition="left"
              >
                Contact Extension Officer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;