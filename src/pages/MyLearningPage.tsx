import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, CheckCircle, Award } from 'lucide-react';
import { courses, modules } from '../data/mockData';

const MyLearningPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'in-progress' | 'completed' | 'archived'>('in-progress');
  
  // Mock enrolled courses (first 3 courses)
  const enrolledCourses = courses.slice(0, 3);
  
  // Mock progress data
  const progressData = {
    'in-progress': enrolledCourses.slice(0, 2).map(course => ({
      course,
      progress: Math.floor(Math.random() * 70) + 10, // Random progress between 10-80%
      lastAccessed: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toISOString(), // Random date within last week
      nextLesson: {
        title: 'Introduction to CSS',
        duration: '18 min'
      }
    })),
    'completed': [
      {
        course: enrolledCourses[2],
        progress: 100,
        completedDate: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)).toISOString(), // Random date within last month
        certificate: true
      }
    ],
    'archived': []
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Learning</h1>
        
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('in-progress')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'in-progress'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'completed'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setActiveTab('archived')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'archived'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Archived
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'in-progress' && (
              <>
                {progressData['in-progress'].length > 0 ? (
                  <div className="space-y-6">
                    {progressData['in-progress'].map(({ course, progress, lastAccessed, nextLesson }) => (
                      <div key={course.id} className="border rounded-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                          <div className="md:col-span-1">
                            <img 
                              src={course.thumbnail} 
                              alt={course.title} 
                              className="h-full w-full object-cover md:h-40"
                            />
                          </div>
                          <div className="p-4 md:col-span-3">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                              <div>
                                <Link to={`/courses/${course.id}`} className="text-xl font-semibold text-gray-900 hover:text-indigo-600">
                                  {course.title}
                                </Link>
                                <p className="text-sm text-gray-500 mb-2">
                                  {course.instructor.name} • {course.category}
                                </p>
                              </div>
                              <div className="mt-2 md:mt-0 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>Last accessed {new Date(lastAccessed).toLocaleDateString()}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700">Progress</span>
                                <span className="text-sm font-medium text-gray-700">{progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className="bg-indigo-600 h-2.5 rounded-full" 
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                              <div className="flex items-start mb-2 sm:mb-0">
                                <BookOpen className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium text-gray-900">Continue Learning</p>
                                  <p className="text-xs text-gray-500">{nextLesson.title} • {nextLesson.duration}</p>
                                </div>
                              </div>
                              <Link
                                to={`/courses/${course.id}/learn`}
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Continue
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No courses in progress</h3>
                    <p className="text-gray-500 mb-6">Start learning by enrolling in a course</p>
                    <Link
                      to="/courses"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Browse Courses
                    </Link>
                  </div>
                )}
              </>
            )}
            
            {activeTab === 'completed' && (
              <>
                {progressData['completed'].length > 0 ? (
                  <div className="space-y-6">
                    {progressData['completed'].map(({ course, completedDate, certificate }) => (
                      <div key={course.id} className="border rounded-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                          <div className="md:col-span-1">
                            <img 
                              src={course.thumbnail} 
                              alt={course.title} 
                              className="h-full w-full object-cover md:h-40"
                            />
                          </div>
                          <div className="p-4 md:col-span-3">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                              <div>
                                <Link to={`/courses/${course.id}`} className="text-xl font-semibold text-gray-900 hover:text-indigo-600">
                                  {course.title}
                                </Link>
                                <p className="text-sm text-gray-500 mb-2">
                                  {course.instructor.name} • {course.category}
                                </p>
                              </div>
                              <div className="mt-2 md:mt-0 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                                  <span>Completed on {new Date(completedDate).toLocaleDateString()}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                              {certificate && (
                                <div className="flex items-start mb-2 sm:mb-0">
                                  <Award className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">Certificate Earned</p>
                                    <p className="text-xs text-gray-500">You've successfully completed this course</p>
                                  </div>
                                </div>
                              )}
                              <div className="flex space-x-3">
                                <Link
                                  to={`/courses/${course.id}`}
                                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Review Course
                                </Link>
                                {certificate && (
                                  <Link
                                    to={`/certificates/${course.id}`}
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    View Certificate
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No completed courses yet</h3>
                    <p className="text-gray-500 mb-6">Complete a course to earn a certificate</p>
                    <Link
                      to="/courses"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Browse Courses
                    </Link>
                  </div>
                )}
              </>
            )}
            
            {activeTab === 'archived' && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No archived courses</h3>
                <p className="text-gray-500">You haven't archived any courses yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLearningPage;

