import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import '../index.css'

const ProfessionalSkillsSection = () => {
  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "JavaScript", icon: "💻" },
        { name: "TypeScript", icon: "📝" },
        { name: "Python", icon: "🐍" },
        { name: "PHP", icon: "🐘" },
        { name: "C#", icon: "♯" },
        { name: "Java", icon: "☕" }
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "React", icon: "⚛️" },
      ]
    },
    {
      name: "Backend & Frameworks",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "Django", icon: "🐍" },
        { name: "ASP.NET", icon: "🔷" },
        { name: "Laravel", icon: "🔺" },
        { name: "WordPress", icon: "📝" },
        { name: "Angular", icon: "🅰️" }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", icon: "🐬" },
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MS SQL Server", icon: "🔲" },
        { name: "Firebase", icon: "🔥" }
      ]
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", icon: "🔄" },
        { name: "VS Code", icon: "💎" },
        { name: "Postman", icon: "📮" },
        { name: "Figma", icon: "🎨" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">
        <span className="text-portfolio-accent">02.</span> Professional Skills
      </h2>
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue={skillCategories[0].name.toLowerCase()}>
          <TabsList className="bg-portfolio-navy mb-8 flex flex-wrap h-auto">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.name} 
                value={category.name.toLowerCase()}
                className="text-portfolio-secondary data-[state=active]:text-portfolio-accent data-[state=active]:border-b-2 data-[state=active]:border-portfolio-accent rounded-none"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name.toLowerCase()}>
              <div className="animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-portfolio-navy p-4 rounded-md flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      <span className="text-2xl mb-2">{skill.icon}</span>
                      <span className="text-portfolio-lightest">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProfessionalSkillsSection;
