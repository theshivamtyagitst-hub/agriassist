import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DeveloperCommunity = () => {
  const communityStats = [
    { label: "Active Developers", value: "200+", icon: "Users" },
    { label: "GitHub Stars", value: "1.2K", icon: "Star" },
    { label: "API Integrations", value: "150+", icon: "Zap" },
    { label: "Community Posts", value: "500+", icon: "MessageSquare" }
  ];

  const communityResources = [
    {
      title: "Developer Forums",
      description: "Connect with other developers, ask questions, and share solutions",
      icon: "MessageCircle",
      link: "#",
      stats: "45 active discussions"
    },
    {
      title: "GitHub Repository",
      description: "Access open-source components, SDKs, and example applications",
      icon: "Github",
      link: "#",
      stats: "1.2K stars, 200+ forks"
    },
    {
      title: "Discord Community",
      description: "Real-time chat with developers and AgriAssist team members",
      icon: "MessageSquare",
      link: "#",
      stats: "300+ members online"
    },
    {
      title: "Developer Blog",
      description: "Technical articles, tutorials, and agricultural technology insights",
      icon: "BookOpen",
      link: "#",
      stats: "New posts weekly"
    }
  ];

  const contributionAreas = [
    {
      title: "SDK Development",
      description: "Help build and maintain SDKs for different programming languages",
      skills: ["JavaScript", "Python", "Java", "Swift"],
      difficulty: "Intermediate"
    },
    {
      title: "Documentation",
      description: "Improve API documentation, tutorials, and integration guides",
      skills: ["Technical Writing", "Markdown", "API Design"],
      difficulty: "Beginner"
    },
    {
      title: "Example Applications",
      description: "Create sample applications showcasing AgriAssist API usage",
      skills: ["React", "React Native", "Flutter", "Node.js"],
      difficulty: "Intermediate"
    },
    {
      title: "Testing & QA",
      description: "Help test APIs, report bugs, and improve reliability",
      skills: ["Testing", "Bug Reporting", "Quality Assurance"],
      difficulty: "Beginner"
    }
  ];

  const recentActivity = [
    {
      user: "Rajesh Kumar",
      action: "contributed to Python SDK",
      time: "2 hours ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      user: "Priya Sharma",
      action: "opened issue in crop-recommendation API",
      time: "4 hours ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    {
      user: "Dev Team",
      action: "released v2.1.0 with weather improvements",
      time: "1 day ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      user: "Amit Patel",
      action: "submitted Flutter integration guide",
      time: "2 days ago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-responsive-2xl font-heading font-bold text-text-primary mb-4">
            Developer Community
          </h2>
          <p className="text-responsive-base text-text-secondary max-w-2xl mx-auto">
            Join a vibrant community of developers building the future of agriculture. 
            Collaborate, learn, and contribute to open-source agricultural technology.
          </p>
        </div>
        
        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {communityStats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-heading font-bold text-text-primary mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Community Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
              Community Resources
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {communityResources?.map((resource, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-brand-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon name={resource?.icon} size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-semibold text-text-primary mb-2">
                        {resource?.title}
                      </h4>
                      <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                        {resource?.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-secondary">{resource?.stats}</span>
                        <Icon name="ExternalLink" size={14} className="text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contribution Areas */}
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
              Ways to Contribute
            </h3>
            <div className="space-y-4">
              {contributionAreas?.map((area, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg border border-border p-6 hover:bg-surface transition-colors duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-heading font-semibold text-text-primary">
                      {area?.title}
                    </h4>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      area?.difficulty === 'Beginner' ?'bg-green-100 text-green-800' :'bg-yellow-100 text-yellow-800'
                    }`}>
                      {area?.difficulty}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-4">{area?.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area?.skills?.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-text-secondary text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Activity */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
              Recent Activity
            </h3>
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="space-y-4">
                {recentActivity?.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img
                      src={activity?.avatar}
                      alt={activity?.user}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-text-primary">
                        <span className="font-medium">{activity?.user}</span>
                        {' '}
                        <span className="text-text-secondary">{activity?.action}</span>
                      </p>
                      <p className="text-xs text-text-secondary mt-1">{activity?.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  fullWidth
                  iconName="Activity"
                  iconPosition="left"
                >
                  View All Activity
                </Button>
              </div>
            </div>
            
            {/* Join Community CTA */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border p-6 mt-6">
              <div className="text-center">
                <Icon name="Users" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-2">
                  Join Our Community
                </h4>
                <p className="text-text-secondary text-sm mb-4">
                  Connect with developers, share ideas, and contribute to agricultural innovation.
                </p>
                <div className="space-y-2">
                  <Button 
                    variant="default" 
                    size="sm" 
                    fullWidth
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Join Discord
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth
                    iconName="Github"
                    iconPosition="left"
                  >
                    Follow on GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperCommunity;