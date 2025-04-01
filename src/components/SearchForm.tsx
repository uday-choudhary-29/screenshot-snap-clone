
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PopularSearches from './PopularSearches';

const SearchForm: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded-2xl p-2">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Job title or keyword"
              className="pl-10 h-14 rounded-lg border-gray-200"
            />
          </div>
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Location, Italy"
              className="pl-10 h-14 rounded-lg border-gray-200"
            />
          </div>
          <Button className="h-14 px-6 bg-primary hover:bg-primary-light text-white rounded-lg">
            Search my job
          </Button>
        </div>
      </div>
      <PopularSearches />
    </div>
  );
};

export default SearchForm;
