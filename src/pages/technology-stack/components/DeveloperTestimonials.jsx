import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DeveloperTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Senior Developer",
      organization: "Digital Green NGO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `AgriAssist's API has been a game-changer for our farmer outreach programs. The multilingual support and offline capabilities make it perfect for rural deployments. We've integrated it into our mobile app and seen a 40% increase in farmer engagement.`,
      rating: 5,
      project: "FarmConnect Mobile App",
      integration: "Voice API, Crop Recommendations",
      timeline: "3 weeks implementation",
      results: "40% increase in farmer engagement"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Tech Lead",
      organization: "Karnataka State Agriculture Dept",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `The government integration capabilities are outstanding. We were able to connect our existing farmer database with AgriAssist's recommendation engine in just two weeks. The real-time sync with our scheme database has reduced administrative overhead by 60%.`,
      rating: 5,
      project: "State Agricultural Portal",
      integration: "Government APIs, Farmer Database",
      timeline: "2 weeks implementation",
      results: "60% reduction in admin overhead"
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      role: "Research Scientist",
      organization: "ICRISAT",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `As a research institution, we needed access to high-quality agricultural data for our climate adaptation studies. AgriAssist's anonymized dataset API has provided us with insights from over 50,000 farmers across India. The data quality and documentation are exceptional.`,
      rating: 5,
      project: "Climate Adaptation Research",
      integration: "Research Data API, Analytics Dashboard",
      timeline: "1 week setup",
      results: "50K+ farmer data points analyzed"
    },
    {
      id: 4,
      name: "Suresh Reddy",
      role: "CTO",
      organization: "AgroTech Solutions",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      content: `We've built our entire precision agriculture platform on top of AgriAssist's APIs. The weather integration, satellite data access, and market price feeds have saved us months of development time. The technical support team is incredibly responsive.`,
      rating: 5,
      project: "Precision Agriculture Platform",
      integration: "Full API Suite, Custom Endpoints",
      timeline: "6 weeks full integration",
      results: "8 months development time saved"
    },
    {
      id: 5,
      name: "Meera Singh",
      role: "Product Manager",
      organization: "FarmTech Innovations",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `The offline-first architecture was exactly what we needed for our rural market solution. Farmers can access crop recommendations and market prices even in areas with poor connectivity. The sync mechanism works flawlessly when they come back online.`,
      rating: 5,
      project: "Rural Market Platform",
      integration: "Offline APIs, Market Data",
      timeline: "4 weeks implementation",
      results: "Works in 95% of rural areas"
    },
    {
      id: 6,
      name: "Vikram Joshi",
      role: "Lead Developer",
      organization: "Cooperative Bank of Maharashtra",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      content: `Integrating AgriAssist's yield prediction models into our agricultural loan assessment system has revolutionized our lending process. We can now make data-driven decisions about crop loans, reducing default rates by 25% while helping more farmers access credit.`,
      rating: 5,
      project: "Agricultural Loan Assessment",
      integration: "Yield Prediction API, Risk Assessment",
      timeline: "5 weeks implementation",
      results: "25% reduction in loan defaults"
    }
  ];

  const caseStudies = [
    {
      title: "Digital Green NGO Integration",
      description: "How a leading agricultural NGO integrated AgriAssist to reach 10,000+ farmers",
      challenge: "Reaching smallholder farmers with personalized agricultural advice in local languages",
      solution: "Integrated AgriAssist\'s multilingual voice API into their existing mobile platform",
      results: [
        "40% increase in farmer engagement",
        "Support for 5 local languages",
        "Offline functionality in remote areas",
        "Reduced training time for field workers"
      ],
      technologies: ["Voice API", "Multilingual NLP", "Offline Sync", "Mobile SDK"],
      timeline: "3 weeks",
      icon: "Users"
    },
    {
      title: "State Government Portal",
      description: "Karnataka Agriculture Department\'s digital transformation success story",
      challenge: "Modernizing farmer services and reducing administrative burden",
      solution: "Connected existing systems with AgriAssist\'s government integration APIs",
      results: [
        "60% reduction in administrative overhead",
        "Real-time scheme updates to farmers",
        "Automated benefit distribution",
        "Improved farmer satisfaction scores"
      ],
      technologies: ["Government APIs", "Database Integration", "Real-time Sync", "Dashboard"],
      timeline: "2 weeks",
      icon: "Building2"
    },
    {
      title: "Research Institution Partnership",
      description: "ICRISAT\'s climate research powered by AgriAssist data",
      challenge: "Access to large-scale, high-quality agricultural data for climate studies",
      solution: "Utilized AgriAssist\'s research data API for anonymized farmer insights",
      results: [
        "50,000+ farmer data points analyzed",
        "3 published research papers",
        "Climate adaptation model development",
        "Policy recommendations for government"
      ],
      technologies: ["Research Data API", "Analytics Tools", "Data Visualization", "Export Features"],
      timeline: "1 week",
      icon: "GraduationCap"
    }
  ];

  const integrationStats = [
    { label: "Active Integrations", value: "150+", icon: "Link" },
    { label: "API Calls/Month", value: "2.5M", icon: "BarChart3" },
    { label: "Partner Organizations", value: "45", icon: "Building2" },
    { label: "Developer Satisfaction", value: "4.8/5", icon: "Star" }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <div className="space-y-8">
      {/* Integration Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {integrationStats?.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-4 text-center border border-border shadow-brand-sm">
            <Icon name={stat?.icon} size={24} className="text-primary mx-auto mb-2" />
            <div className="text-2xl font-heading font-bold text-text-primary mb-1">
              {stat?.value}
            </div>
            <div className="text-sm text-text-secondary">
              {stat?.label}
            </div>
          </div>
        ))}
      </div>
      {/* Featured Testimonial */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="MessageSquare" size={24} className="text-primary" />
              <div>
                <h2 className="text-2xl font-heading font-semibold text-text-primary">
                  Developer Success Stories
                </h2>
                <p className="text-text-secondary">
                  Real experiences from our integration partners
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center hover:bg-surface transition-colors duration-200"
              >
                <Icon name="ChevronLeft" size={16} className="text-text-secondary" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center hover:bg-surface transition-colors duration-200"
              >
                <Icon name="ChevronRight" size={16} className="text-text-secondary" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {testimonials?.map((testimonial, index) => (
            activeTestimonial === index && (
              <div key={testimonial?.id} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                    <Image 
                      src={testimonial?.avatar} 
                      alt={`${testimonial?.name} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-heading font-semibold text-text-primary">
                        {testimonial?.name}
                      </h3>
                      <div className="flex space-x-1">
                        {[...Array(testimonial?.rating)]?.map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary mb-1">
                      {testimonial?.role} at {testimonial?.organization}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      "{testimonial?.content}"
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border">
                  <div>
                    <h4 className="text-sm font-medium text-text-primary mb-1">Project</h4>
                    <p className="text-sm text-text-secondary">{testimonial?.project}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-primary mb-1">Integration</h4>
                    <p className="text-sm text-text-secondary">{testimonial?.integration}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-primary mb-1">Timeline</h4>
                    <p className="text-sm text-text-secondary">{testimonial?.timeline}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-primary mb-1">Results</h4>
                    <p className="text-sm text-primary font-medium">{testimonial?.results}</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 p-4 border-t border-border">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                activeTestimonial === index ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Case Studies */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="FileText" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Integration Case Studies
            </h2>
            <p className="text-text-secondary">
              Detailed success stories from our implementation partners
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {caseStudies?.map((study, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={study?.icon} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                    {study?.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {study?.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-text-primary mb-2">Challenge</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {study?.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary mb-2">Solution</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {study?.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary mb-2">Timeline</h4>
                      <p className="text-sm font-medium text-primary">
                        {study?.timeline}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-medium text-text-primary mb-3">Key Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {study?.results?.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={14} className="text-green-600" />
                          <span className="text-sm text-text-secondary">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-medium text-text-primary mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study?.technologies?.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Developer Community */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
        <div className="text-center">
          <Icon name="Code" size={32} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
            Join Our Developer Community
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Connect with other developers building agricultural solutions. Share experiences, get help, and collaborate on projects that impact millions of farmers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-border">
              <Icon name="Users" size={16} className="text-primary" />
              <span className="text-sm text-text-primary">500+ Active Developers</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-border">
              <Icon name="MessageCircle" size={16} className="text-green-600" />
              <span className="text-sm text-text-primary">24/7 Community Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-border">
              <Icon name="BookOpen" size={16} className="text-blue-600" />
              <span className="text-sm text-text-primary">Comprehensive Docs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTestimonials;