import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfflineModeDemo = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [syncStatus, setSyncStatus] = useState('synced');
  const [cachedData, setCachedData] = useState([]);
  const [pendingActions, setPendingActions] = useState([]);

  const mockCachedData = [
    {
      id: 1,
      type: 'recommendation',
      title: 'Cotton Crop Recommendation',
      data: 'Black soil, Kharif season - 92% confidence',
      timestamp: '2025-01-05 10:30 AM',
      size: '2.3 KB'
    },
    {
      id: 2,
      type: 'weather',
      title: 'Weather Forecast',
      data: '28°C, Clear sky, 20% rain chance',
      timestamp: '2025-01-05 09:15 AM',
      size: '1.8 KB'
    },
    {
      id: 3,
      type: 'prices',
      title: 'Market Prices',
      data: 'Wheat: ₹2,150/quintal, Rice: ₹2,850/quintal',
      timestamp: '2025-01-05 08:45 AM',
      size: '3.1 KB'
    },
    {
      id: 4,
      type: 'schemes',
      title: 'Government Schemes',
      data: 'PM-KISAN, Soil Health Card, Crop Insurance',
      timestamp: '2025-01-04 06:00 PM',
      size: '5.7 KB'
    }
  ];

  const mockPendingActions = [
    {
      id: 1,
      action: 'Submit Feedback',
      description: 'Cotton recommendation feedback - 5 stars',
      timestamp: '2025-01-05 11:45 AM'
    },
    {
      id: 2,
      action: 'Save Recommendation',
      description: 'Wheat crop recommendation for next season',
      timestamp: '2025-01-05 11:30 AM'
    },
    {
      id: 3,
      action: 'Price Alert Setup',
      description: 'Alert when cotton price reaches ₹5,500',
      timestamp: '2025-01-05 11:15 AM'
    }
  ];

  useEffect(() => {
    setCachedData(mockCachedData);
    if (!isOnline) {
      setPendingActions(mockPendingActions);
      setSyncStatus('pending');
    } else {
      setSyncStatus('synced');
    }
  }, [isOnline]);

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
    if (isOnline) {
      setSyncStatus('offline');
    } else {
      setSyncStatus('syncing');
      setTimeout(() => {
        setSyncStatus('synced');
        setPendingActions([]);
      }, 3000);
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'recommendation': return 'Brain';
      case 'weather': return 'Cloud';
      case 'prices': return 'TrendingUp';
      case 'schemes': return 'FileText';
      default: return 'Database';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'recommendation': return 'text-blue-600 bg-blue-50';
      case 'weather': return 'text-green-600 bg-green-50';
      case 'prices': return 'text-orange-600 bg-orange-50';
      case 'schemes': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getSyncStatusColor = () => {
    switch (syncStatus) {
      case 'synced': return 'text-green-600 bg-green-50';
      case 'syncing': return 'text-blue-600 bg-blue-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'offline': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getSyncStatusText = () => {
    switch (syncStatus) {
      case 'synced': return 'All data synced';
      case 'syncing': return 'Syncing data...';
      case 'pending': return `${pendingActions?.length} actions pending`;
      case 'offline': return 'Working offline';
      default: return 'Unknown status';
    }
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Wifi" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary">Offline-First Design</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Works Without Internet
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            AgriAssist continues to work even when you're offline. Access cached recommendations, 
            weather data, and market prices, with automatic sync when connectivity returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Connection Status & Controls */}
          <div className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-6">
              Connection Status
            </h3>
            
            {/* Status Display */}
            <div className="text-center mb-6">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                isOnline ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <Icon 
                  name={isOnline ? "Wifi" : "WifiOff"} 
                  size={24} 
                  className={isOnline ? 'text-green-600' : 'text-red-600'}
                />
              </div>
              
              <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                isOnline ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span>{isOnline ? 'Online' : 'Offline'}</span>
              </div>
              
              <p className="text-sm text-text-secondary mt-2">
                {isOnline ? 'All features available' : 'Using cached data'}
              </p>
            </div>

            {/* Demo Toggle */}
            <Button
              variant={isOnline ? "destructive" : "default"}
              fullWidth
              onClick={toggleOnlineStatus}
              iconName={isOnline ? "WifiOff" : "Wifi"}
              iconPosition="left"
            >
              {isOnline ? 'Simulate Offline' : 'Go Back Online'}
            </Button>

            {/* Sync Status */}
            <div className={`mt-6 p-4 rounded-lg ${getSyncStatusColor()}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={syncStatus === 'syncing' ? 'RefreshCw' : 'Database'} 
                    size={16}
                    className={syncStatus === 'syncing' ? 'animate-spin' : ''}
                  />
                  <span className="font-medium">{getSyncStatusText()}</span>
                </div>
                {syncStatus === 'synced' && (
                  <Icon name="Check" size={16} />
                )}
              </div>
            </div>

            {/* Storage Info */}
            <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
              <h4 className="font-medium text-text-primary mb-3 flex items-center">
                <Icon name="HardDrive" size={16} className="mr-2" />
                Local Storage
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Used:</span>
                  <span className="font-medium text-text-primary">12.8 KB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Available:</span>
                  <span className="font-medium text-text-primary">4.9 MB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '0.3%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cached Data */}
          <div className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-6">
              Cached Data
            </h3>
            
            <div className="space-y-4">
              {cachedData?.map((item) => (
                <div key={item?.id} className="border border-border rounded-lg p-4 hover:border-primary/30 smooth-transition">
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getTypeColor(item?.type)}`}>
                      <Icon name={getTypeIcon(item?.type)} size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-text-primary text-sm">{item?.title}</h4>
                      <p className="text-xs text-text-secondary mt-1 line-clamp-2">{item?.data}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-text-secondary">{item?.timestamp}</span>
                        <span className="text-xs text-text-secondary">{item?.size}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              fullWidth
              iconName="RefreshCw"
              iconPosition="left"
              className="mt-4"
            >
              Refresh Cache
            </Button>
          </div>

          {/* Pending Actions */}
          <div className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-6">
              Pending Actions
            </h3>
            
            {pendingActions?.length === 0 ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={48} className="text-green-500 mx-auto mb-4" />
                <p className="text-text-secondary">
                  All actions synced successfully
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendingActions?.map((action) => (
                  <div key={action?.id} className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center">
                        <Icon name="Clock" size={16} className="text-yellow-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-yellow-900 text-sm">{action?.action}</h4>
                        <p className="text-xs text-yellow-700 mt-1">{action?.description}</p>
                        <span className="text-xs text-yellow-600 mt-2 block">{action?.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Upload"
                  iconPosition="left"
                  disabled={isOnline}
                  className="mt-4"
                >
                  {isOnline ? 'Auto-sync enabled' : 'Sync when online'}
                </Button>
              </div>
            )}

            {/* Offline Features */}
            <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
              <h4 className="font-medium text-text-primary mb-3 flex items-center">
                <Icon name="Shield" size={16} className="mr-2" />
                Offline Capabilities
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-green-500" />
                  <span className="text-text-secondary">View cached recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-green-500" />
                  <span className="text-text-secondary">Access weather forecasts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-green-500" />
                  <span className="text-text-secondary">Browse government schemes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-green-500" />
                  <span className="text-text-secondary">Submit feedback (queued)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfflineModeDemo;