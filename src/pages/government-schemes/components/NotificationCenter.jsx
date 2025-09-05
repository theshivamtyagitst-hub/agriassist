import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationCenter = ({ userProfile, onNotificationClick }) => {
  const [notifications, setNotifications] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Mock notifications based on user profile
  useEffect(() => {
    const mockNotifications = [
      {
        id: 1,
        type: 'deadline',
        title: 'Application Deadline Approaching',
        message: 'PM-KISAN scheme application deadline is in 5 days. Apply now to avoid missing out.',
        scheme: 'PM-KISAN',
        priority: 'high',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        isRead: false,
        actionUrl: '/schemes/pm-kisan'
      },
      {
        id: 2,
        type: 'new-scheme',
        title: 'New Scheme Available',
        message: 'Pradhan Mantri Fasal Bima Yojana now available for cotton farmers in Maharashtra.',
        scheme: 'PMFBY',
        priority: 'medium',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        isRead: false,
        actionUrl: '/schemes/pmfby'
      },
      {
        id: 3,
        type: 'application-status',
        title: 'Application Status Update',
        message: 'Your application for Soil Health Card scheme has been approved. Documents will be sent soon.',
        scheme: 'Soil Health Card',
        priority: 'high',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
        isRead: true,
        actionUrl: '/schemes/soil-health-card'
      },
      {
        id: 4,
        type: 'seasonal',
        title: 'Seasonal Reminder',
        message: 'Kharif season schemes are now open. Check eligibility for crop insurance and subsidies.',
        scheme: 'Multiple',
        priority: 'medium',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        isRead: true,
        actionUrl: '/schemes?season=kharif'
      },
      {
        id: 5,
        type: 'document',
        title: 'Document Verification Required',
        message: 'Additional documents needed for your Krishi Yantra Subsidy application.',
        scheme: 'Krishi Yantra Subsidy',
        priority: 'high',
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        isRead: false,
        actionUrl: '/schemes/krishi-yantra'
      }
    ];

    setNotifications(mockNotifications);
  }, [userProfile]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'deadline':
        return 'Clock';
      case 'new-scheme':
        return 'Plus';
      case 'application-status':
        return 'CheckCircle';
      case 'seasonal':
        return 'Calendar';
      case 'document':
        return 'FileText';
      default:
        return 'Bell';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-500 bg-red-50 border-red-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low':
        return 'text-blue-500 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };

  const handleNotificationClick = (notification) => {
    // Mark as read
    setNotifications(prev => 
      prev?.map(n => 
        n?.id === notification?.id ? { ...n, isRead: true } : n
      )
    );
    
    // Call parent handler
    onNotificationClick(notification);
  };

  const unreadCount = notifications?.filter(n => !n?.isRead)?.length;
  const displayNotifications = isExpanded ? notifications : notifications?.slice(0, 3);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Icon name="Bell" size={24} className="text-primary" />
            {unreadCount > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {unreadCount > 9 ? '9+' : unreadCount}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-heading font-semibold text-text-primary">
              Notifications
            </h2>
            <p className="text-sm text-text-secondary">
              {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up!'}
            </p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
        />
      </div>
      {/* Notifications List */}
      <div className="space-y-3">
        {displayNotifications?.map((notification) => (
          <div
            key={notification?.id}
            className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-sm ${
              notification?.isRead 
                ? 'bg-background border-border' :'bg-surface border-primary/20'
            }`}
            onClick={() => handleNotificationClick(notification)}
          >
            <div className="flex items-start space-x-3">
              {/* Icon */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg border ${getPriorityColor(notification?.priority)}`}>
                <Icon 
                  name={getNotificationIcon(notification?.type)} 
                  size={18} 
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h4 className={`text-sm font-medium ${
                    notification?.isRead ? 'text-text-secondary' : 'text-text-primary'
                  }`}>
                    {notification?.title}
                  </h4>
                  <div className="flex items-center space-x-2 ml-2">
                    {!notification?.isRead && (
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    )}
                    <span className="text-xs text-text-secondary whitespace-nowrap">
                      {formatTimestamp(notification?.timestamp)}
                    </span>
                  </div>
                </div>
                
                <p className={`text-sm mb-2 ${
                  notification?.isRead ? 'text-text-secondary' : 'text-text-primary'
                }`}>
                  {notification?.message}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {notification?.scheme}
                  </span>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    className="text-xs"
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show More/Less */}
      {notifications?.length > 3 && (
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
          >
            {isExpanded ? 'Show Less' : `Show ${notifications?.length - 3} More`}
          </Button>
        </div>
      )}
      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-text-primary">Quick Actions</span>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="Settings"
              className="text-text-secondary hover:text-primary"
            />
            <Button
              variant="ghost"
              size="sm"
              iconName="CheckCheck"
              className="text-text-secondary hover:text-primary"
              onClick={() => {
                setNotifications(prev => prev?.map(n => ({ ...n, isRead: true })));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;