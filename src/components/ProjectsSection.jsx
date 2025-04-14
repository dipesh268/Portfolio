
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import '../index.css'

const ProjectsSection = () => {
  const projects = [
    {
      title: "RideX",
      description: "A Ola/Uber clone application with real-time ride tracking, user authentication, payment integration, and driver management system.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express", "LeafLet Map"],
      githubLink: "https://github.com/dipesh268/ridex",
      liveLink: "#"
    },
    {
      title: "Restaurant Management System",
      description: "A comprehensive solution for restaurants with order management, inventory tracking, staff management, and customer analytics.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubLink: "https://github.com/dipesh268/restaurant-management-system",
      liveLink: "#"
    },
    {
      title: "Payroll Management System",
      description: "A PHP-based payroll system that handles employee salary calculations, tax deductions, attendance tracking, and report generation.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
      githubLink: "https://github.com/dipesh268/payroll-management-system",
      liveLink: "#"
    },
    {
      title: "Electric Shop Management",
      description: "An ASP.NET application for managing electronic shop inventory, sales, customer data, and generating invoices and reports.",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80",
      technologies: ["ASP.NET", "C#", "MS SQL Server", "Bootstrap", "jQuery"],
      githubLink: "https://github.com/dipesh268/electric-shop-management",
      liveLink: "#"
    },
    {
      title: "Instagram Scraper",
      description: "A tool that can search Instagram profiles, collect follower data, and analyze posts with customizable parameters.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/dipesh268/instagram-scraper",
      liveLink: "#"
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "A comprehensive dashboard that aggregates and visualizes social media metrics across various platforms.",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/dipesh268/social-media-analytics",
      liveLink: "#"
    },
    {
      title: "Food Ordering System",
      description: "An online food ordering platform with restaurant listings, menu management, order tracking, and payment integration.",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      technologies: ["Python", "Django", "SQLite", "JavaScript", "Bootstrap"],
      githubLink: "https://github.com/dipesh268/food-ordering-system"
    },
    {
      title: "Net Banking System",
      description: "A secure online banking solution with transaction management, account details, fund transfers, and statement generation.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      technologies: ["ASP.NET", "C#", "MS SQL Server"],
      githubLink: "https://github.com/dipesh268/net-banking-system",
      liveLink: "#"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        <span className="text-portfolio-accent">03.</span> Some Things I've Built
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {currentProjects.map((project, index) => (
          <Card 
            key={index} 
            className="group overflow-hidden bg-portfolio-navy border-portfolio-navy hover:border-portfolio-accent transition-all duration-300 hover:shadow-xl hover:shadow-portfolio-accent/10"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-portfolio-accent/30 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-portfolio-lightest group-hover:text-portfolio-accent transition-colors">
                {project.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="text-portfolio-secondary mb-4 line-clamp-3">
                {project.description}
              </CardDescription>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs bg-portfolio-background px-2 py-1 rounded-md text-portfolio-lightest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between pt-0">
              <div className="flex gap-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-portfolio-lightest hover:text-portfolio-accent transition-colors"
                  title="GitHub Repository"
                >
                  <Github size={20} />
                </a>
                
                  
              </div>
              <Button 
                variant="link" 
                className="text-portfolio-accent p-0 h-auto"
                onClick={() => window.open(project.liveLink, '_blank')}
              >
                {/* View Project <ChevronRight className="ml-1 h-4 w-4" /> */}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={prevPage} 
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            />
          </PaginationItem>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink 
                onClick={() => goToPage(page)} 
                isActive={page === currentPage}
                className="cursor-pointer"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          <PaginationItem>
            <PaginationNext 
              onClick={nextPage} 
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default ProjectsSection;
