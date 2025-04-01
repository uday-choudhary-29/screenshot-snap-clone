
import React from 'react';

const CompaniesSection: React.FC = () => {
  // In a real app, these would be actual company logos
  const companies = Array(5).fill(0);

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-center text-gray-600 text-lg mb-8">
          Companies we helped to find talents
        </h2>
        <div className="flex justify-center gap-10 md:gap-16">
          {companies.map((_, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-gray-200 rounded-md"
              aria-label={`Company ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;
