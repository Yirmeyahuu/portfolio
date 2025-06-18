import React from 'react';
import { Link } from 'react-router-dom';

const WebProjects: React.FC = () => {
  const projects = [
    {
      title: "Mabels Point-of-Sale System",
      description: "A streamlined POS solution for managing products, orders, invoices, customers, and payment modes for Mables Café and Restaurant.",
      image: "/img/mabels.png",
      link: "https://yirmeyahuu.github.io/Mabels/",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"]
    },
    {
      title: "Car Inventory System",
      description: "It manages various cars focuses on Creating, Reading, Updating, Archiving.",
      image: "/img/car-inverntory.png",
      link: "https://github.com/Yirmeyahuu/Car-Management-System",
      tech: ["Python", "Django", "Bootstrap", "MySQL"]
    },
    {
      title: "Bacolod Travels",
      description: "A simple website showing the famous Bacolod spots with title and description.",
      image: "/img/bacolod.png",
      link: "https://yirmeyahuu.github.io/Bacolod/",
      tech: ["HTML", "CSS", "JavaScript"]
    }
    // Add more projects as needed
  ];

  return (
    <main className="min-h-screen bg-[#131313] py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <Link 
            to="/"
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-white mb-12 text-center">All Web Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WebProjects;