import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PartnershipOpportunities = () => {
  const partnerships = [
    {
      id: 1,
      title: "Agricultural Organizations",
      description: "Partner with farmer cooperatives, agricultural universities, and research institutions",
      icon: "Users",
      benefits: [
        "Access to farmer communities",
        "Field testing opportunities",
        "Research collaboration",
        "Grant funding support"
      ],
      examples: [
        "ICRISAT Partnership",
        "State Agricultural Universities",
        "Farmer Producer Organizations",
        "Agricultural Extension Services"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 2,
      title: "Government Initiatives",
      description: "Collaborate with government programs to scale agricultural technology adoption",
      icon: "Building",
      benefits: [
        "Policy alignment support",
        "Nationwide deployment",
        "Subsidy program integration",
        "Digital India initiatives"
      ],
      examples: [
        "PM-KISAN Integration",
        "Digital Agriculture Mission",
        "State Government Apps",
        "Krishi Vigyan Kendras"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      title: "Technology Partners",
      description: "Integrate with existing agricultural technology platforms and service providers",
      icon: "Zap",
      benefits: [
        "Technical expertise sharing",
        "Joint product development",
        "Market expansion",
        "Innovation acceleration"
      ],
      examples: [
        "IoT Device Manufacturers",
        "Satellite Data Providers",
        "Agricultural Equipment Companies",
        "Fintech Partners"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const collaborationModels = [
    {
      title: "API Partnership",
      description: "Integrate AgriAssist APIs into your existing platform",
      features: ["Revenue sharing model", "Co-branded solutions", "Technical support", "Marketing collaboration"]
    },
    {
      title: "Data Partnership",
      description: "Share agricultural data to improve recommendations for all farmers",
      features: ["Data exchange agreements", "Privacy-first approach", "Mutual benefit sharing", "Research collaboration"]
    },
    {
      title: "Distribution Partnership",
      description: "Help us reach more farmers through your channels",
      features: ["Channel partner program", "Training and certification", "Marketing support", "Performance incentives"]
    },
    {
      title: "Research Partnership",
      description: "Collaborate on agricultural research and innovation projects",
      features: ["Joint research projects", "Publication opportunities", "Grant applications", "Academic collaboration"]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-responsive-2xl font-heading font-bold text-text-primary mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-responsive-base text-text-secondary max-w-2xl mx-auto">
            Join our ecosystem of partners working together to transform agriculture 
            through technology and innovation.
          </p>
        </div>
        
        {/* Partnership Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnerships?.map((partnership) => (
            <div 
              key={partnership?.id}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-brand-md transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${partnership?.bgColor} mb-4`}>
                <Icon name={partnership?.icon} size={24} className={partnership?.color} />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                {partnership?.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {partnership?.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {partnership?.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-3">Examples:</h4>
                <div className="space-y-1">
                  {partnership?.examples?.map((example, index) => (
                    <div key={index} className="text-sm text-text-secondary">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Collaboration Models */}
        <div className="bg-card rounded-xl border border-border p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
              Collaboration Models
            </h3>
            <p className="text-text-secondary">
              Choose the partnership model that best fits your organization's goals and capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {collaborationModels?.map((model, index) => (
              <div 
                key={index}
                className="border border-border rounded-lg p-6 hover:bg-surface transition-colors duration-200"
              >
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-2">
                  {model?.title}
                </h4>
                <p className="text-text-secondary mb-4">
                  {model?.description}
                </p>
                <ul className="space-y-2">
                  {model?.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Icon name="ArrowRight" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partnership CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-border">
            <Icon name="Handshake" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
              Ready to Partner with Us?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Let's discuss how we can work together to create innovative solutions 
              that benefit farmers and advance agricultural technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="default"
                size="lg"
                iconName="Send"
                iconPosition="left"
              >
                Submit Partnership Proposal
              </Button>
              <Button 
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Partnership Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipOpportunities;