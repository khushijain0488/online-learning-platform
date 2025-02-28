import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import InstructorCard from '../common/InstructorCard';
import { instructors, courses } from '../../data/mockData';

const Instructors: React.FC = () => {
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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Top Instructors</h2>
          <Link 
            to="/instructors" 
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium"
          >
            View All Instructors
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  );
};

export default Instructors;