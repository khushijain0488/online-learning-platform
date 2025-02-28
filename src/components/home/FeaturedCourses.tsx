import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CourseCard from '../common/CourseCard';
import { courses } from '../../data/mockData';

const FeaturedCourses = () => {
  // Get the first 4 courses as featured
  const featuredCourses = courses.slice(0, 4);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
          <Link 
            to="/courses" 
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium"
          >
            View All Courses
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;