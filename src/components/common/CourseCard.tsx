import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, BookOpen } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/courses/${course.id}`}>
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
            {course.category}
          </span>
          <span className="inline-flex items-center text-sm text-yellow-500">
            <Star className="h-4 w-4 mr-1 fill-current" />
            {course.rating}
          </span>
        </div>
        
        <Link to={`/courses/${course.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600">
            {course.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span className="mr-3">{course.duration}</span>
          <BookOpen className="h-4 w-4 mr-1" />
          <span className="mr-3">{course.totalLessons} lessons</span>
          <Users className="h-4 w-4 mr-1" />
          <span>{course.totalStudents} students</span>
        </div>
        
        <div className="border-t pt-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={course.instructor.avatar} 
              alt={course.instructor.name} 
              className="h-8 w-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-700">{course.instructor.name}</span>
          </div>
          <span className="font-bold text-indigo-600">${course.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;