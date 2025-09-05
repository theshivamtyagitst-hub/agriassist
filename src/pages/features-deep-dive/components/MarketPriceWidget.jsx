import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MarketPriceWidget = () => {
  const [selectedCrop, setSelectedCrop] = useState('rice');
  const [selectedMarket, setSelectedMarket] = useState('delhi');
  const [priceData, setPriceData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);

  const crops = [
    { id: 'rice', name: 'Rice', icon: 'Wheat' },
    { id: 'wheat', name: 'Wheat', icon: 'Wheat' },
    { id: 'cotton', name: 'Cotton', icon: 'Flower' },
    { id: 'sugarcane', name: 'Sugarcane', icon: 'TreePine' }
  ];

  const markets = [
    { id: 'delhi', name: 'Delhi Mandi' },
    { id: 'mumbai', name: 'Mumbai APMC' },
    { id: 'kolkata', name: 'Kolkata Market' },
    { id: 'chennai', name: 'Chennai Mandi' }
  ];

  const mockPriceData = {
    'rice-delhi': {
      current: 2850,
      change: +125,
      data: [
        { date: '01 Jan', price: 2725 },
        { date: '05 Jan', price: 2780 },
        { date: '10 Jan', price: 2820 },
        { date: '15 Jan', price: 2790 },
        { date: '20 Jan', price: 2850 }
      ]
    },
    'wheat-mumbai': {
      current: 2150,
      change: -75,
      data: [
        { date: '01 Jan', price: 2225 },
        { date: '05 Jan', price: 2200 },
        { date: '10 Jan', price: 2180 },
        { date: '15 Jan', price: 2160 },
        { date: '20 Jan', price: 2150 }
      ]
    }
  };

  useEffect(() => {
    const key = `${selectedCrop}-${selectedMarket}`;
    const data = mockPriceData?.[key] || mockPriceData?.['rice-delhi'];
    setPriceData(data?.data);
    setCurrentPrice(data?.current);
    setPriceChange(data?.change);
  }, [selectedCrop, selectedMarket]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="TrendingUp" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary">Live Market Data</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            Real-time Market Prices
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Stay updated with live mandi prices, price trends, and market alerts 
            to make informed selling decisions and maximize your profits.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Crop & Market Selection */}
          <div className="bg-card rounded-xl border border-border p-6 brand-shadow-md">
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-6">
              Select Crop & Market
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Choose Crop
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {crops?.map((crop) => (
                    <button
                      key={crop?.id}
                      onClick={() => setSelectedCrop(crop?.id)}
                      className={`p-3 rounded-lg border text-center smooth-transition ${
                        selectedCrop === crop?.id
                          ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/30 text-text-secondary'
                      }`}
                    >
                      <Icon name={crop?.icon} size={20} className="mx-auto mb-1" />
                      <div className="text-xs font-medium">{crop?.name}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Choose Market
                </label>
                <div className="space-y-2">
                  {markets?.map((market) => (
                    <button
                      key={market?.id}
                      onClick={() => setSelectedMarket(market?.id)}
                      className={`w-full p-3 rounded-lg border text-left smooth-transition ${
                        selectedMarket === market?.id
                          ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/30 text-text-secondary'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{market?.name}</span>
                        {selectedMarket === market?.id && (
                          <Icon name="Check" size={16} className="text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              fullWidth
              iconName="Bell"
              iconPosition="left"
              className="mt-6"
            >
              Set Price Alert
            </Button>
          </div>

          {/* Price Display & Chart */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6 brand-shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-heading font-semibold text-text-primary">
                Price Trends
              </h3>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Clock" size={16} />
                <span>Updated 5 mins ago</span>
              </div>
            </div>

            {/* Current Price Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center md:text-left">
                <div className="text-sm text-text-secondary mb-1">Current Price</div>
                <div className="text-2xl font-bold text-text-primary">
                  {currentPrice ? formatPrice(currentPrice) : '₹0'}
                </div>
                <div className="text-xs text-text-secondary">per quintal</div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="text-sm text-text-secondary mb-1">24h Change</div>
                <div className={`text-xl font-semibold flex items-center justify-center md:justify-start ${
                  priceChange && priceChange > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  <Icon 
                    name={priceChange && priceChange > 0 ? 'TrendingUp' : 'TrendingDown'} 
                    size={16} 
                    className="mr-1" 
                  />
                  {priceChange ? formatPrice(Math.abs(priceChange)) : '₹0'}
                </div>
                <div className="text-xs text-text-secondary">
                  {priceChange && priceChange > 0 ? '+' : ''}{priceChange ? ((priceChange / currentPrice) * 100)?.toFixed(1) : '0'}%
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="text-sm text-text-secondary mb-1">Market Status</div>
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-text-primary">Active</span>
                </div>
                <div className="text-xs text-text-secondary">Open until 6 PM</div>
              </div>
            </div>

            {/* Price Chart */}
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#64748B"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#64748B"
                    fontSize={12}
                    tickFormatter={(value) => `₹${value}`}
                  />
                  <Tooltip 
                    formatter={(value) => [formatPrice(value), 'Price']}
                    labelStyle={{ color: '#1A1A1A' }}
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF', 
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#2D5A3D" 
                    strokeWidth={3}
                    dot={{ fill: '#2D5A3D', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#2D5A3D', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
              <Button
                variant="default"
                iconName="Download"
                iconPosition="left"
                className="flex-1"
              >
                Export Data
              </Button>
              <Button
                variant="outline"
                iconName="Share"
                iconPosition="left"
                className="flex-1"
              >
                Share Prices
              </Button>
              <Button
                variant="outline"
                iconName="Calculator"
                iconPosition="left"
                className="flex-1"
              >
                Profit Calculator
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPriceWidget;