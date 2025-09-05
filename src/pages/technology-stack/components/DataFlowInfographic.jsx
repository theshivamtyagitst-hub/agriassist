import React from 'react';
import Icon from '../../../components/AppIcon';

const DataFlowInfographic = () => {
  const dataFlowSteps = [
    {
      id: 1,
      title: "Satellite Data",
      description: "ISRO satellites capture real-time weather, soil moisture, and crop health data",
      icon: "Satellite",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Government Sources",
      description: "Agricultural departments provide market prices, scheme updates, and regional data",
      icon: "Building2",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      title: "AI Processing",
      description: "Machine learning models analyze patterns and generate personalized recommendations",
      icon: "Brain",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      title: "Your Smartphone",
      description: "Receive actionable insights in your language, even when offline",
      icon: "Smartphone",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 lg:p-8 shadow-brand-md border border-border">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-semibold text-text-primary mb-3">
          From Satellites to Your Farm
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          See how data travels from space to your smartphone, ensuring you get the most accurate and timely agricultural insights
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataFlowSteps?.map((step, index) => (
          <div key={step?.id} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full ${step?.bgColor} flex items-center justify-center mb-4`}>
                <Icon name={step?.icon} size={24} className={step?.color} />
              </div>
              
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mb-3">
                {step?.id}
              </div>
              
              <h4 className="font-heading font-semibold text-text-primary mb-2">
                {step?.title}
              </h4>
              
              <p className="text-sm text-text-secondary leading-relaxed">
                {step?.description}
              </p>
            </div>

            {/* Arrow connector */}
            {index < dataFlowSteps?.length - 1 && (
              <div className="hidden lg:block absolute top-8 -right-3 transform translate-x-1/2">
                <Icon name="ArrowRight" size={20} className="text-border" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-surface rounded-lg border border-border">
        <div className="flex items-center space-x-3">
          <Icon name="Shield" size={20} className="text-primary" />
          <div>
            <p className="text-sm font-medium text-text-primary">
              Data Security Promise
            </p>
            <p className="text-xs text-text-secondary">
              Your farm data stays private and is never shared without your explicit consent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFlowInfographic;