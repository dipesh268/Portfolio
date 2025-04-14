
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProfessionalSkillsSection from '../components/ProfessionalSkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import '../index.css'

const Index = () => {
  return (
    <div className="bg-portfolio-background text-portfolio-text">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProfessionalSkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
