import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const Stats= () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-indigo-400" />,
      value: '50,000+',
      label: 'Students'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-400" />,
      value: '500+',
      label: 'Courses'
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-400" />,
      value: '10,000+',
      label: 'Certificates Issued'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-400" />,
      value: '150+',
      label: 'Countries'
    }
  ];

  return (
    <section className="bg-indigo-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                {stat.icon}
              </div>
              <p className="text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="text-indigo-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;