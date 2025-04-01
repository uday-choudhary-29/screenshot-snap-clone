
import React from 'react';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, BarChart, Clock, DollarSign, Code, Wrench, Briefcase, Users } from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const categories = [
    { title: 'Design', count: 235, icon: <PenTool className="h-6 w-6" /> },
    { title: 'Sales', count: 132, icon: <BarChart className="h-6 w-6" /> },
    { title: 'Marketing', count: 187, icon: <Clock className="h-6 w-6" />, highlighted: true },
    { title: 'Finance', count: 324, icon: <DollarSign className="h-6 w-6" /> },
    { title: 'Technology', count: 621, icon: <Code className="h-6 w-6" /> },
    { title: 'Engineering', count: 142, icon: <Wrench className="h-6 w-6" /> },
    { title: 'Business', count: 345, icon: <Briefcase className="h-6 w-6" /> },
    { title: 'Human Resources', count: 89, icon: <Users className="h-6 w-6" /> },
  ];

  return (
    <div className="py-16 px-6 md:px-12 lg:px-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Explore by category</h2>
        <Link to="/jobs" className="text-primary flex items-center gap-1">
          View all jobs <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            count={category.count}
            icon={category.icon}
            isHighlighted={category.highlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
