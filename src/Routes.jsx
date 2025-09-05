import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import DeveloperHub from './pages/developer-hub';
import GovernmentSchemes from './pages/government-schemes';
import TechnologyStack from './pages/technology-stack';
import FeaturesDeepDive from './pages/features-deep-dive';
import LiveDemo from './pages/live-demo';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<DeveloperHub />} />
        <Route path="/developer-hub" element={<DeveloperHub />} />
        <Route path="/government-schemes" element={<GovernmentSchemes />} />
        <Route path="/technology-stack" element={<TechnologyStack />} />
        <Route path="/features-deep-dive" element={<FeaturesDeepDive />} />
        <Route path="/live-demo" element={<LiveDemo />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
