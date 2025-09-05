import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const InteractiveMap = () => {
  const [activeUsers, setActiveUsers] = useState(1247);
  const [recentHarvests, setRecentHarvests] = useState([
    { state: 'Punjab', crop: 'Wheat', yield: '+32%', farmer: 'Rajesh Kumar' },
    { state: 'Maharashtra', crop: 'Cotton', yield: '+28%', farmer: 'Priya Sharma' },
    { state: 'Uttar Pradesh', crop: 'Rice', yield: '+25%', farmer: 'Amit Singh' },
    { state: 'Gujarat', crop: 'Groundnut', yield: '+30%', farmer: 'Kiran Patel' }
  ]);

  const [selectedState, setSelectedState] = useState(null);

  const stateData = [
    { name: 'Punjab', users: 8500, x: '25%', y: '20%', color: 'bg-green-500' },
    { name: 'Haryana', users: 6200, x: '28%', y: '25%', color: 'bg-green-400' },
    { name: 'Uttar Pradesh', users: 12000, x: '35%', y: '30%', color: 'bg-green-600' },
    { name: 'Maharashtra', users: 9800, x: '30%', y: '50%', color: 'bg-green-500' },
    { name: 'Gujarat', users: 7500, x: '20%', y: '45%', color: 'bg-green-400' },
    { name: 'Rajasthan', users: 5400, x: '22%', y: '35%', color: 'bg-green-300' },
    { name: 'Madhya Pradesh', users: 8900, x: '32%', y: '40%', color: 'bg-green-500' },
    { name: 'Karnataka', users: 6700, x: '28%', y: '60%', color: 'bg-green-400' },
    { name: 'Andhra Pradesh', users: 5800, x: '38%', y: '65%', color: 'bg-green-400' },
    { name: 'Tamil Nadu', users: 4900, x: '35%', y: '75%', color: 'bg-green-300' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4"
          >
            Farmers Across India Trust AgriAssist
          </motion.h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-time data from active users showing successful harvests and improved yields
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-surface rounded-2xl p-8 border border-green-200 shadow-brand-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-semibold text-text-primary">
                  Live User Activity
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-text-secondary">Live</span>
                </div>
              </div>

              {/* Map Container */}
              <div className="relative bg-green-50 rounded-xl p-6 h-80 overflow-hidden">
                {/* India Map Outline */}
                <svg 
                  viewBox="0 0 100 100" 
                  className="absolute inset-0 w-full h-full opacity-20"
                  fill="currentColor"
                >
                  <path d="M20,20 L80,20 L85,30 L80,40 L75,50 L80,60 L75,70 L70,80 L30,80 L25,70 L20,60 L15,50 L20,40 L15,30 Z" />
                </svg>

                {/* State Markers */}
                {stateData?.map((state, index) => (
                  <motion.div
                    key={state?.name}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="absolute cursor-pointer"
                    style={{ left: state?.x, top: state?.y }}
                    onClick={() => setSelectedState(state)}
                  >
                    <div className={`w-4 h-4 ${state?.color} rounded-full shadow-lg animate-pulse`}>
                      <div className="absolute -top-1 -left-1 w-6 h-6 bg-white/30 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs font-medium whitespace-nowrap">
                      {state?.users?.toLocaleString()} users
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Active Users Counter */}
              <div className="mt-6 text-center">
                <motion.p 
                  key={activeUsers}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-2xl font-bold text-primary"
                >
                  {activeUsers?.toLocaleString()}
                </motion.p>
                <p className="text-sm text-text-secondary">Active Users Right Now</p>
              </div>
            </div>
          </motion.div>

          {/* Recent Success Stories */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                Recent Successful Harvests
              </h3>
              <p className="text-text-secondary">
                Real farmers achieving better yields with AgriAssist recommendations
              </p>
            </div>

            <div className="space-y-4">
              {recentHarvests?.map((harvest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-green-200 shadow-brand-md hover:shadow-brand-lg transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon name="TrendingUp" size={20} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{harvest?.farmer}</p>
                        <p className="text-sm text-text-secondary">{harvest?.state}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">{harvest?.yield}</p>
                      <p className="text-sm text-text-secondary">{harvest?.crop}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center pt-4"
            >
              <button 
                className="text-primary hover:text-primary/80 font-medium flex items-center space-x-2 mx-auto transition-colors"
                onClick={() => window.location.href = '/success-stories'}
              >
                <span>View All Success Stories</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Selected State Modal */}
        {selectedState && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedState(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e?.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-heading font-semibold text-text-primary">
                  {selectedState?.name}
                </h3>
                <button 
                  onClick={() => setSelectedState(null)}
                  className="text-text-secondary hover:text-text-primary"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Active Users:</span>
                  <span className="font-medium text-text-primary">
                    {selectedState?.users?.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Avg Yield Increase:</span>
                  <span className="font-medium text-green-600">+27%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Popular Crops:</span>
                  <span className="font-medium text-text-primary">Wheat, Rice, Cotton</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InteractiveMap;