import React from 'react';
import Header from '../../components/ui/Header';
import FeatureHero from './components/FeatureHero';
import CropRecommendationDemo from './components/CropRecommendationDemo';
import MarketPriceWidget from './components/MarketPriceWidget';
import VoiceInterfaceDemo from './components/VoiceInterfaceDemo';
import OfflineModeDemo from './components/OfflineModeDemo';
import GovernmentSchemesNavigator from './components/GovernmentSchemesNavigator';
import CommunityInsights from './components/CommunityInsights';
import TechnicalTransparency from './components/TechnicalTransparency';

const FeaturesDeepDive = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <FeatureHero />
        <CropRecommendationDemo />
        <MarketPriceWidget />
        <VoiceInterfaceDemo />
        <OfflineModeDemo />
        <GovernmentSchemesNavigator />
        <CommunityInsights />
        <TechnicalTransparency />
      </main>
    </div>
  );
};

export default FeaturesDeepDive;