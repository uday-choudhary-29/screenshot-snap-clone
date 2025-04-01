
import React from 'react';
import { Link } from 'react-router-dom';

const PopularSearches: React.FC = () => {
  const popularSearches = [
    'UI Designer',
    'UX Researcher',
    'Android',
    'Admin',
  ];

  return (
    <div className="mt-6 flex gap-2 items-center flex-wrap">
      <span className="text-gray-600 font-medium">Popular:</span>
      {popularSearches.map((search, index) => (
        <React.Fragment key={search}>
          <Link
            to={`/search?q=${encodeURIComponent(search)}`}
            className="text-gray-700 hover:text-primary font-medium"
          >
            {search}
          </Link>
          {index < popularSearches.length - 1 && <span className="text-gray-500">,</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PopularSearches;
