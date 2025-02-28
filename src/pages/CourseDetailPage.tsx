import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Users, BookOpen, ChevronDown, ChevronUp, Play, Award, CheckCircle, ShoppingCart, Heart } from 'lucide-react';
import { courses, modules, reviews } from '../data/mockData';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'reviews'>('overview');
  
  const course = courses.find(c => c.id === courseId);
  const courseModules = modules.filter(m => m.courseId === courseId);
  const courseReviews = reviews.filter(r => r.courseId === courseId);
  
  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
        <p className="text-gray-600 mb-8">The course you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/courses"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Browse Courses
        </Link>
      </div>
    );
  }
  
  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };
  
  const totalLessons = courseModules.reduce((total, module) => total + module.lessons.length, 0);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Course Header */}
      <div className="bg-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-2">
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-indigo-700 text-white">
                  {course.category}
                </span>
                <span className="ml-2 text-sm text-indigo-200">
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-indigo-100 mb-6">{course.description}</p>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{course.rating} ({courseReviews.length} reviews)</span>
                </div>
                <div className="flex items-center mr-4">
                  <Users className="h-5 w-5 text-indigo-300" />
                  <span className="ml-1">{course.totalStudents} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-indigo-300" />
                  <span className="ml-1">{course.duration}</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name} 
                  className="h-10 w-10 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm">Created by</p>
                  <Link to={`/instructors/${course.instructor.id}`} className="font-medium hover:underline">
                    {course.instructor.name}
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={course.thumbnail} 
                alt={course.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-gray-900">${course.price.toFixed(2)}</span>
                </div>
                
                <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700 mb-3 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Enroll Now
                </button>
                
                <button className="w-full bg-white text-indigo-600 py-3 px-4 rounded-md font-medium border border-indigo-600 hover:bg-indigo-50 mb-6 flex items-center justify-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </button>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{totalLessons} lessons</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Full lifetime access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Access on mobile and TV</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Certificate of completion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'curriculum'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Curriculum
              </button>
              <button
                onClick={() => setActiveTab('instructor')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'instructor'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Instructor
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'reviews'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reviews
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">About This Course</h2>
                <p className="text-gray-700 mb-6">{course.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Understand the core concepts of {course.category}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Build real-world projects from scratch</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Master advanced techniques and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Solve common problems and challenges</span>
                  </li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                  <li>Basic understanding of {course.category.toLowerCase()}</li>
                  <li>A computer with internet access</li>
                  <li>Enthusiasm and willingness to learn</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Who This Course is For</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Students who want to learn {course.category}</li>
                  <li>Professionals looking to upgrade their skills</li>
                  <li>Anyone interested in {course.tags.join(', ')}</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'curriculum' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Course Content</h2>
                  <div className="text-sm text-gray-500">
                    {totalLessons} lessons • {course.duration} total
                  </div>
                </div>
                
                <div className="border rounded-md divide-y">
                  {courseModules.map((module) => (
                    <div key={module.id} className="overflow-hidden">
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                      >
                        <div className="flex items-center">
                          {expandedModules.includes(module.id) ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 mr-2" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 mr-2" />
                          )}
                          <span className="font-medium">{module.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {module.lessons.length} lessons
                        </span>
                      </button>
                      
                      {expandedModules.includes(module.id) && (
                        <div className="bg-gray-50 px-4 py-2 space-y-2">
                          {module.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center py-2">
                              <Play className="h-4 w-4 text-gray-400 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{lesson.title}</p>
                                <p className="text-xs text-gray-500">{lesson.duration}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'instructor' && (
              <div>
                <div className="flex items-start mb-6">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name} 
                    className="h-16 w-16 rounded-full mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{course.instructor.name}</h2>
                    <p className="text-gray-500 mb-2">{course.instructor.role.charAt(0).toUpperCase() + course.instructor.role.slice(1)}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="mr-3">4.8 Instructor Rating</span>
                      <Users className="h-4 w-4 mr-1" />
                      <span className="mr-3">2,500+ Students</span>
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>15 Courses</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Instructor</h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Courses by {course.instructor.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {courses
                      .filter(c => c.instructor.id === course.instructor.id && c.id !== course.id)
                      .slice(0, 2)
                      .map(c => (
                        <div key={c.id} className="flex items-start">
                          <img 
                            src={c.thumbnail} 
                            alt={c.title} 
                            className="h-16 w-24 object-cover rounded mr-3"
                          />
                          <div>
                            <Link to={`/courses/${c.id}`} className="font-medium text-gray-900 hover:text-indigo-600">
                              {c.title}
                            </Link>
                            <div className="flex items-center text-sm text-gray-500">
                              <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                              <span>{c.rating}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Student Reviews</h2>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-gray-900 mr-2">{course.rating}</div>
                    <div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">{courseReviews.length} reviews</p>
                    </div>
                  </div>
                </div>
                
                {courseReviews.length > 0 ? (
                  <div className="space-y-6">
                    {courseReviews.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                        <div className="flex items-start">
                          <img 
                            src={review.userAvatar} 
                            alt={review.userName} 
                            className="h-10 w-10 rounded-full mr-3"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900">{review.userName}</h4>
                            <div className="flex items-center">
                              <div className="flex mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i}
                                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">
                                {new Date(review.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No reviews yet for this course.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;