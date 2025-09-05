import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "FarmTech Mobile App",
      organization: "GreenFields NGO",
      description: "Integrated AgriAssist APIs to provide crop recommendations to 10,000+ smallholder farmers across rural Maharashtra",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      results: [
        "40% increase in crop yield",
        "25% reduction in input costs",
        "10,000+ farmers reached",
        "95% user satisfaction rate"
      ],
      technologies: ["React Native", "Node.js", "MongoDB"],
      apiUsage: ["Crop Recommendations", "Weather Data", "Market Prices"],
      testimonial: "AgriAssist APIs helped us scale our impact from hundreds to thousands of farmers. The multilingual support was crucial for our rural communities.",
      author: "Dr. Meera Patel",
      authorRole: "Technical Director, GreenFields NGO",
      timeline: "6 months development, 12 months deployment"
    },
    {
      id: 2,
      title: "Smart Irrigation Dashboard",
      organization: "AquaTech Solutions",
      description: "Built an IoT-enabled irrigation management system using AgriAssist weather and soil analysis APIs",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=400&h=250&fit=crop",
      results: [
        "60% water usage reduction",
        "30% improvement in crop health",
        "500+ farms automated",
        "₹2.5L average savings per farm"
      ],
      technologies: ["Vue.js", "Python", "InfluxDB", "MQTT"],
      apiUsage: ["Weather Forecasts", "Soil Analysis", "Crop Monitoring"],
      testimonial: "The real-time weather data integration allowed us to create predictive irrigation schedules that significantly reduced water waste.",
      author: "Rajesh Kumar",
      authorRole: "CTO, AquaTech Solutions",
      timeline: "4 months development, 8 months rollout"
    },
    {
      id: 3,
      title: "Agricultural Research Platform",
      organization: "Indian Institute of Agricultural Sciences",
      description: "Developed a comprehensive research platform for analyzing crop patterns and climate impact using AgriAssist data APIs",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop",
      results: [
        "15 research papers published",
        "3 new crop varieties developed",
        "50+ researchers using platform",
        "5 government policy recommendations"
      ],
      technologies: ["React", "Python", "PostgreSQL", "R"],
      apiUsage: ["Historical Data", "Climate Analysis", "Crop Performance"],
      testimonial: "Access to comprehensive agricultural data through AgriAssist APIs accelerated our research timeline by 18 months.",
      author: "Prof. Sunita Sharma",
      authorRole: "Head of Research, IIAS",
      timeline: "12 months development, ongoing research"
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "API Integration",
      description: "Developers integrated AgriAssist APIs using our comprehensive SDKs and documentation"
    },
    {
      step: 2,
      title: "Customization",
      description: "Tailored the agricultural intelligence to specific use cases and regional requirements"
    },
    {
      step: 3,
      title: "Testing & Validation",
      description: "Conducted field testing with real farmers to validate recommendations and user experience"
    },
    {
      step: 4,
      title: "Deployment & Scale",
      description: "Rolled out solutions to target communities with ongoing support and monitoring"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-responsive-2xl font-heading font-bold text-text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-responsive-base text-text-secondary max-w-2xl mx-auto">
            See how organizations are using AgriAssist APIs to create innovative solutions 
            that make a real impact on farmers' lives.
          </p>
        </div>
        
        <div className="space-y-12">
          {caseStudies?.map((study, index) => (
            <div 
              key={study?.id}
              className={`bg-card rounded-xl border border-border overflow-hidden hover:shadow-brand-lg transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="lg:w-2/5">
                  <div className="h-64 lg:h-full overflow-hidden">
                    <img
                      src={study?.image}
                      alt={study?.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                        {study?.title}
                      </h3>
                      <p className="text-primary font-medium">{study?.organization}</p>
                    </div>
                    <div className="text-right text-sm text-text-secondary">
                      <Icon name="Clock" size={14} className="inline mr-1" />
                      {study?.timeline}
                    </div>
                  </div>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {study?.description}
                  </p>
                  
                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study?.results?.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies & APIs */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-text-primary mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study?.technologies?.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-text-secondary text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-text-primary mb-2">AgriAssist APIs:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study?.apiUsage?.map((api, apiIndex) => (
                          <span 
                            key={apiIndex}
                            className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-xs"
                          >
                            {api}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-surface rounded-lg p-4 mb-6">
                    <blockquote className="text-text-secondary italic mb-3">
                      "{study?.testimonial}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="User" size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text-primary">{study?.author}</div>
                        <div className="text-xs text-text-secondary">{study?.authorRole}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    Read Full Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Implementation Process */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
              Implementation Process
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our proven methodology helps organizations successfully integrate AgriAssist APIs 
              and achieve measurable impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {implementationSteps?.map((step, index) => (
              <div key={step?.step} className="text-center">
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto">
                    {step?.step}
                  </div>
                  {index < implementationSteps?.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-border -translate-y-0.5"></div>
                  )}
                </div>
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-2">
                  {step?.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-xl border border-border p-8">
            <Icon name="Lightbulb" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
              Ready to Build Your Success Story?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Join the growing community of developers and organizations using AgriAssist APIs 
              to create innovative agricultural solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="default"
                size="lg"
                iconName="Rocket"
                iconPosition="left"
              >
                Start Building Today
              </Button>
              <Button 
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;