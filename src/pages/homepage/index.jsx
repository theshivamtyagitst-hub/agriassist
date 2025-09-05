import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import InteractiveMap from './components/InteractiveMap';
import FeaturesSection from './components/FeaturesSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import GovernmentSchemesPreview from './components/GovernmentSchemesPreview';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import OfflineIndicator from './components/OfflineIndicator';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>AgriAssist - Technology that speaks the farmer's language</title>
        <meta 
          name="description" 
          content="Get personalized crop recommendations, real-time market prices, and agricultural guidance in your local language - even when offline. Join 50K+ farmers transforming their yields with AgriAssist." 
        />
        <meta name="keywords" content="agriculture, farming, crop recommendations, weather, market prices, government schemes, voice assistant, offline farming app" />
        <meta property="og:title" content="AgriAssist - Smart Farming Solutions for Indian Farmers" />
        <meta property="og:description" content="AI-powered crop recommendations, real-time weather data, and market prices in your local language. Works offline too!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agriassist.com/homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AgriAssist - Technology that speaks the farmer's language" />
        <meta name="twitter:description" content="Transform your farming with AI-powered recommendations and real-time agricultural data." />
        <link rel="canonical" href="https://agriassist.com/homepage" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Offline Indicator */}
        <OfflineIndicator />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />

          {/* Interactive Map Section */}
          <InteractiveMap />

          {/* Features Section */}
          <FeaturesSection />

          {/* Testimonial Carousel */}
          <TestimonialCarousel />

          {/* Government Schemes Preview */}
          <GovernmentSchemesPreview />

          {/* PWA Install Prompt */}
          <PWAInstallPrompt />
        </main>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                    >
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                      <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z" />
                      <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z" />
                    </svg>
                  </div>
                  <span className="text-xl font-heading font-bold">AgriAssist</span>
                </div>
                <p className="text-white/80 text-sm">
                  Technology that speaks the farmer's language. Empowering Indian agriculture with AI-driven insights.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/live-demo" className="text-white/80 hover:text-white transition-colors">Live Demo</a></li>
                  <li><a href="/features-deep-dive" className="text-white/80 hover:text-white transition-colors">Features</a></li>
                  <li><a href="/technology-stack" className="text-white/80 hover:text-white transition-colors">Technology</a></li>
                  <li><a href="/government-schemes" className="text-white/80 hover:text-white transition-colors">Schemes</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/help" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="/feedback" className="text-white/80 hover:text-white transition-colors">Feedback</a></li>
                  <li><a href="/developer-hub" className="text-white/80 hover:text-white transition-colors">Developer Hub</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>📧 support@agriassist.com</p>
                  <p>📞 1800-123-AGRI</p>
                  <p>📍 New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} AgriAssist. All rights reserved. Made with ❤️ for Indian farmers.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;