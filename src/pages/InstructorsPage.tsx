import React from 'react';
import { Search } from 'lucide-react';
import InstructorCard from '../components/common/InstructorCard';
import { instructors, courses } from '../data/mockData';

const InstructorsPage: React.FC = () => {
  // Calculate course and student counts for each instructor
  const instructorStats = instructors.map(instructor => {
    const instructorCourses = courses.filter(course => course.instructor.id === instructor.id);
    const courseCount = instructorCourses.length;
    const studentCount = instructorCourses.reduce((total, course) => total + course.totalStudents, 0);
    
    return {
      instructor,
      courseCount,
      studentCount
    };
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Instructors</h1>
          <p className="text-gray-600">
            Learn from industry experts with years of experience in their fields
          </p>
        </div>
        
        <div className="mb-8">
          <div className="relative max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search for instructors"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {instructorStats.map(({ instructor, courseCount, studentCount }) => (
            <InstructorCard 
              key={instructor.id}
              instructor={instructor}
              courseCount={courseCount}
              studentCount={studentCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;