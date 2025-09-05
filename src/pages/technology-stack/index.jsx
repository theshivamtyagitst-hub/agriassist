import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import DataFlowInfographic from './components/DataFlowInfographic';
import DataSourceCredibility from './components/DataSourceCredibility';
import AIModelExplanation from './components/AIModelExplanation';
import PrivacySecuritySection from './components/PrivacySecuritySection';
import APIDocumentation from './components/APIDocumentation';
import PerformanceMetrics from './components/PerformanceMetrics';
import MultilingualAI from './components/MultilingualAI';
import TechnicalArchitecture from './components/TechnicalArchitecture';
import IntegrationCapabilities from './components/IntegrationCapabilities';
import DeveloperTestimonials from './components/DeveloperTestimonials';

const TechnologyStack = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationSections = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'data-sources', label: 'Data Sources', icon: 'Database' },
    { id: 'ai-models', label: 'AI Models', icon: 'Brain' },
    { id: 'architecture', label: 'Architecture', icon: 'Layers' },
    { id: 'multilingual', label: 'Multilingual AI', icon: 'Languages' },
    { id: 'performance', label: 'Performance', icon: 'Activity' },
    { id: 'integrations', label: 'Integrations', icon: 'Link' },
    { id: 'api-docs', label: 'API Docs', icon: 'Code' },
    { id: 'privacy', label: 'Privacy & Security', icon: 'Shield' },
    { id: 'testimonials', label: 'Success Stories', icon: 'MessageSquare' }
  ];

  const trustIndicators = [
    { label: 'Data Sources', value: '15+', icon: 'Database' },
    { label: 'Uptime', value: '99.9%', icon: 'Activity' },
    { label: 'API Calls/Month', value: '2.5M', icon: 'BarChart3' },
    { label: 'Languages Supported', value: '4+', icon: 'Languages' },
    { label: 'Farmers Served', value: '50K+', icon: 'Users' },
    { label: 'Partner Organizations', value: '45', icon: 'Building2' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Cpu" size={32} className="text-primary-foreground" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary">
                  Technology Stack
                </h1>
                <p className="text-lg text-text-secondary">
                  Transparent & Trustworthy Agricultural Intelligence
                </p>
              </div>
            </div>
            
            <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Built on enterprise-grade infrastructure with farmer-first design principles. 
              Our technology combines satellite data, AI models, and government systems to deliver 
              reliable agricultural insights that work even offline.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {trustIndicators?.map((indicator, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center border border-border shadow-brand-sm">
                <Icon name={indicator?.icon} size={20} className="text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-text-primary mb-1">
                  {indicator?.value}
                </div>
                <div className="text-xs text-text-secondary">
                  {indicator?.label}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {navigationSections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => scrollToSection(section?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === section?.id
                    ? 'bg-primary text-primary-foreground shadow-brand-sm'
                    : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary border border-border'
                }`}
              >
                <Icon name={section?.icon} size={16} />
                <span>{section?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Overview Section */}
        <section id="overview" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              From Satellites to Your Smartphone
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Understanding how AgriAssist transforms complex agricultural data into simple, 
              actionable recommendations that help farmers make better decisions.
            </p>
          </div>
          <DataFlowInfographic />
        </section>

        {/* Data Sources Section */}
        <section id="data-sources" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Trusted Data Sources
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our recommendations are powered by verified data from government agencies, 
              research institutions, and satellite systems you can trust.
            </p>
          </div>
          <DataSourceCredibility />
        </section>

        {/* AI Models Section */}
        <section id="ai-models" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              AI That Understands Agriculture
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Machine learning models trained on millions of data points from successful farms 
              across India, designed to enhance traditional farming wisdom.
            </p>
          </div>
          <AIModelExplanation />
        </section>

        {/* Technical Architecture Section */}
        <section id="architecture" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Built for Scale & Reliability
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Enterprise-grade architecture designed to serve millions of farmers with 
              consistent performance and 99.9% uptime guarantee.
            </p>
          </div>
          <TechnicalArchitecture />
        </section>

        {/* Multilingual AI Section */}
        <section id="multilingual" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Technology That Speaks Your Language
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Advanced natural language processing that understands agricultural terminology 
              and regional dialects across multiple Indian languages.
            </p>
          </div>
          <MultilingualAI />
        </section>

        {/* Performance Metrics Section */}
        <section id="performance" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Performance You Can Count On
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Real-time system monitoring and performance metrics that ensure AgriAssist 
              is always available when farmers need it most.
            </p>
          </div>
          <PerformanceMetrics />
        </section>

        {/* Integration Capabilities Section */}
        <section id="integrations" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Connected Agricultural Ecosystem
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Seamless integration with government systems, weather services, market data, 
              and satellite imagery to provide comprehensive agricultural intelligence.
            </p>
          </div>
          <IntegrationCapabilities />
        </section>

        {/* API Documentation Section */}
        <section id="api-docs" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Developer-Friendly APIs
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive APIs and partnership opportunities for developers, NGOs, 
              and organizations building agricultural solutions.
            </p>
          </div>
          <APIDocumentation />
        </section>

        {/* Privacy & Security Section */}
        <section id="privacy" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Your Data, Your Control
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Bank-level security and transparent privacy practices that put farmers in 
              complete control of their agricultural data.
            </p>
          </div>
          <PrivacySecuritySection />
        </section>

        {/* Developer Testimonials Section */}
        <section id="testimonials" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Proven Success Stories
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Real experiences from developers, organizations, and institutions who have 
              successfully integrated AgriAssist into their agricultural solutions.
            </p>
          </div>
          <DeveloperTestimonials />
        </section>

      </main>
      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Icon name="Rocket" size={48} className="text-primary-foreground mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Build with AgriAssist?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of developers and organizations using our technology to transform agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/developer-hub"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-surface transition-colors duration-200"
            >
              <Icon name="Code" size={20} className="mr-2" />
              Explore Developer Hub
            </a>
            <a
              href="/live-demo"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground/20 text-primary-foreground font-medium rounded-lg hover:bg-primary-foreground/30 transition-colors duration-200 border border-primary-foreground/30"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Try Live Demo
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-text-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Leaf" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-lg font-heading font-semibold">AgriAssist</span>
            </div>
            <div className="text-sm text-primary-foreground/80">
              © {new Date()?.getFullYear()} AgriAssist. Technology that speaks the farmer's language.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechnologyStack;