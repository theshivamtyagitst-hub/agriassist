import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PWAInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [engagementScore, setEngagementScore] = useState(0);

  useEffect(() => {
    // Check if running on iOS
    const iOS = /iPad|iPhone|iPod/?.test(navigator.userAgent);
    setIsIOS(iOS);

    // Check if already installed (standalone mode)
    const standalone = window.matchMedia('(display-mode: standalone)')?.matches || 
                      window.navigator?.standalone === true;
    setIsStandalone(standalone);

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e?.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Track user engagement
    const trackEngagement = () => {
      setEngagementScore(prev => prev + 1);
    };

    // Add engagement tracking
    window.addEventListener('scroll', trackEngagement);
    window.addEventListener('click', trackEngagement);

    // Show prompt after meaningful engagement
    const engagementTimer = setTimeout(() => {
      if (engagementScore > 5 && !isStandalone && (deferredPrompt || isIOS)) {
        setShowPrompt(true);
      }
    }, 30000); // Show after 30 seconds of engagement

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('scroll', trackEngagement);
      window.removeEventListener('click', trackEngagement);
      clearTimeout(engagementTimer);
    };
  }, [deferredPrompt, isStandalone, engagementScore, isIOS]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt?.prompt();
      const { outcome } = await deferredPrompt?.userChoice;
      
      if (outcome === 'accepted') {
        console.log('PWA installed');
      }
      
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again for this session
    sessionStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  const handleLater = () => {
    setShowPrompt(false);
    // Show again after 24 hours
    localStorage.setItem('pwa-prompt-later', Date.now()?.toString());
  };

  // Don't show if already dismissed this session
  if (sessionStorage.getItem('pwa-prompt-dismissed')) {
    return null;
  }

  // Don't show if user clicked "later" within 24 hours
  const laterTimestamp = localStorage.getItem('pwa-prompt-later');
  if (laterTimestamp && Date.now() - parseInt(laterTimestamp) < 24 * 60 * 60 * 1000) {
    return null;
  }

  // Don't show if already installed
  if (isStandalone) {
    return null;
  }

  return (
    <AnimatePresence>
      {showPrompt && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleDismiss}
          />

          {/* Install Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
          >
            <div className="bg-white rounded-2xl shadow-brand-xl border border-green-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="Smartphone" size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">
                      Install AgriAssist
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">
                      Get the full app experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="Wifi" size={20} className="text-green-600" />
                    <span className="text-sm text-text-primary">Works offline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Zap" size={20} className="text-green-600" />
                    <span className="text-sm text-text-primary">Faster loading</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Bell" size={20} className="text-green-600" />
                    <span className="text-sm text-text-primary">Push notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Home" size={20} className="text-green-600" />
                    <span className="text-sm text-text-primary">Add to home screen</span>
                  </div>
                </div>

                {/* iOS Instructions */}
                {isIOS && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-900 mb-2">
                          Install on iOS:
                        </p>
                        <ol className="text-xs text-blue-800 space-y-1">
                          <li>1. Tap the share button <Icon name="Share" size={12} className="inline" /></li>
                          <li>2. Select "Add to Home Screen"</li>
                          <li>3. Tap "Add" to install</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {!isIOS && deferredPrompt && (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleInstall}
                      iconName="Download"
                      iconPosition="left"
                      className="flex-1"
                    >
                      Install Now
                    </Button>
                  )}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLater}
                    className="flex-1"
                  >
                    Maybe Later
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDismiss}
                    iconName="X"
                  />
                </div>
              </div>

              {/* Benefits Footer */}
              <div className="bg-surface px-6 py-4">
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>Join 50K+ farmers using the app</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={12} className="text-yellow-500" />
                    <span>4.8 rating</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;