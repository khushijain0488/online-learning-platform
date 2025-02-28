import React from 'react';
import { BookOpen, Award, Video, Users, Clock, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry experts who are passionate about teaching and sharing their knowledge.'
    },
    {
      icon: <Video className="h-8 w-8 text-indigo-600" />,
      title: 'High-Quality Video Content',
      description: 'Enjoy professionally produced video lessons with clear explanations and demonstrations.'
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: 'Learn at Your Own Pace',
      description: 'Access course materials 24/7 and learn on your schedule, at your own comfortable pace.'
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: 'Certificates of Completion',
      description: 'Earn recognized certificates to showcase your new skills to employers or clients.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Community Support',
      description: 'Join a community of learners and instructors to get help, share ideas, and collaborate.'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: 'Accessible Anywhere',
      description: 'Learn on any device - desktop, tablet, or mobile - with our responsive platform.'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EduLearn</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best online learning experience with these key features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;