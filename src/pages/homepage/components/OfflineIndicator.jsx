import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showIndicator, setShowIndicator] = useState(false);
  const [cachedData, setCachedData] = useState({
    weather: true,
    recommendations: true,
    schemes: false,
    marketPrices: true
  });

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowIndicator(true);
      
      // Hide success indicator after 3 seconds
      setTimeout(() => {
        setShowIndicator(false);
      }, 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowIndicator(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Show indicator initially if offline
    if (!navigator.onLine) {
      setShowIndicator(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const getCachedDataCount = () => {
    return Object.values(cachedData)?.filter(Boolean)?.length;
  };

  const getTotalDataTypes = () => {
    return Object.keys(cachedData)?.length;
  };

  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-20 left-4 right-4 z-40"
        >
          <div className="max-w-md mx-auto">
            {isOnline ? (
              // Online Indicator
              (<motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-green-500 text-white rounded-lg p-4 shadow-brand-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Wifi" size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Back Online!</p>
                    <p className="text-sm text-green-100">
                      Syncing latest data...
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon name="RefreshCw" size={16} className="text-white" />
                  </motion.div>
                </div>
              </motion.div>)
            ) : (
              // Offline Indicator
              (<div className="bg-white rounded-lg shadow-brand-lg border border-orange-200 overflow-hidden">
                {/* Header */}
                <div className="bg-orange-500 text-white p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon name="WifiOff" size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">You're Offline</p>
                      <p className="text-sm text-orange-100">
                        Using cached data
                      </p>
                    </div>
                  </div>
                </div>
                {/* Cached Data Status */}
                <div className="p-4">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-primary">
                        Available Offline
                      </span>
                      <span className="text-sm text-text-secondary">
                        {getCachedDataCount()}/{getTotalDataTypes()}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${(getCachedDataCount() / getTotalDataTypes()) * 100}%` 
                        }}
                      />
                    </div>
                  </div>

                  {/* Data Types */}
                  <div className="space-y-2">
                    {Object.entries(cachedData)?.map(([key, available]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon 
                            name={available ? "Check" : "X"} 
                            size={14} 
                            className={available ? "text-green-600" : "text-red-500"} 
                          />
                          <span className="text-sm text-text-primary capitalize">
                            {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          available 
                            ? 'bg-green-100 text-green-700' :'bg-red-100 text-red-700'
                        }`}>
                          {available ? 'Available' : 'Needs sync'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Offline Features */}
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Icon name="Info" size={16} className="text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-900 mb-1">
                          What works offline:
                        </p>
                        <ul className="text-xs text-blue-800 space-y-1">
                          <li>• View cached weather forecasts</li>
                          <li>• Access saved crop recommendations</li>
                          <li>• Use farming calculators</li>
                          <li>• Browse offline content</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Dismiss Button */}
                  <button
                    onClick={() => setShowIndicator(false)}
                    className="w-full mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-text-primary text-sm font-medium rounded-lg transition-colors"
                  >
                    Continue Offline
                  </button>
                </div>
              </div>)
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfflineIndicator;