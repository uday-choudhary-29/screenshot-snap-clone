
import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-20">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-primary text-white p-2 rounded-md">
          <Phone className="w-5 h-5" />
        </div>
        <span className="text-primary text-2xl font-bold">JobHunty</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-gray-700 font-medium">
          Login
        </Link>
        <Button className="bg-primary hover:bg-primary-light">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
