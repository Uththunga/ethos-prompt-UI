import React, { useState, useEffect } from 'react';
import { X, Users, CheckCircle, Star, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface NotificationData {
  id: string;
  type: 'signup' | 'purchase' | 'consultation' | 'download';
  name: string;
  location?: string;
  service?: string;
  timeAgo: string;
  avatar?: string;
}

interface SocialProofNotificationsProps {
  notifications?: NotificationData[];
  showInterval?: number; // milliseconds between notifications
  displayDuration?: number; // milliseconds to show each notification
  maxVisible?: number;
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  enabled?: boolean;
}

// Sample notification data - in real app, this would come from your analytics/CRM
const defaultNotifications: NotificationData[] = [
  {
    id: '1',
    type: 'signup',
    name: 'Sarah Chen',
    location: 'San Francisco, CA',
    service: 'Smart Business Assistant',
    timeAgo: '2 minutes ago'
  },
  {
    id: '2',
    type: 'consultation',
    name: 'Marcus Rodriguez',
    location: 'Austin, TX',
    service: 'System Integration',
    timeAgo: '5 minutes ago'
  },
  {
    id: '3',
    type: 'download',
    name: 'Jennifer Kim',
    location: 'Seattle, WA',
    service: 'ROI Calculator',
    timeAgo: '8 minutes ago'
  },
  {
    id: '4',
    type: 'purchase',
    name: 'David Thompson',
    location: 'New York, NY',
    service: 'Digital Transformation',
    timeAgo: '12 minutes ago'
  },
  {
    id: '5',
    type: 'signup',
    name: 'Lisa Wang',
    location: 'Los Angeles, CA',
    service: 'Intelligent Applications',
    timeAgo: '15 minutes ago'
  },
  {
    id: '6',
    type: 'consultation',
    name: 'Robert Johnson',
    location: 'Chicago, IL',
    service: 'System Integration',
    timeAgo: '18 minutes ago'
  }
];

export const SocialProofNotifications: React.FC<SocialProofNotificationsProps> = ({
  notifications = defaultNotifications,
  showInterval = 8000, // 8 seconds
  displayDuration = 5000, // 5 seconds
  maxVisible = 1,
  position = 'bottom-left',
  enabled = true
}) => {
  const [visibleNotifications, setVisibleNotifications] = useState<NotificationData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled || notifications.length === 0) return;

    const showNotification = () => {
      const notification = notifications[currentIndex];
      setVisibleNotifications([notification]);
      setIsVisible(true);

      // Hide notification after displayDuration
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setVisibleNotifications([]);
        }, 300); // Wait for fade out animation
      }, displayDuration);

      // Move to next notification
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
    };

    // Initial delay before showing first notification
    const initialDelay = setTimeout(showNotification, 3000);

    // Set up interval for subsequent notifications
    const interval = setInterval(showNotification, showInterval);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [notifications, currentIndex, showInterval, displayDuration, enabled]);

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      default:
        return 'bottom-4 left-4';
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'signup':
        return <Users className="w-4 h-4 text-green-600" />;
      case 'purchase':
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
      case 'consultation':
        return <Star className="w-4 h-4 text-purple-600" />;
      case 'download':
        return <CheckCircle className="w-4 h-4 text-orange-600" />;
      default:
        return <Users className="w-4 h-4 text-gray-600" />;
    }
  };

  const getNotificationText = (notification: NotificationData) => {
    switch (notification.type) {
      case 'signup':
        return `signed up for ${notification.service}`;
      case 'purchase':
        return `purchased ${notification.service}`;
      case 'consultation':
        return `booked a consultation for ${notification.service}`;
      case 'download':
        return `downloaded the ${notification.service}`;
      default:
        return `interacted with ${notification.service}`;
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      setVisibleNotifications([]);
    }, 300);
  };

  const trackNotificationClick = (notification: NotificationData) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'social_proof_click', {
        event_category: 'Social Proof',
        event_label: notification.service,
        custom_parameter_1: notification.type,
        custom_parameter_2: notification.location
      });
    }
  };

  if (!enabled || visibleNotifications.length === 0) return null;

  return (
    <div className={`fixed ${getPositionClasses()} z-50 max-w-sm`}>
      {visibleNotifications.map((notification) => (
        <Card
          key={notification.id}
          className={`p-4 shadow-lg border border-gray-200 bg-white cursor-pointer hover:shadow-xl transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          onClick={() => trackNotificationClick(notification)}
        >
          <div className="flex items-start space-x-3">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {notification.avatar ? (
                <img
                  src={notification.avatar}
                  alt={notification.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ethos-purple to-ethos-navy flex items-center justify-center text-white text-sm font-medium">
                  {notification.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                {getNotificationIcon(notification.type)}
                <p className="text-sm font-medium text-ethos-navy truncate">
                  {notification.name}
                </p>
              </div>
              <p className="text-xs text-ethos-gray">
                {getNotificationText(notification)}
              </p>
              <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500">
                {notification.location && (
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{notification.location}</span>
                  </div>
                )}
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{notification.timeAgo}</span>
                </div>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-ethos-purple h-1 rounded-full transition-all duration-300 ease-linear"
              style={{
                width: isVisible ? '0%' : '100%',
                transition: `width ${displayDuration}ms linear`
              }}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

// Hook for managing social proof notifications
export const useSocialProofNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationData[]>(defaultNotifications);

  const addNotification = (notification: Omit<NotificationData, 'id'>) => {
    const newNotification: NotificationData = {
      ...notification,
      id: Date.now().toString()
    };
    setNotifications(prev => [newNotification, ...prev.slice(0, 9)]); // Keep last 10
  };

  const generateRealtimeNotification = (type: NotificationData['type'], service: string) => {
    const names = ['Alex Johnson', 'Maria Garcia', 'James Wilson', 'Sarah Davis', 'Michael Brown'];
    const locations = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ'];
    
    const notification = {
      type,
      name: names[Math.floor(Math.random() * names.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      service,
      timeAgo: 'Just now'
    };

    addNotification(notification);
  };

  return {
    notifications,
    addNotification,
    generateRealtimeNotification
  };
};
