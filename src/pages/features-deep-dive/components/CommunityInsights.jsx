import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CommunityInsights = () => {
  const [activeTab, setActiveTab] = useState('success-stories');
  const [selectedStory, setSelectedStory] = useState(null);

  const tabs = [
    { id: 'success-stories', label: 'Success Stories', icon: 'Trophy' },
    { id: 'knowledge-sharing', label: 'Knowledge Sharing', icon: 'MessageSquare' },
    { id: 'farmer-network', label: 'Farmer Network', icon: 'Users' }
  ];

  const successStories = [
    {
      id: 1,
      farmer: 'Rajesh Kumar',
      location: 'Ludhiana, Punjab',
      crop: 'Basmati Rice',
      improvement: '35% yield increase',
      revenue: '₹2.8 lakh additional income',
      story: `Using AgriAssist's soil analysis and crop recommendations, I switched from traditional farming methods to precision agriculture. The app suggested optimal fertilizer timing and water management techniques specific to my soil type. This season, my basmati rice yield increased by 35%, and the quality improved significantly, fetching premium prices in the market.`,
      image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=300&fit=crop',avatar: 'https://randomuser.me/api/portraits/men/32.jpg',rating: 5,date: '2025-01-02'
    },
    {
      id: 2,
      farmer: 'Sunita Devi',location: 'Nashik, Maharashtra',crop: 'Cotton',improvement: '28% cost reduction',revenue: '₹1.5 lakh saved',
      story: `The voice interface in Hindi made it so easy for me to get farming advice. AgriAssist helped me identify the right time for pest control and suggested organic alternatives. I reduced my input costs by 28% while maintaining the same yield. The government scheme navigator also helped me get subsidies I didn't know existed.`,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      date: '2024-12-28'
    },
    {
      id: 3,
      farmer: 'Mohan Singh',
      location: 'Jaipur, Rajasthan',
      crop: 'Wheat',
      improvement: '42% water savings',
      revenue: '₹80,000 saved on irrigation',
      story: `Living in a water-scarce region, efficient irrigation was crucial. AgriAssist's weather predictions and soil moisture recommendations helped me optimize water usage. I saved 42% water this season while achieving better wheat quality. The offline feature was particularly helpful during network issues in rural areas.`,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',avatar: 'https://randomuser.me/api/portraits/men/56.jpg',rating: 5,date: '2024-12-25'
    }
  ];

  const knowledgeSharing = [
    {
      id: 1,
      title: 'Organic Pest Control for Cotton',
      author: 'Priya Sharma',
      location: 'Gujarat',
      category: 'Pest Management',
      likes: 234,
      comments: 45,
      content: `Neem oil spray mixed with soap solution works wonders for cotton bollworm. Apply early morning or evening. I've been using this method for 3 years with great results.`,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',avatar: 'https://randomuser.me/api/portraits/women/28.jpg',timestamp: '2 hours ago'
    },
    {
      id: 2,
      title: 'Soil Preparation for Monsoon Crops',author: 'Vikram Patel',location: 'Madhya Pradesh',category: 'Soil Management',
      likes: 189,
      comments: 32,
      content: `Deep plowing followed by disc harrowing gives best results. Add compost 15 days before sowing. This technique improved my soybean germination by 25%.`,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop',avatar: 'https://randomuser.me/api/portraits/men/41.jpg',timestamp: '5 hours ago'
    },
    {
      id: 3,
      title: 'Water Conservation Techniques',author: 'Lakshmi Reddy',location: 'Andhra Pradesh',category: 'Water Management',
      likes: 156,
      comments: 28,
      content: `Drip irrigation combined with mulching reduced my water usage by 40%. Initial investment pays off in 2 seasons. Perfect for vegetable farming.`,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=200&fit=crop',avatar: 'https://randomuser.me/api/portraits/women/35.jpg',timestamp: '1 day ago'
    }
  ];

  const farmerNetwork = [
    {
      id: 1,
      name: 'Ramesh Gupta',
      location: 'Haryana',
      specialization: 'Wheat & Rice',
      experience: '15 years',
      followers: 1250,
      posts: 89,
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      verified: true,
      lastActive: 'Online now'
    },
    {
      id: 2,
      name: 'Kavita Joshi',
      location: 'Karnataka',
      specialization: 'Organic Farming',
      experience: '12 years',
      followers: 980,
      posts: 156,
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
      verified: true,
      lastActive: '2 hours ago'
    },
    {
      id: 3,
      name: 'Suresh Yadav',
      location: 'Uttar Pradesh',
      specialization: 'Sugarcane',
      experience: '20 years',
      followers: 2100,
      posts: 203,
      avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
      verified: true,
      lastActive: '1 day ago'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const renderSuccessStories = () => (
    <div className="space-y-6">
      {successStories?.map((story) => (
        <div key={story?.id} className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
          <div className="flex items-start space-x-4">
            <Image
              src={story?.avatar}
              alt={story?.farmer}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-heading font-semibold text-text-primary">{story?.farmer}</h3>
                  <p className="text-sm text-text-secondary">{story?.location}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {renderStars(story?.rating)}
                  </div>
                </div>
                <span className="text-xs text-text-secondary">{story?.date}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-green-800">Crop</div>
                  <div className="text-green-600">{story?.crop}</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-blue-800">Improvement</div>
                  <div className="text-blue-600">{story?.improvement}</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-purple-800">Revenue Impact</div>
                  <div className="text-purple-600">{story?.revenue}</div>
                </div>
              </div>
              
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {story?.story}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" iconName="Heart" iconPosition="left">
                    124
                  </Button>
                  <Button variant="ghost" size="sm" iconName="MessageCircle" iconPosition="left">
                    23
                  </Button>
                  <Button variant="ghost" size="sm" iconName="Share" iconPosition="left">
                    Share
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderKnowledgeSharing = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {knowledgeSharing?.map((post) => (
        <div key={post?.id} className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
          <div className="flex items-start space-x-3 mb-4">
            <Image
              src={post?.avatar}
              alt={post?.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-text-primary">{post?.author}</h3>
              <p className="text-sm text-text-secondary">{post?.location}</p>
            </div>
            <span className="text-xs text-text-secondary">{post?.timestamp}</span>
          </div>
          
          <div className="mb-4">
            <Image
              src={post?.image}
              alt={post?.title}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2">
              {post?.category}
            </span>
            <h4 className="font-semibold text-text-primary mb-2">{post?.title}</h4>
            <p className="text-sm text-text-secondary leading-relaxed">{post?.content}</p>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-text-secondary hover:text-primary smooth-transition">
                <Icon name="Heart" size={16} />
                <span className="text-sm">{post?.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-text-secondary hover:text-primary smooth-transition">
                <Icon name="MessageCircle" size={16} />
                <span className="text-sm">{post?.comments}</span>
              </button>
            </div>
            <Button variant="outline" size="sm">
              View Discussion
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFarmerNetwork = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {farmerNetwork?.map((farmer) => (
        <div key={farmer?.id} className="bg-card rounded-xl border border-border p-6 brand-shadow-md text-center">
          <div className="relative mb-4">
            <Image
              src={farmer?.avatar}
              alt={farmer?.name}
              className="w-16 h-16 rounded-full object-cover mx-auto"
            />
            {farmer?.verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon name="Check" size={12} className="text-white" />
              </div>
            )}
          </div>
          
          <h3 className="font-heading font-semibold text-text-primary mb-1">{farmer?.name}</h3>
          <p className="text-sm text-text-secondary mb-2">{farmer?.location}</p>
          <p className="text-sm text-primary font-medium mb-3">{farmer?.specialization}</p>
          
          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div>
              <div className="text-lg font-bold text-text-primary">{farmer?.followers}</div>
              <div className="text-xs text-text-secondary">Followers</div>
            </div>
            <div>
              <div className="text-lg font-bold text-text-primary">{farmer?.posts}</div>
              <div className="text-xs text-text-secondary">Posts</div>
            </div>
            <div>
              <div className="text-lg font-bold text-text-primary">{farmer?.experience}</div>
              <div className="text-xs text-text-secondary">Experience</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-1 mb-4">
            <div className={`w-2 h-2 rounded-full ${
              farmer?.lastActive === 'Online now' ? 'bg-green-500' : 'bg-gray-400'
            }`}></div>
            <span className="text-xs text-text-secondary">{farmer?.lastActive}</span>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="default" size="sm" className="flex-1">
              Follow
            </Button>
            <Button variant="outline" size="sm" iconName="MessageCircle" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Users" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary">Community Driven</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Community Insights & Knowledge Sharing
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Connect with fellow farmers, share experiences, and learn from success stories. 
            Our community-driven platform amplifies traditional farming wisdom with modern insights.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          <div className="bg-card rounded-lg p-1 border border-border">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium smooth-transition ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'success-stories' && renderSuccessStories()}
          {activeTab === 'knowledge-sharing' && renderKnowledgeSharing()}
          {activeTab === 'farmer-network' && renderFarmerNetwork()}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">50K+</div>
            <div className="text-sm text-text-secondary">Active Farmers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">12K+</div>
            <div className="text-sm text-text-secondary">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">25K+</div>
            <div className="text-sm text-text-secondary">Knowledge Posts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">95%</div>
            <div className="text-sm text-text-secondary">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityInsights;