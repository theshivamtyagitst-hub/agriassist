import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import DeveloperPersonas from './components/DeveloperPersonas';
import APIDocumentation from './components/APIDocumentation';
import IntegrationGuides from './components/IntegrationGuides';
import PartnershipOpportunities from './components/PartnershipOpportunities';
import DeveloperCommunity from './components/DeveloperCommunity';
import CaseStudies from './components/CaseStudies';
import PricingSection from './components/PricingSection';

const DeveloperHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <DeveloperPersonas />
        <APIDocumentation />
        <IntegrationGuides />
        <PartnershipOpportunities />
        <DeveloperCommunity />
        <CaseStudies />
        <PricingSection />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-foreground/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-primary-foreground"
                    fill="currentColor"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                    <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z" />
                    <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z" />
                  </svg>
                </div>
                <span className="text-lg font-heading font-semibold">AgriAssist</span>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Empowering developers to build the future of agriculture through intelligent APIs and comprehensive tools.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Developer Resources</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">SDKs & Libraries</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Integration Guides</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Code Examples</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Developer Forums</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">GitHub Repository</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Discord Community</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Technical Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Technical Support</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Partnership Inquiries</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Enterprise Solutions</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date()?.getFullYear()} AgriAssist. All rights reserved. Built with ❤️ for farmers and developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeveloperHub;