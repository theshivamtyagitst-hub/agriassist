import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      id: 'free',
      name: 'Free Tier',
      description: 'Perfect for testing and small-scale projects',
      price: { monthly: 0, yearly: 0 },
      features: [
        '1,000 API calls per month',
        'Basic crop recommendations',
        'Weather data access',
        'Community support',
        'Standard documentation',
        'Rate limiting: 10 calls/minute'
      ],
      limitations: [
        'No historical data access',
        'Limited to 3 locations',
        'No priority support'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'border-border'
    },
    {
      id: 'developer',
      name: 'Developer',
      description: 'Ideal for individual developers and small teams',
      price: { monthly: 49, yearly: 490 },
      features: [
        '25,000 API calls per month',
        'All crop recommendation features',
        'Advanced weather forecasts',
        'Market price data',
        'Email support',
        'Rate limiting: 100 calls/minute',
        '6 months historical data',
        'Custom location support'
      ],
      limitations: [
        'Limited to 10 concurrent users',
        'No white-label options'
      ],
      cta: 'Start Developer Plan',
      popular: true,
      color: 'border-primary'
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For growing organizations and commercial applications',
      price: { monthly: 199, yearly: 1990 },
      features: [
        '100,000 API calls per month',
        'All API endpoints',
        'Priority support',
        'Rate limiting: 500 calls/minute',
        '2 years historical data',
        'Custom integrations',
        'White-label options',
        'SLA guarantee (99.9%)',
        'Dedicated account manager'
      ],
      limitations: [
        'Setup fee may apply for custom integrations'
      ],
      cta: 'Choose Business',
      popular: false,
      color: 'border-border'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solutions for large-scale implementations',
      price: { monthly: 'Custom', yearly: 'Custom' },
      features: [
        'Unlimited API calls',
        'Custom rate limits',
        'Full historical data access',
        '24/7 priority support',
        'Custom development',
        'On-premise deployment options',
        'Advanced analytics',
        'Multi-region support',
        'Dedicated infrastructure'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-border'
    }
  ];

  const nonprofitBenefits = [
    'Free Developer plan for registered NGOs',
    'Additional API call allowances',
    'Priority support for social impact projects',
    'Access to research collaboration programs',
    'Custom integration assistance'
  ];

  const usagePricing = [
    { range: '0 - 1,000', price: 'Free', description: 'Perfect for testing' },
    { range: '1,001 - 10,000', price: '₹0.05', description: 'Per additional call' },
    { range: '10,001 - 50,000', price: '₹0.04', description: 'Volume discount' },
    { range: '50,001 - 100,000', price: '₹0.03', description: 'Better rates' },
    { range: '100,000+', price: 'Custom', description: 'Enterprise pricing' }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-responsive-2xl font-heading font-bold text-text-primary mb-4">
            Transparent Pricing
          </h2>
          <p className="text-responsive-base text-text-secondary max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include access to our core APIs 
            with transparent, usage-based pricing.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                billingCycle === 'monthly' ?'bg-background text-text-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                billingCycle === 'yearly' ?'bg-background text-text-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              Yearly
              <span className="ml-1 text-xs bg-primary text-primary-foreground px-1 rounded">
                Save 17%
              </span>
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans?.map((plan) => (
            <div 
              key={plan?.id}
              className={`bg-card rounded-xl border-2 ${plan?.color} p-6 relative hover:shadow-brand-md transition-all duration-300 ${
                plan?.popular ? 'scale-105 shadow-brand-lg' : ''
              }`}
            >
              {plan?.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                  {plan?.name}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {plan?.description}
                </p>
                <div className="mb-4">
                  {typeof plan?.price?.[billingCycle] === 'number' ? (
                    <>
                      <span className="text-3xl font-heading font-bold text-text-primary">
                        ₹{plan?.price?.[billingCycle]}
                      </span>
                      <span className="text-text-secondary">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-heading font-bold text-text-primary">
                      {plan?.price?.[billingCycle]}
                    </span>
                  )}
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {plan?.limitations?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-text-primary mb-2">Limitations:</h4>
                  <ul className="space-y-1">
                    {plan?.limitations?.map((limitation, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Minus" size={14} className="text-text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-text-secondary">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Button 
                variant={plan?.popular ? "default" : "outline"}
                fullWidth
                className="touch-target"
              >
                {plan?.cta}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Usage-Based Pricing */}
        <div className="bg-card rounded-xl border border-border p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
              Usage-Based Pricing
            </h3>
            <p className="text-text-secondary">
              Pay only for what you use with our transparent, tiered pricing structure.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-text-primary">
                    API Calls per Month
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-text-primary">
                    Price per Call
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-text-primary">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {usagePricing?.map((tier, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="py-3 px-4 text-sm text-text-primary font-medium">
                      {tier?.range}
                    </td>
                    <td className="py-3 px-4 text-sm text-text-primary">
                      {tier?.price}
                    </td>
                    <td className="py-3 px-4 text-sm text-text-secondary">
                      {tier?.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Non-Profit Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-border p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
              <Icon name="Heart" size={24} className="text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                Special Pricing for Non-Profits
              </h3>
              <p className="text-text-secondary mb-4">
                We believe in supporting organizations working for social impact. 
                Registered NGOs and non-profit organizations get special benefits.
              </p>
              <ul className="space-y-2 mb-6">
                {nonprofitBenefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline"
                iconName="ExternalLink"
                iconPosition="right"
              >
                Apply for Non-Profit Pricing
              </Button>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="text-center">
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-card rounded-lg border border-border p-6">
              <h4 className="font-medium text-text-primary mb-2">
                What happens if I exceed my plan limits?
              </h4>
              <p className="text-sm text-text-secondary">
                You'll be charged for additional usage at the standard overage rates. 
                We'll notify you before you reach your limits.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h4 className="font-medium text-text-primary mb-2">
                Can I change plans anytime?
              </h4>
              <p className="text-sm text-text-secondary">
                Yes, you can upgrade or downgrade your plan at any time. 
                Changes take effect at the next billing cycle.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h4 className="font-medium text-text-primary mb-2">
                Do you offer custom enterprise solutions?
              </h4>
              <p className="text-sm text-text-secondary">
                Yes, we provide custom solutions for large-scale implementations 
                including on-premise deployment and dedicated infrastructure.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h4 className="font-medium text-text-primary mb-2">
                What's included in the SLA guarantee?
              </h4>
              <p className="text-sm text-text-secondary">
                Business and Enterprise plans include 99.9% uptime guarantee 
                with service credits for any downtime beyond our SLA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;