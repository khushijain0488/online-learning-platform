import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Database, Palette, Smartphone, LineChart, Shield, BookOpen, Briefcase } from 'lucide-react';
import CategoryCard from '../common/CategoryCard';
import { categories, courses } from '../../data/mockData';

const Categories: React.FC = () => {
  // Get course count by category
  const categoryCounts = categories.reduce((acc, category) => {
    const count = courses.filter(course => course.category === category).length;
    return { ...acc, [category]: count };
  }, {} as Record<string, number>);

  // Get top 8 categories
  const topCategories = Object.entries(categoryCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 8)
    .map(([category]) => category);

  // Map category to icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return <Code className="h-6 w-6" />;
      case 'Data Science':
        return <Database className="h-6 w-6" />;
      case 'Design':
        return <Palette className="h-6 w-6" />;
      case 'Mobile Development':
        return <Smartphone className="h-6 w-6" />;
      case 'Machine Learning':
        return <LineChart className="h-6 w-6" />;
      case 'Cybersecurity':
        return <Shield className="h-6 w-6" />;
      case 'Business':
        return <Briefcase className="h-6 w-6" />;
      default:
        return <BookOpen className="h-6 w-6" />;
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Top Categories</h2>
          <Link 
            to="/categories" 
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium"
          >
            All Categories
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {topCategories.map((category) => (
            <CategoryCard 
              key={category}
              category={category}
              icon={getCategoryIcon(category)}
              count={categoryCounts[category]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;