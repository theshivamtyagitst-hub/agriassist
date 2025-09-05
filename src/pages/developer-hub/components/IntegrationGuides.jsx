import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntegrationGuides = () => {
  const integrationGuides = [
    {
      id: 1,
      title: "Mobile App Integration",
      description: "Step-by-step guide to integrate AgriAssist APIs into Android and iOS applications",
      icon: "Smartphone",
      difficulty: "Intermediate",
      duration: "30 minutes",
      steps: [
        "Set up API authentication",
        "Configure offline data sync",
        "Implement crop recommendation UI",
        "Add voice interface support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      id: 2,
      title: "Web Dashboard Integration",
      description: "Build comprehensive agricultural dashboards with real-time data visualization",
      icon: "Monitor",
      difficulty: "Beginner",
      duration: "45 minutes",
      steps: [
        "Initialize API client",
        "Create data visualization components",
        "Implement real-time updates",
        "Add export functionality"
      ],
      technologies: ["React", "Vue.js", "Angular", "Chart.js"]
    },
    {
      id: 3,
      title: "IoT Device Integration",
      description: "Connect agricultural sensors and IoT devices with AgriAssist intelligence",
      icon: "Cpu",
      difficulty: "Advanced",
      duration: "60 minutes",
      steps: [
        "Configure device authentication",
        "Set up data streaming",
        "Implement edge processing",
        "Create alert systems"
      ],
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN"]
    },
    {
      id: 4,
      title: "Voice Interface Setup",
      description: "Add multilingual voice capabilities to your agricultural applications",
      icon: "Mic",
      difficulty: "Intermediate",
      duration: "40 minutes",
      steps: [
        "Configure speech recognition",
        "Set up language models",
        "Implement voice commands",
        "Add text-to-speech output"
      ],
      technologies: ["Web Speech API", "Google Speech", "Azure Cognitive", "Amazon Polly"]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-responsive-2xl font-heading font-bold text-text-primary mb-4">
            Integration Guides
          </h2>
          <p className="text-responsive-base text-text-secondary max-w-2xl mx-auto">
            Detailed step-by-step guides to help you integrate AgriAssist APIs 
            into your applications quickly and efficiently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {integrationGuides?.map((guide) => (
            <div 
              key={guide?.id}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-brand-md transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={guide?.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-text-primary">
                      {guide?.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide?.difficulty)}`}>
                        {guide?.difficulty}
                      </span>
                      <span className="text-xs text-text-secondary flex items-center">
                        <Icon name="Clock" size={12} className="mr-1" />
                        {guide?.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {guide?.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-3">Integration Steps:</h4>
                <ol className="space-y-2">
                  {guide?.steps?.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-sm text-text-secondary">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {guide?.technologies?.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-text-secondary text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button 
                  variant="default" 
                  size="sm"
                  iconName="BookOpen"
                  iconPosition="left"
                  fullWidth
                >
                  Start Guide
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  iconName="Download"
                  className="flex-shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-card rounded-xl border border-border p-8">
            <Icon name="HelpCircle" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
              Need Custom Integration Help?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Our technical team is available to help with custom integrations, 
              enterprise implementations, and specialized use cases.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="default"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Contact Technical Support
              </Button>
              <Button 
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationGuides;