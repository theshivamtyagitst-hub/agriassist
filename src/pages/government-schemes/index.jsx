import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SchemeCard from './components/SchemeCard';
import FilterPanel from './components/FilterPanel';
import SuccessStoryCard from './components/SuccessStoryCard';
import ApplicationModal from './components/ApplicationModal';
import NotificationCenter from './components/NotificationCenter';

const GovernmentSchemes = () => {
  const [filters, setFilters] = useState({
    search: '',
    cropType: 'all',
    state: 'all',
    category: 'all',
    eligibility: 'all',
    status: 'all'
  });

  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [isVoiceSearching, setIsVoiceSearching] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('schemes');

  // Mock user profile for notifications
  const userProfile = {
    state: 'maharashtra',
    cropTypes: ['rice', 'cotton'],
    farmSize: '3.5',
    category: 'general'
  };

  // Mock schemes data
  const allSchemes = [
    {
      id: 1,
      name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
      department: "Ministry of Agriculture & Farmers Welfare",
      category: "subsidy",
      status: "active",
      subsidyAmount: "₹6,000/year",
      deadline: "31st March 2025",
      description: `Direct income support scheme providing ₹6,000 per year to small and marginal farmers.\nThe amount is transferred directly to farmers' bank accounts in three equal installments of ₹2,000 each.\nThis scheme aims to supplement financial needs of farmers for agriculture and allied activities.`,
      eligibility: [
        "Small and marginal farmers with landholding up to 2 hectares",
        "Valid Aadhar card linked to bank account",
        "Land ownership documents required",
        "Exclusions apply for government employees and pensioners"
      ],
      documents: [
        "Aadhar Card",
        "Bank Account Details",
        "Land Ownership Documents",
        "Mobile Number for registration"
      ],
      applicationSteps: [
        "Visit PM-KISAN portal or nearest CSC center",
        "Fill registration form with Aadhar and bank details",
        "Upload required land documents",
        "Submit application and note reference number",
        "Track status online using reference number"
      ],
      states: ["all"],
      cropTypes: ["all"],
      processingTime: "15-30 days"
    },
    {
      id: 2,
      name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      department: "Ministry of Agriculture & Farmers Welfare",
      category: "insurance",
      status: "active",
      subsidyAmount: "Up to ₹2,00,000",
      deadline: "15th December 2024",
      description: `Comprehensive crop insurance scheme protecting farmers against crop losses.\nCovers pre-sowing to post-harvest losses due to natural calamities.\nLow premium rates with high coverage for all food crops, oilseeds, and annual commercial crops.`,
      eligibility: [
        "All farmers including sharecroppers and tenant farmers",
        "Applicable for notified crops in notified areas",
        "Premium payment within due date",
        "Valid land records or crop sharing agreement"
      ],
      documents: [
        "Aadhar Card",
        "Bank Account Passbook",
        "Land Records (Khata/Khatauni)",
        "Crop Sharing Agreement (for tenant farmers)",
        "Sowing Certificate"
      ],
      applicationSteps: [
        "Visit nearest bank or insurance company office",
        "Fill crop insurance application form",
        "Submit required documents and pay premium",
        "Receive policy document and keep safe",
        "Report crop loss within 72 hours if occurs"
      ],
      states: ["maharashtra", "punjab", "haryana", "uttar-pradesh"],
      cropTypes: ["rice", "wheat", "cotton", "sugarcane"],
      processingTime: "7-15 days"
    },
    {
      id: 3,
      name: "Soil Health Card Scheme",
      department: "Department of Agriculture & Cooperation",
      category: "subsidy",
      status: "active",
      subsidyAmount: "Free soil testing",
      deadline: "Ongoing",
      description: `Free soil testing service providing detailed soil health cards to farmers.\nRecommends appropriate nutrients and fertilizers based on soil analysis.\nHelps optimize fertilizer use and improve crop productivity sustainably.`,
      eligibility: [
        "All farmers with agricultural land",
        "Land ownership or cultivation rights required",
        "One soil health card per 2.5 acres",
        "Valid every 3 years"
      ],
      documents: [
        "Aadhar Card",
        "Land Ownership Documents",
        "Bank Account Details",
        "Mobile Number"
      ],
      applicationSteps: [
        "Contact local agriculture extension officer",
        "Fill soil sample collection form",
        "Provide land details and farmer information",
        "Soil sample collection by officials",
        "Receive soil health card within 30 days"
      ],
      states: ["all"],
      cropTypes: ["all"],
      processingTime: "30-45 days"
    },
    {
      id: 4,
      name: "Krishi Yantra Subsidy Scheme",
      department: "State Agriculture Department",
      category: "equipment",
      status: "closing-soon",
      subsidyAmount: "50-80% subsidy",
      deadline: "20th December 2024",
      description: `Subsidized agricultural equipment and machinery for farmers.\nCovers tractors, harvesters, seed drills, and other modern farming equipment.\nAims to mechanize agriculture and reduce farming costs.`,
      eligibility: [
        "Small and marginal farmers get priority",
        "Maximum landholding limit varies by state",
        "One-time benefit per farmer",
        "No previous subsidy on same equipment"
      ],
      documents: [
        "Aadhar Card",
        "Land Records",
        "Bank Account Passbook",
        "Income Certificate",
        "Category Certificate (if applicable)"
      ],
      applicationSteps: [
        "Apply online through state agriculture portal",
        "Select desired equipment from approved list",
        "Upload required documents",
        "Wait for approval and subsidy allocation",
        "Purchase equipment from authorized dealer"
      ],
      states: ["maharashtra", "punjab", "haryana"],
      cropTypes: ["rice", "wheat", "cotton"],
      processingTime: "45-60 days"
    },
    {
      id: 5,
      name: "Organic Farming Promotion Scheme",
      department: "Ministry of Agriculture & Farmers Welfare",
      category: "training",
      status: "active",
      subsidyAmount: "₹25,000/hectare",
      deadline: "28th February 2025",
      description: `Financial assistance for organic farming adoption and certification.\nSupports conversion from conventional to organic farming methods.\nIncludes training, certification costs, and input subsidies.`,
      eligibility: [
        "Farmers willing to adopt organic farming",
        "Minimum 1 hectare land for group certification",
        "3-year commitment to organic practices",
        "Participation in training programs mandatory"
      ],
      documents: [
        "Aadhar Card",
        "Land Ownership Documents",
        "Bank Account Details",
        "Group Formation Certificate",
        "Training Completion Certificate"
      ],
      applicationSteps: [
        "Form farmer group with minimum 10 members",
        "Attend organic farming training program",
        "Submit group application with land details",
        "Begin organic farming practices",
        "Apply for organic certification after 3 years"
      ],
      states: ["all"],
      cropTypes: ["vegetables", "fruits", "pulses"],
      processingTime: "30-45 days"
    },
    {
      id: 6,
      name: "Drip Irrigation Subsidy",
      department: "Department of Agriculture & Cooperation",
      category: "subsidy",
      status: "active",
      subsidyAmount: "55-90% subsidy",
      deadline: "31st January 2025",
      description: `Subsidy for micro-irrigation systems including drip and sprinkler irrigation.\nPromotes water conservation and efficient water use in agriculture.\nReduces water consumption by 30-50% compared to conventional irrigation.`,
      eligibility: [
        "All categories of farmers eligible",
        "Higher subsidy for SC/ST and small farmers",
        "Minimum 0.5 hectare area required",
        "Assured water source necessary"
      ],
      documents: [
        "Aadhar Card",
        "Land Records",
        "Bank Account Passbook",
        "Water Source Certificate",
        "Category Certificate (if applicable)"
      ],
      applicationSteps: [
        "Apply through Horticulture Department",
        "Site inspection by technical officer",
        "Approval and subsidy sanction",
        "Installation by approved vendor",
        "Final inspection and subsidy release"
      ],
      states: ["maharashtra", "gujarat", "rajasthan", "karnataka"],
      cropTypes: ["vegetables", "fruits", "cotton", "sugarcane"],
      processingTime: "60-90 days"
    }
  ];

  // Mock success stories
  const successStories = [
    {
      id: 1,
      farmerName: "Ramesh Kumar",
      location: "Pune, Maharashtra",
      farmSize: "2.5 acres",
      cropType: "Cotton",
      schemeName: "PMFBY",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg",
      testimonial: "The crop insurance saved my family when cyclone destroyed my cotton crop. I received full compensation within 45 days.",
      benefitAmount: "1,85,000",
      beforeYield: "8 quintals/acre",
      afterYield: "12 quintals/acre",
      beforeIncome: "45,000",
      afterIncome: "78,000",
      yieldIncrease: 50,
      incomeIncrease: 73,
      timeToReceive: "45 days",
      applicationDate: "15th June 2024",
      keyLearnings: [
        "Crop insurance is essential for risk management",
        "Early application ensures smooth processing",
        "Keep all documents ready for quick claims"
      ]
    },
    {
      id: 2,
      farmerName: "Sunita Devi",
      location: "Ludhiana, Punjab",
      farmSize: "1.8 acres",
      cropType: "Rice & Wheat",
      schemeName: "PM-KISAN",
      image: "https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg",
      testimonial: "Regular ₹6,000 installments help me buy quality seeds and fertilizers. My crop quality has improved significantly.",
      benefitAmount: "6,000",
      beforeYield: "15 quintals/acre",
      afterYield: "18 quintals/acre",
      beforeIncome: "35,000",
      afterIncome: "52,000",
      yieldIncrease: 20,
      incomeIncrease: 49,
      timeToReceive: "15 days",
      applicationDate: "10th March 2024",
      keyLearnings: [
        "Direct benefit transfer is very convenient",
        "Regular income support helps in planning",
        "Quality inputs lead to better yields"
      ]
    },
    {
      id: 3,
      farmerName: "Arjun Patel",
      location: "Ahmedabad, Gujarat",
      farmSize: "3.2 acres",
      cropType: "Vegetables",
      schemeName: "Drip Irrigation",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg",
      testimonial: "Drip irrigation reduced my water usage by 40% and increased vegetable yield. The subsidy made it affordable.",
      benefitAmount: "75,000",
      beforeYield: "25 quintals/acre",
      afterYield: "35 quintals/acre",
      beforeIncome: "85,000",
      afterIncome: "1,25,000",
      yieldIncrease: 40,
      incomeIncrease: 47,
      timeToReceive: "75 days",
      applicationDate: "5th January 2024",
      keyLearnings: [
        "Water conservation is crucial for sustainability",
        "Modern irrigation improves crop quality",
        "Government subsidies make technology accessible"
      ]
    }
  ];

  // Filter schemes based on current filters
  useEffect(() => {
    let filtered = allSchemes;

    // Search filter
    if (filters?.search) {
      filtered = filtered?.filter(scheme =>
        scheme?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
        scheme?.description?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
        scheme?.department?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }

    // Crop type filter
    if (filters?.cropType !== 'all') {
      filtered = filtered?.filter(scheme =>
        scheme?.cropTypes?.includes('all') || scheme?.cropTypes?.includes(filters?.cropType)
      );
    }

    // State filter
    if (filters?.state !== 'all') {
      filtered = filtered?.filter(scheme =>
        scheme?.states?.includes('all') || scheme?.states?.includes(filters?.state)
      );
    }

    // Category filter
    if (filters?.category !== 'all') {
      filtered = filtered?.filter(scheme => scheme?.category === filters?.category);
    }

    // Status filter
    if (filters?.status !== 'all') {
      filtered = filtered?.filter(scheme => scheme?.status === filters?.status);
    }

    setFilteredSchemes(filtered);
  }, [filters]);

  // Load language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('agriassist-language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      cropType: 'all',
      state: 'all',
      category: 'all',
      eligibility: 'all',
      status: 'all'
    });
  };

  const handleApplyScheme = (scheme) => {
    setSelectedScheme(scheme);
    setIsApplicationModalOpen(true);
  };

  const handleViewSchemeDetails = (scheme) => {
    // In a real app, this would navigate to a detailed scheme page
    console.log('Viewing details for:', scheme?.name);
  };

  const handleApplicationSubmit = (formData) => {
    // In a real app, this would submit to backend
    console.log('Application submitted:', formData);
    alert('Application submitted successfully! You will receive a confirmation SMS shortly.');
  };

  const handleNotificationClick = (notification) => {
    // Handle notification click - could navigate to specific scheme
    console.log('Notification clicked:', notification);
  };

  const handleVoiceSearch = (isSearching) => {
    setIsVoiceSearching(isSearching);
  };

  const tabs = [
    { id: 'schemes', label: 'Browse Schemes', icon: 'FileText' },
    { id: 'success-stories', label: 'Success Stories', icon: 'Star' },
    { id: 'notifications', label: 'Notifications', icon: 'Bell' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-surface to-accent/5 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
                Government Schemes for Farmers
              </h1>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-6">
                Discover and apply for agricultural subsidies, loans, insurance, and training programs. 
                Get step-by-step guidance in your preferred language with voice assistance.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">{allSchemes?.length}</div>
                  <div className="text-sm text-text-secondary">Active Schemes</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent">₹50L+</div>
                  <div className="text-sm text-text-secondary">Benefits Distributed</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-success">2.5L+</div>
                  <div className="text-sm text-text-secondary">Farmers Benefited</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">28</div>
                  <div className="text-sm text-text-secondary">States Covered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-1 bg-surface p-1 rounded-lg border border-border">
                {tabs?.map((tab) => (
                  <Button
                    key={tab?.id}
                    variant={activeTab === tab?.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab(tab?.id)}
                    iconName={tab?.icon}
                    iconPosition="left"
                    className="whitespace-nowrap"
                  >
                    {tab?.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'schemes' && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filter Panel */}
                <div className="lg:col-span-1">
                  <FilterPanel
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                    isVoiceSearching={isVoiceSearching}
                    onVoiceSearch={handleVoiceSearch}
                  />
                </div>

                {/* Schemes List */}
                <div className="lg:col-span-3">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-heading font-semibold text-text-primary">
                        Available Schemes
                      </h2>
                      <p className="text-sm text-text-secondary">
                        {filteredSchemes?.length} scheme{filteredSchemes?.length !== 1 ? 's' : ''} found
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Download"
                        iconPosition="left"
                      >
                        Download List
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="Filter"
                        className="lg:hidden"
                      />
                    </div>
                  </div>

                  {filteredSchemes?.length > 0 ? (
                    <div className="space-y-6">
                      {filteredSchemes?.map((scheme) => (
                        <SchemeCard
                          key={scheme?.id}
                          scheme={scheme}
                          onApply={handleApplyScheme}
                          onViewDetails={handleViewSchemeDetails}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-text-primary mb-2">
                        No schemes found
                      </h3>
                      <p className="text-text-secondary mb-4">
                        Try adjusting your filters or search terms
                      </p>
                      <Button
                        variant="outline"
                        onClick={handleClearFilters}
                        iconName="RefreshCw"
                        iconPosition="left"
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'success-stories' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                    Farmer Success Stories
                  </h2>
                  <p className="text-text-secondary max-w-2xl mx-auto">
                    Real stories from farmers who have successfully benefited from government schemes. 
                    Learn from their experiences and get inspired.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {successStories?.map((story) => (
                    <SuccessStoryCard key={story?.id} story={story} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="max-w-4xl mx-auto">
                <NotificationCenter
                  userProfile={userProfile}
                  onNotificationClick={handleNotificationClick}
                />
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Need Help with Applications?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Our support team is here to guide you through the application process. 
              Get assistance in your preferred language.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Call Support: 1800-123-4567
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Chat with Expert
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Application Modal */}
      <ApplicationModal
        scheme={selectedScheme}
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        onSubmit={handleApplicationSubmit}
      />
      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-text-secondary">
            <p>
              © {new Date()?.getFullYear()} AgriAssist. All rights reserved. 
              Data sourced from Ministry of Agriculture & Farmers Welfare, Government of India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GovernmentSchemes;