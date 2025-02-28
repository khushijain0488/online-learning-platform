import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCourses from '../components/home/FeaturedCourses';
import Categories from '../components/home/Categories';
import Instructors from '../components/home/Instructors';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedCourses />
      <Categories />
      <Features />
      <Stats />
      <Instructors />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;