
import React from 'react';
import SearchForm from './SearchForm';

const Hero: React.FC = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 pt-12 pb-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Discover<br />
          more than<br />
          <span className="text-jobblue">5000+ Jobs</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
        <SearchForm />
      </div>
    </div>
  );
};

export default Hero;
