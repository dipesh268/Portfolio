
import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Menu, X, FileText } from 'lucide-react';
import '../index.css'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Resume path - update with your actual resume path
  const resumePath = "https://drive.google.com/file/d/1HzWX2ZGkF4ZmW3dD1E2bOwmasi6UqLPs/view?usp=drive_link";

  const handleResumeClick = () => {
    // You could either open in a new tab or download the PDF
    window.open(resumePath, '_blank');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-portfolio-background/95 backdrop-blur-sm shadow-md py-3' : 'py-5'}`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="text-portfolio-accent font-poppins text-xl font-bold">Portfolio</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="nav-link"
            >
              <span className="text-portfolio-accent mr-1">{`0${index + 1}.`}</span> {link.name}
            </a>
          ))}
          <Button 
            onClick={handleResumeClick}
            className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 flex items-center gap-2"
          >
            <FileText size={16} />
            Resume
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-portfolio-background/95 backdrop-blur-sm pt-24">
          <nav className="flex flex-col items-center space-y-8 p-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-xl font-poppins"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-portfolio-accent mr-1">{`0${index + 1}.`}</span> {link.name}
              </a>
            ))}
            <Button 
              onClick={() => {
                handleResumeClick();
                setIsMenuOpen(false);
              }}
              className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 mt-4 w-full flex items-center justify-center gap-2"
            >
              <FileText size={16} />
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
