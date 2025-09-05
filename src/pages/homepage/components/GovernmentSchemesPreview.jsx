import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const GovernmentSchemesPreview = () => {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const states = [
    { value: 'all', label: 'All States' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'rajasthan', label: 'Rajasthan' }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'subsidy', label: 'Subsidies' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'loan', label: 'Loans' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'training', label: 'Training' }
  ];

  const schemes = [
    {
      id: 1,
      name: 'PM-KISAN Samman Nidhi',
      nameHi: 'पीएम-किसान सम्मान निधि',
      category: 'subsidy',
      amount: '₹6,000/year',
      state: 'all',
      description: 'Direct income support to small and marginal farmers',
      descriptionHi: 'छोटे और सीमांत किसानों को प्रत्यक्ष आय सहायता',
      eligibility: 'Farmers with up to 2 hectares land',
      deadline: '31 Dec 2024',
      status: 'Active',
      applicants: '12.5 Crore',
      icon: 'Banknote',
      color: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Pradhan Mantri Fasal Bima Yojana',
      nameHi: 'प्रधानमंत्री फसल बीमा योजना',
      category: 'insurance',
      amount: 'Up to ₹2 Lakh',
      state: 'all',
      description: 'Crop insurance scheme for farmers',
      descriptionHi: 'किसानों के लिए फसल बीमा योजना',
      eligibility: 'All farmers growing notified crops',
      deadline: '31 Jan 2025',
      status: 'Active',
      applicants: '5.5 Crore',
      icon: 'Shield',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Kisan Credit Card',
      nameHi: 'किसान क्रेडिट कार्ड',
      category: 'loan',
      amount: 'Up to ₹3 Lakh',
      state: 'all',
      description: 'Easy credit access for farmers',
      descriptionHi: 'किसानों के लिए आसान ऋण सुविधा',
      eligibility: 'All farmers with land records',
      deadline: 'Ongoing',
      status: 'Active',
      applicants: '7 Crore',
      icon: 'CreditCard',
      color: 'bg-orange-500'
    },
    {
      id: 4,
      name: 'Sub-Mission on Agricultural Mechanization',
      nameHi: 'कृषि यंत्रीकरण पर उप-मिशन',
      category: 'equipment',
      amount: '40-50% subsidy',
      state: 'punjab',
      description: 'Subsidy on agricultural machinery',
      descriptionHi: 'कृषि मशीनरी पर सब्सिडी',
      eligibility: 'Individual farmers and FPOs',
      deadline: '15 Mar 2025',
      status: 'Active',
      applicants: '2.8 Lakh',
      icon: 'Wrench',
      color: 'bg-purple-500'
    },
    {
      id: 5,
      name: 'National Mission for Sustainable Agriculture',
      nameHi: 'सतत कृषि के लिए राष्ट्रीय मिशन',
      category: 'training',
      amount: 'Free Training',
      state: 'maharashtra',
      description: 'Training on sustainable farming practices',
      descriptionHi: 'टिकाऊ खेती की प्रथाओं पर प्रशिक्षण',
      eligibility: 'All farmers',
      deadline: '30 Apr 2025',
      status: 'Active',
      applicants: '1.2 Lakh',
      icon: 'GraduationCap',
      color: 'bg-indigo-500'
    },
    {
      id: 6,
      name: 'Soil Health Card Scheme',
      nameHi: 'मृदा स्वास्थ्य कार्ड योजना',
      category: 'subsidy',
      amount: 'Free Testing',
      state: 'all',
      description: 'Free soil testing and health cards',
      descriptionHi: 'मुफ्त मिट्टी परीक्षण और स्वास्थ्य कार्ड',
      eligibility: 'All farmers',
      deadline: 'Ongoing',
      status: 'Active',
      applicants: '22 Crore',
      icon: 'TestTube',
      color: 'bg-teal-500'
    }
  ];

  const filteredSchemes = schemes?.filter(scheme => {
    const stateMatch = selectedState === 'all' || scheme?.state === 'all' || scheme?.state === selectedState;
    const categoryMatch = selectedCategory === 'all' || scheme?.category === selectedCategory;
    return stateMatch && categoryMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Closing Soon': return 'bg-orange-100 text-orange-700';
      case 'Closed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4"
          >
            Government Schemes & Subsidies
          </motion.h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Access over 200+ government schemes and subsidies available for farmers across India
          </p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-brand-md border border-green-200 mb-8"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <Select
              label="Select State"
              options={states}
              value={selectedState}
              onChange={setSelectedState}
              className="mb-0"
            />
            
            <Select
              label="Category"
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              className="mb-0"
            />
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                iconName="Filter"
                iconPosition="left"
                className="flex-1"
              >
                More Filters
              </Button>
            </div>
            
            <Button
              variant="default"
              iconName="Search"
              iconPosition="left"
              className="w-full"
            >
              Search Schemes
            </Button>
          </div>
        </motion.div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredSchemes?.map((scheme, index) => (
            <motion.div
              key={scheme?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-green-200 shadow-brand-md hover:shadow-brand-lg transition-all duration-300 overflow-hidden"
            >
              {/* Scheme Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${scheme?.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={scheme?.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(scheme?.status)}`}>
                      {scheme?.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-heading font-semibold text-text-primary mb-2 line-clamp-2">
                  {scheme?.name}
                </h3>
                
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {scheme?.description}
                </p>

                {/* Key Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Amount:</span>
                    <span className="font-medium text-primary">{scheme?.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Deadline:</span>
                    <span className="font-medium text-text-primary">{scheme?.deadline}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Applicants:</span>
                    <span className="font-medium text-text-primary">{scheme?.applicants}</span>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="bg-surface rounded-lg p-3 mb-4">
                  <p className="text-xs text-text-secondary mb-1">Eligibility:</p>
                  <p className="text-sm text-text-primary">{scheme?.eligibility}</p>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="FileText"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Info"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-8 shadow-brand-lg border border-green-200 mb-8"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">200+</p>
              <p className="text-sm text-text-secondary">Active Schemes</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">₹2.5L Cr</p>
              <p className="text-sm text-text-secondary">Total Allocation</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">15 Cr</p>
              <p className="text-sm text-text-secondary">Beneficiaries</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">28</p>
              <p className="text-sm text-text-secondary">States Covered</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Don't Miss Out on Government Benefits
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Get personalized scheme recommendations based on your location, crop type, and farming practices
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="Search"
                iconPosition="left"
                onClick={() => window.location.href = '/government-schemes'}
              >
                Explore All Schemes
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Bell"
                iconPosition="left"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Get Notifications
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernmentSchemesPreview;