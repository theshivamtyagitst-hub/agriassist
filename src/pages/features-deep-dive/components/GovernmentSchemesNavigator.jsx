import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const GovernmentSchemesNavigator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredSchemes, setFilteredSchemes] = useState([]);

  const states = [
    { value: 'all', label: 'All States' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'rajasthan', label: 'Rajasthan' }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'subsidy', label: 'Subsidies' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'loan', label: 'Loans' },
    { value: 'technology', label: 'Technology' },
    { value: 'training', label: 'Training' }
  ];

  const mockSchemes = [
    {
      id: 1,
      name: 'PM-KISAN Samman Nidhi',
      category: 'subsidy',
      state: 'all',
      description: 'Direct income support of ₹6,000 per year to small and marginal farmers',
      eligibility: 'Small and marginal farmers with cultivable land up to 2 hectares',
      benefit: '₹6,000 per year in 3 installments',
      applicationProcess: 'Online through PM-KISAN portal or Common Service Centers',
      documents: 'Aadhaar, Bank account, Land records',
      deadline: 'Open throughout the year',
      status: 'Active',
      beneficiaries: '11.7 Crore',
      website: 'pmkisan.gov.in'
    },
    {
      id: 2,
      name: 'Pradhan Mantri Fasal Bima Yojana',
      category: 'insurance',
      state: 'all',
      description: 'Crop insurance scheme providing financial support to farmers in case of crop failure',
      eligibility: 'All farmers including sharecroppers and tenant farmers',
      benefit: 'Up to ₹2 lakh per farmer per season',
      applicationProcess: 'Through banks, insurance companies, or online portal',
      documents: 'Aadhaar, Bank account, Land documents, Sowing certificate',
      deadline: 'Before sowing season',
      status: 'Active',
      beneficiaries: '5.5 Crore',
      website: 'pmfby.gov.in'
    },
    {
      id: 3,
      name: 'Kisan Credit Card',
      category: 'loan',
      state: 'all',
      description: 'Credit facility for farmers to meet their agricultural and allied activities',
      eligibility: 'All farmers including tenant farmers, oral lessees, and sharecroppers',
      benefit: 'Credit limit based on cropping pattern and scale of finance',
      applicationProcess: 'Apply at nearest bank branch or through online banking',
      documents: 'Identity proof, Address proof, Land documents',
      deadline: 'Open throughout the year',
      status: 'Active',
      beneficiaries: '7 Crore',
      website: 'kcc.gov.in'
    },
    {
      id: 4,
      name: 'Soil Health Card Scheme',
      category: 'technology',
      state: 'all',
      description: 'Provides soil health cards to farmers with nutrient status and fertilizer recommendations',
      eligibility: 'All farmers across the country',
      benefit: 'Free soil testing and customized fertilizer recommendations',
      applicationProcess: 'Through agriculture department or soil testing laboratories',
      documents: 'Land ownership documents, Aadhaar card',
      deadline: 'Open throughout the year',
      status: 'Active',
      beneficiaries: '22 Crore',
      website: 'soilhealth.dac.gov.in'
    },
    {
      id: 5,
      name: 'Maharashtra Krishi Pump Subsidy',
      category: 'subsidy',
      state: 'maharashtra',
      description: 'Subsidy for agricultural pump sets to improve irrigation facilities',
      eligibility: 'Farmers in Maharashtra with agricultural land',
      benefit: 'Up to 90% subsidy on pump sets',
      applicationProcess: 'Through Maharashtra agriculture department',
      documents: 'Land records, Electricity connection proof, Bank details',
      deadline: 'March 31, 2025',
      status: 'Active',
      beneficiaries: '2.5 Lakh',
      website: 'krishi.maharashtra.gov.in'
    },
    {
      id: 6,
      name: 'Punjab Crop Diversification Program',
      category: 'training',
      state: 'punjab',
      description: 'Program to promote crop diversification and sustainable agriculture practices',
      eligibility: 'Farmers in Punjab willing to diversify from rice-wheat cycle',
      benefit: 'Financial assistance and technical support for alternative crops',
      applicationProcess: 'Through Punjab agriculture department',
      documents: 'Land records, Aadhaar card, Bank account details',
      deadline: 'April 30, 2025',
      status: 'Active',
      beneficiaries: '1.2 Lakh',
      website: 'agri.punjab.gov.in'
    }
  ];

  React.useEffect(() => {
    let filtered = mockSchemes;

    if (searchQuery) {
      filtered = filtered?.filter(scheme =>
        scheme?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        scheme?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    if (selectedState && selectedState !== 'all') {
      filtered = filtered?.filter(scheme =>
        scheme?.state === selectedState || scheme?.state === 'all'
      );
    }

    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered?.filter(scheme =>
        scheme?.category === selectedCategory
      );
    }

    setFilteredSchemes(filtered);
  }, [searchQuery, selectedState, selectedCategory]);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'subsidy': return 'text-green-700 bg-green-100';
      case 'insurance': return 'text-blue-700 bg-blue-100';
      case 'loan': return 'text-purple-700 bg-purple-100';
      case 'technology': return 'text-orange-700 bg-orange-100';
      case 'training': return 'text-pink-700 bg-pink-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'subsidy': return 'DollarSign';
      case 'insurance': return 'Shield';
      case 'loan': return 'CreditCard';
      case 'technology': return 'Cpu';
      case 'training': return 'GraduationCap';
      default: return 'FileText';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="FileText" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary">Government Support</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Government Schemes Navigator
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Discover and access government schemes, subsidies, and support programs 
            available for farmers. Find eligibility criteria, application processes, and deadlines.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-xl border border-border p-6 brand-shadow-md mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <Input
              type="search"
              placeholder="Search schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
              className="md:col-span-1"
            />
            
            <Select
              placeholder="Select State"
              options={states}
              value={selectedState}
              onChange={setSelectedState}
            />
            
            <Select
              placeholder="Select Category"
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="text-sm text-text-secondary">
              {filteredSchemes?.length} schemes found
            </span>
            <Button
              variant="outline"
              size="sm"
              iconName="Filter"
              iconPosition="left"
              onClick={() => {
                setSearchQuery('');
                setSelectedState('');
                setSelectedCategory('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredSchemes?.map((scheme) => (
            <div key={scheme?.id} className="bg-card rounded-xl border border-border p-6 brand-shadow-md hover:border-primary/30 smooth-transition">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(scheme?.category)}`}>
                    <Icon name={getCategoryIcon(scheme?.category)} size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary text-lg">
                      {scheme?.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(scheme?.category)}`}>
                        {scheme?.category?.charAt(0)?.toUpperCase() + scheme?.category?.slice(1)}
                      </span>
                      <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">
                        {scheme?.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                {scheme?.description}
              </p>

              {/* Key Details */}
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-xs font-medium text-text-primary">Benefit:</span>
                  <p className="text-sm text-text-secondary">{scheme?.benefit}</p>
                </div>
                
                <div>
                  <span className="text-xs font-medium text-text-primary">Eligibility:</span>
                  <p className="text-sm text-text-secondary">{scheme?.eligibility}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-xs font-medium text-text-primary">Beneficiaries:</span>
                    <p className="text-text-secondary">{scheme?.beneficiaries}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-text-primary">Deadline:</span>
                    <p className="text-text-secondary">{scheme?.deadline}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Button
                  variant="default"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                  className="flex-1"
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Info"
                  iconPosition="left"
                  className="flex-1"
                >
                  View Details
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Bookmark"
                  className="sm:w-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {filteredSchemes?.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-text-primary mb-2">No schemes found</h3>
            <p className="text-text-secondary mb-4">
              Try adjusting your search criteria or filters to find relevant schemes.
            </p>
            <Button
              variant="outline"
              iconName="RefreshCw"
              iconPosition="left"
              onClick={() => {
                setSearchQuery('');
                setSelectedState('');
                setSelectedCategory('');
              }}
            >
              Reset Search
            </Button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">150+</div>
            <div className="text-sm text-text-secondary">Active Schemes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">₹2.5L Cr</div>
            <div className="text-sm text-text-secondary">Total Budget</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">12 Cr+</div>
            <div className="text-sm text-text-secondary">Beneficiaries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">28</div>
            <div className="text-sm text-text-secondary">States Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSchemesNavigator;