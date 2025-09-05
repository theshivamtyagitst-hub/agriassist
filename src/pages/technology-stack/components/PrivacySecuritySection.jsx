import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PrivacySecuritySection = () => {
  const [activePrivacyTab, setActivePrivacyTab] = useState('data-usage');

  const privacyPrinciples = [
    {
      id: 'data-usage',
      title: "What We Use",
      icon: "Database",
      content: {
        description: "We only collect data that directly helps improve your farming decisions",
        items: [
          { label: "Crop and soil information you share", icon: "Leaf", safe: true },
          { label: "Weather data for your location", icon: "Cloud", safe: true },
          { label: "App usage to improve recommendations", icon: "Smartphone", safe: true },
          { label: "Your personal banking details", icon: "CreditCard", safe: false },
          { label: "Your personal conversations", icon: "MessageCircle", safe: false },
          { label: "Your location when app is closed", icon: "MapPin", safe: false }
        ]
      }
    },
    {
      id: 'data-sharing',
      title: "Who We Share With",
      icon: "Share2",
      content: {
        description: "Your farm data stays private and is never sold to third parties",
        items: [
          { label: "Government agricultural departments (with consent)", icon: "Building2", safe: true },
          { label: "Research institutions (anonymized data only)", icon: "GraduationCap", safe: true },
          { label: "Agricultural cooperatives (if you join)", icon: "Users", safe: true },
          { label: "Marketing companies", icon: "Megaphone", safe: false },
          { label: "Insurance companies", icon: "Shield", safe: false },
          { label: "Land developers or buyers", icon: "Home", safe: false }
        ]
      }
    },
    {
      id: 'your-control',
      title: "Your Control",
      icon: "Settings",
      content: {
        description: "You have complete control over your data and can manage it anytime",
        items: [
          { label: "View all your data anytime", icon: "Eye", safe: true },
          { label: "Download your data", icon: "Download", safe: true },
          { label: "Delete your account and data", icon: "Trash2", safe: true },
          { label: "Control what data is shared", icon: "Lock", safe: true },
          { label: "Opt out of research participation", icon: "UserX", safe: true },
          { label: "Change privacy settings easily", icon: "Sliders", safe: true }
        ]
      }
    }
  ];

  const securityFeatures = [
    {
      title: "Bank-Level Encryption",
      description: "Your data is protected with the same security used by banks",
      icon: "Lock",
      technical: "AES-256 encryption, TLS 1.3"
    },
    {
      title: "Secure Data Centers",
      description: "Your information is stored in certified secure facilities in India",
      icon: "Server",
      technical: "ISO 27001 certified, 99.9% uptime"
    },
    {
      title: "Regular Security Audits",
      description: "Independent experts regularly check our security systems",
      icon: "Shield",
      technical: "Quarterly penetration testing, VAPT certified"
    },
    {
      title: "Local Data Storage",
      description: "Your data stays in India and follows Indian privacy laws",
      icon: "MapPin",
      technical: "GDPR compliant, follows IT Act 2000"
    }
  ];

  const privacyTabs = [
    { id: 'data-usage', label: 'What We Use', icon: 'Database' },
    { id: 'data-sharing', label: 'Who We Share With', icon: 'Share2' },
    { id: 'your-control', label: 'Your Control', icon: 'Settings' }
  ];

  return (
    <div className="space-y-8">
      {/* Privacy Section */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border overflow-hidden">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 border-b border-border">
          <div className="flex items-center space-x-3 mb-2">
            <Icon name="Shield" size={24} className="text-primary" />
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Your Privacy Matters
            </h2>
          </div>
          <p className="text-text-secondary">
            Clear, simple explanations of how we protect and use your farming data
          </p>
        </div>

        {/* Privacy Tabs */}
        <div className="flex border-b border-border overflow-x-auto">
          {privacyTabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActivePrivacyTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activePrivacyTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-primary hover:bg-surface'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Privacy Tab Content */}
        <div className="p-6">
          {privacyPrinciples?.map((principle) => (
            activePrivacyTab === principle?.id && (
              <div key={principle?.id} className="space-y-4">
                <p className="text-text-secondary mb-6">
                  {principle?.content?.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {principle?.content?.items?.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg border ${
                        item?.safe 
                          ? 'bg-green-50 border-green-200' :'bg-red-50 border-red-200'
                      }`}
                    >
                      <Icon 
                        name={item?.safe ? "CheckCircle" : "XCircle"} 
                        size={16} 
                        className={item?.safe ? "text-green-600" : "text-red-600"} 
                      />
                      <Icon name={item?.icon} size={16} className="text-text-secondary" />
                      <span className={`text-sm ${item?.safe ? 'text-green-800' : 'text-red-800'}`}>
                        {item?.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
      {/* Security Features */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Lock" size={24} className="text-primary" />
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Security You Can Trust
            </h2>
            <p className="text-text-secondary">
              Enterprise-grade security protecting your agricultural data
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures?.map((feature, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:shadow-brand-sm transition-shadow duration-300">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-text-primary mb-2">
                    {feature?.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                    {feature?.description}
                  </p>
                  <div className="text-xs text-text-secondary bg-surface px-2 py-1 rounded">
                    {feature?.technical}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Promise */}
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
          <div className="flex items-center space-x-3 mb-2">
            <Icon name="Award" size={20} className="text-primary" />
            <h3 className="font-medium text-text-primary">Our Security Promise</h3>
          </div>
          <p className="text-sm text-text-secondary">
            We treat your farm data with the same care you treat your crops. If there's ever a security concern, we'll inform you immediately and take full responsibility for protecting your information.
          </p>
        </div>
      </div>
      {/* Privacy Controls */}
      <div className="bg-white rounded-xl shadow-brand-md border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Icon name="Sliders" size={24} className="text-primary" />
            <div>
              <h2 className="text-xl font-heading font-semibold text-text-primary">
                Privacy Controls
              </h2>
              <p className="text-text-secondary text-sm">
                Manage your data and privacy settings
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-text-secondary">Last updated</div>
            <div className="text-sm font-medium text-text-primary">Dec 5, 2024</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 border border-border rounded-lg hover:bg-surface transition-colors duration-200 cursor-pointer">
            <Icon name="Download" size={24} className="text-primary mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Download Data</h4>
            <p className="text-xs text-text-secondary">Get a copy of all your data</p>
          </div>
          <div className="text-center p-4 border border-border rounded-lg hover:bg-surface transition-colors duration-200 cursor-pointer">
            <Icon name="Settings" size={24} className="text-primary mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Privacy Settings</h4>
            <p className="text-xs text-text-secondary">Control what data is shared</p>
          </div>
          <div className="text-center p-4 border border-border rounded-lg hover:bg-surface transition-colors duration-200 cursor-pointer">
            <Icon name="Trash2" size={24} className="text-red-600 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Delete Account</h4>
            <p className="text-xs text-text-secondary">Remove all your data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySecuritySection;