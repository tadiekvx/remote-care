import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import BenefitsSection from '../components/BenefitsSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray font-comfortaa">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default HomePage;
