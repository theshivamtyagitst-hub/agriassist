import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'राजेश कुमार',
      nameEn: 'Rajesh Kumar',
      location: 'पंजाब, भारत',
      locationEn: 'Punjab, India',
      crop: 'गेहूं',
      cropEn: 'Wheat',
      yieldIncrease: '+32%',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      testimonial: `AgriAssist ने मेरी खेती को बदल दिया है। मौसम की सटीक जानकारी और फसल की सलाह से मेरी गेहूं की पैदावार 32% बढ़ गई है।`,
      testimonialEn: `AgriAssist has transformed my farming. With accurate weather information and crop advice, my wheat yield increased by 32%.`,
      videoThumbnail: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
      stats: {
        beforeYield: '25 क्विंटल/एकड़',
        afterYield: '33 क्विंटल/एकड़',
        profitIncrease: '₹15,000'
      }
    },
    {
      id: 2,
      name: 'प्रिया शर्मा',
      nameEn: 'Priya Sharma',
      location: 'महाराष्ट्र, भारत',
      locationEn: 'Maharashtra, India',
      crop: 'कपास',
      cropEn: 'Cotton',
      yieldIncrease: '+28%',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6d4e6c1?w=150&h=150&fit=crop&crop=face',
      testimonial: `मार्केट की कीमतों की जानकारी से मैं सही समय पर अपनी कपास बेच सकी। आवाज़ में सलाह मिलना बहुत आसान है।`,
      testimonialEn: `With market price information, I could sell my cotton at the right time. Getting advice through voice is very convenient.`,
      videoThumbnail: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop',
      stats: {
        beforeYield: '18 क्विंटल/एकड़',
        afterYield: '23 क्विंटल/एकड़',
        profitIncrease: '₹22,000'
      }
    },
    {
      id: 3,
      name: 'अमित सिंह',
      nameEn: 'Amit Singh',
      location: 'उत्तर प्रदेश, भारत',
      locationEn: 'Uttar Pradesh, India',
      crop: 'धान',
      cropEn: 'Rice',
      yieldIncrease: '+25%',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      testimonial: `सरकारी योजनाओं की जानकारी मिलने से मुझे सब्सिडी मिली। ऑफलाइन भी काम करता है जब नेट नहीं होता।`,
      testimonialEn: `Getting information about government schemes helped me get subsidies. It works offline too when there's no internet.`,videoThumbnail: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&h=300&fit=crop',
      stats: {
        beforeYield: '28 क्विंटल/एकड़',afterYield: '35 क्विंटल/एकड़',profitIncrease: '₹18,500'
      }
    },
    {
      id: 4,
      name: 'किरण पटेल',nameEn: 'Kiran Patel',location: 'गुजरात, भारत',locationEn: 'Gujarat, India',crop: 'मूंगफली',cropEn: 'Groundnut',yieldIncrease: '+30%',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',testimonial: `मिट्टी की जांच और मौसम के आधार पर सलाह से मेरी मूंगफली की खेती में बहुत फायदा हुआ है।`,testimonialEn: `Soil testing and weather-based advice has greatly benefited my groundnut farming.`,videoThumbnail: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop',
      stats: {
        beforeYield: '20 क्विंटल/एकड़',afterYield: '26 क्विंटल/एकड़',profitIncrease: '₹20,000'
      }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4"
          >
            Real Farmers, Real Results
          </motion.h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Listen to success stories from farmers across India who transformed their yields with AgriAssist
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video/Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-brand-xl">
                <img 
                  src={currentTestimonial?.videoThumbnail}
                  alt={`${currentTestimonial?.nameEn} farming`}
                  className="w-full h-80 object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Icon name="Play" size={32} className="text-primary ml-1" />
                  </motion.button>
                </div>

                {/* Language Toggle */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 rounded-lg px-3 py-1 text-sm font-medium">
                    हिंदी
                  </div>
                </div>

                {/* Farmer Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={currentTestimonial?.avatar}
                        alt={currentTestimonial?.nameEn}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-text-primary">
                          {currentTestimonial?.name}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {currentTestimonial?.location}
                        </p>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-lg font-bold text-green-600">
                          {currentTestimonial?.yieldIncrease}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {currentTestimonial?.cropEn}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Quote */}
                  <div className="relative">
                    <Icon name="Quote" size={40} className="text-green-200 absolute -top-2 -left-2" />
                    <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed pl-8">
                      {currentTestimonial?.testimonial}
                    </blockquote>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 bg-surface rounded-xl p-6">
                    <div className="text-center">
                      <p className="text-sm text-text-secondary mb-1">पहले</p>
                      <p className="font-bold text-text-primary">
                        {currentTestimonial?.stats?.beforeYield}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-text-secondary mb-1">बाद में</p>
                      <p className="font-bold text-green-600">
                        {currentTestimonial?.stats?.afterYield}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-text-secondary mb-1">अतिरिक्त लाभ</p>
                      <p className="font-bold text-accent">
                        {currentTestimonial?.stats?.profitIncrease}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    iconName="ChevronLeft"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    iconName="ChevronRight"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    iconName={isAutoPlaying ? "Pause" : "Play"}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Testimonials Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {testimonials?.slice(0, 3)?.map((testimonial, index) => (
              <div 
                key={testimonial?.id}
                className={`bg-surface rounded-xl p-6 border transition-all cursor-pointer ${
                  index === currentIndex 
                    ? 'border-primary shadow-brand-md' 
                    : 'border-green-200 hover:border-green-300'
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img 
                    src={testimonial?.avatar}
                    alt={testimonial?.nameEn}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-text-primary text-sm">
                      {testimonial?.nameEn}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {testimonial?.locationEn}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-green-600 font-bold text-sm">
                      {testimonial?.yieldIncrease}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary line-clamp-2">
                  {testimonial?.testimonialEn}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;