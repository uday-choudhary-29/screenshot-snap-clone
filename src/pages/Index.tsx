
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CompaniesSection from '../components/CompaniesSection';
import CategoriesSection from '../components/CategoriesSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CompaniesSection />
      <CategoriesSection />
    </div>
  );
};

export default Index;
