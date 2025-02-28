import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: string;
  icon: React.ReactNode;
  count: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, icon, count }) => {
  return (
    <Link to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:bg-indigo-50">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-indigo-100 rounded-full mb-4 text-indigo-600">
            {icon}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">{category}</h3>
          <p className="text-sm text-gray-500">{count} courses</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;