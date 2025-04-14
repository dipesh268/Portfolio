
import React from 'react';
import img13 from '../assets/img13.jpg'
import '../index.css'

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">
        <span className="text-portfolio-accent">01.</span> About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="mb-4">
            Hello! I'm Dipesh, a Backend developer with a passion for creating things that live on the internet. 
            My interest in web development started back in 2022.
          </p>
          <p className="mb-4">
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, 
            a huge corporation, and a student-led design studio. My main focus these days is building accessible, 
            inclusive products and digital experiences.
          </p>
          <p className="mb-4">
            I also recently launched a course that covers everything you need to build a web app with the 
            Express & React stack.
          </p>
        </div>
        
        <div className="relative group">
          <div className="relative z-10 bg-portfolio-navy overflow-hidden rounded-md">
            <img 
              src={img13} 
              alt="Dipesh`" 
              className="w-full h-auto mix-blend-multiply filter grayscale hover:filter-none transition-all duration-300"
            />
            <div className="absolute inset-0 bg-portfolio-accent/20 hover:bg-transparent transition-all duration-300"></div>
          </div>
          <div className="absolute -inset-1 md:-inset-1.5 border-2 border-portfolio-accent rounded-md -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
