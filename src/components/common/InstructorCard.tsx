import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types';

interface InstructorCardProps {
  instructor: User;
  courseCount: number;
  studentCount: number;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ 
  instructor, 
  courseCount, 
  studentCount 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6 text-center">
        <img 
          src={instructor.avatar} 
          alt={instructor.name} 
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-100"
        />
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {instructor.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          {instructor.role.charAt(0).toUpperCase() + instructor.role.slice(1)}
        </p>
        
        <div className="flex justify-center space-x-4 mb-4">
          <div className="text-center">
            <p className="text-xl font-bold text-indigo-600">{courseCount}</p>
            <p className="text-xs text-gray-500">Courses</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-indigo-600">{studentCount}</p>
            <p className="text-xs text-gray-500">Students</p>
          </div>
        </div>
        
        <Link 
          to={`/instructors/${instructor.id}`}
          className="inline-block w-full py-2 px-4 border border-indigo-600 text-indigo-600 rounded-md text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors duration-300"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;