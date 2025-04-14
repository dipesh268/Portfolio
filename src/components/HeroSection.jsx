
import React from 'react';
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';
import '../index.css'

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 section-container">
      <div className="animate-fade-in">
        <h1 className="text-portfolio-accent mb-4 font-inter text-lg">Hi, my name is</h1>
        <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-lightest mb-2">Dipesh Mundhara.</h2>
        <h3 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-secondary mb-6">I build things for the web.</h3>
        <p className="text-portfolio-secondary max-w-xl mb-8 text-lg">
          I'm a backend developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <Button 
          onClick={scrollToProjects}
          className="bg-transparent border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 px-8 py-6 text-lg rounded-md group"
        >
          Check out my work
          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
