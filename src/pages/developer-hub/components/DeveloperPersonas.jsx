import React from 'react';
import Icon from '../../../components/AppIcon';

const DeveloperPersonas = () => {
  const personas = [
    {
      id: 1,
      title: "NGO Tech Teams",
      description: "Build farmer-facing applications with our agricultural intelligence APIs",
      icon: "Heart",
      features: [
        "Free tier for non-profit organizations",
        "Multilingual crop recommendations",
        "Offline-capable data sync",
        "Community support forums"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 2,
      title: "Agricultural Researchers",
      description: "Access comprehensive datasets for agricultural research and analysis",
      icon: "Microscope",
      features: [
        "Historical crop and weather data",
        "Research-grade API endpoints",
        "Bulk data export capabilities",
        "Academic collaboration programs"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      title: "Agritech Startups",
      description: "Integrate proven agricultural intelligence into your products",
      icon: "Rocket",
      features: [
        "Scalable pricing models",
        "White-label integration options",
        "Technical partnership programs",
        "Go-to-market support"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-responsive-2xl font-heading font-bold text-text-primary mb-4">
            Built for Every Developer
          </h2>
          <p className="text-responsive-base text-text-secondary max-w-2xl mx-auto">
            Whether you're building for social impact, conducting research, or creating commercial solutions, 
            our APIs are designed to meet your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {personas?.map((persona) => (
            <div 
              key={persona?.id}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-brand-md transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${persona?.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={persona?.icon} size={24} className={persona?.color} />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                {persona?.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {persona?.description}
              </p>
              
              <ul className="space-y-3">
                {persona?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperPersonas;