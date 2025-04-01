
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  isHighlighted?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, count, icon, isHighlighted = false }) => {
  return (
    <div className={`p-6 rounded-xl ${isHighlighted ? 'bg-primary text-white' : 'bg-white text-gray-800'} shadow-sm border hover:shadow-md transition-shadow`}>
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className={`text-sm mb-4 ${isHighlighted ? 'text-white/80' : 'text-gray-500'}`}>
        {count} jobs available
      </p>
      <Link 
        to={`/jobs/category/${title.toLowerCase()}`}
        className={`flex items-center gap-2 ${isHighlighted ? 'text-white font-medium' : 'text-primary font-medium'}`}
      >
        Explore jobs <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default CategoryCard;
