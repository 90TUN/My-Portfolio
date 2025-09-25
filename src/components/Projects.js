import React, { useState } from 'react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      name: 'Banking Dashboard Enhancements',
      company: 'Stanbic IBTC',
      description: 'Designed customer outreach dashboards, generated weekly insights, and created UI workflows for banking services. This comprehensive project involved creating intuitive user interfaces that helped bank employees better understand customer data and improve their outreach strategies.',
      tech: ['React', 'Tailwind', 'Data Visualization', 'Chart.js'],
      year: '2024',
      image: 'Project Screenshot Coming Soon'
    },
    {
      name: 'DexterPro Web Platform',
      company: 'DexterPro Technologies',
      description: 'Built responsive web applications, integrated APIs, and ensured pixel-perfect Figma-to-code transitions. This project showcased modern web development practices with seamless API integrations and beautiful, responsive user interfaces.',
      tech: ['React', 'Tailwind', 'API Integration', 'Figma'],
      year: '2023',
      image: 'Project Screenshot Coming Soon'
    },
    {
      name: 'Military Training Web Portal',
      company: 'Nigeria Armed Forces',
      description: 'Built education platform using HTML, CSS, Bootstrap for military trainees. This platform provided comprehensive training modules, progress tracking, and interactive learning experiences for military personnel.',
      tech: ['HTML', 'CSS', 'Bootstrap', 'MySQL'],
      year: '2023',
      image: 'Project Screenshot Coming Soon'
    },
    {
      name: 'Taxpayer Entertainment Profiling System',
      company: 'Lagos IRS',
      description: 'Helped analyze tax records, discrepancies, and digital reporting tools. This system streamlined tax analysis processes and provided comprehensive reporting capabilities for improved tax administration.',
      tech: ['MySQL', 'Excel', 'Reporting Tools', 'Data Analysis'],
      year: '2022',
      image: 'Project Screenshot Coming Soon'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section id="projects" className="min-h-screen py-24 px-4 bg-white flex items-center">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600">
            Explore my latest work and technical achievements
          </p>
        </div>
        
        {/* Single Project Display */}
        <div className="bg-white border-2 border-gray-200 overflow-hidden hover:border-black transition-colors duration-300 shadow-lg">
          {/* Top Section: Project Name & Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Project Name (Top Left) */}
            <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 lg:border-r border-gray-200">
              <div className="mb-2 lg:mb-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2 leading-tight">
                  {currentProjectData.name}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
                  {currentProjectData.company} • {currentProjectData.year}
                </p>
              </div>
            </div>
            
            {/* Project Description (Top Right) */}
            <div className="p-4 sm:p-6 lg:p-8 flex items-center border-t lg:border-t-0 border-gray-200">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {currentProjectData.description}
              </p>
            </div>
          </div>
          
          {/* Project Screenshot Section */}
          <div className="relative">
            <div className="w-full h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-t border-b border-gray-200">
              <div className="text-center px-4">
                <div className="text-3xl sm:text-4xl lg:text-6xl mb-2 lg:mb-4 text-gray-400">📱</div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium">
                  {currentProjectData.image}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 lg:mt-2">
                  Live demo available upon request
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Section: Tech Stack & Navigation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Tech Stack (Bottom Left) */}
            <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 lg:border-r border-gray-200 border-t lg:border-t-0">
              <h4 className="text-base sm:text-lg font-semibold text-black mb-3 lg:mb-4">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {currentProjectData.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1.5 lg:px-4 lg:py-2 bg-black text-white text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Navigation Controls (Bottom Right) */}
            <div className="p-4 sm:p-6 lg:p-8 border-t border-gray-200">
              {/* Navigation Arrows & Dots */}
              <div className="flex items-center justify-between mb-4 lg:mb-0">
                <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                  {/* Previous Button */}
                  <button 
                    onClick={prevProject}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black text-white hover:bg-gray-800 transition-colors duration-300 text-lg sm:text-xl"
                    aria-label="Previous project"
                  >
                    ◀
                  </button>
                  
                  {/* Project Dots */}
                  <div className="flex space-x-2 sm:space-x-3">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToProject(index)}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                          index === currentProject 
                            ? 'bg-black scale-125' 
                            : 'bg-gray-300 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Next Button */}
                  <button 
                    onClick={nextProject}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black text-white hover:bg-gray-800 transition-colors duration-300 text-lg sm:text-xl"
                    aria-label="Next project"
                  >
                    ▶
                  </button>
                </div>
                
                {/* Project Link */}
                <div className="flex items-center">
                  <a 
                    href="#" 
                    className="group flex items-center space-x-2 lg:space-x-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 hover:bg-black text-gray-700 hover:text-white transition-all duration-300 border hover:border-black"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Live Project"
                  >
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium hidden sm:inline">View Live</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Project {currentProject + 1} of {projects.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;