
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import '../index.css'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dipesh268', title: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dipesh-mundhara', title: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/_dipesh36_', title: 'Instagram' }
  ];

  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.title}
            className="text-portfolio-secondary hover:text-portfolio-accent transition-colors"
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
      <p className="text-portfolio-secondary text-sm">
        Designed & Built by Dipesh Mundhara &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
