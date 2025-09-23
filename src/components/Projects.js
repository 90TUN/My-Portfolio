import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Banking Dashboard Enhancements',
      company: 'Stanbic IBTC',
      description: 'Designed customer outreach dashboards, generated weekly insights, and created UI workflows for banking services.',
      tech: 'React, Tailwind, Data Visualization',
      image: '/api/placeholder/400/250'
    },
    {
      name: 'DexterPro Web Platform',
      company: 'DexterPro Technologies',
      description: 'Built responsive web applications, integrated APIs, and ensured pixel-perfect Figma-to-code transitions.',
      tech: 'React, Tailwind',
      image: '/api/placeholder/400/250'
    },
    {
      name: 'Military Training Web Portal',
      company: 'Nigeria Armed Forces',
      description: 'Built education platform using HTML, CSS, Bootstrap for military trainees.',
      tech: 'HTML, CSS, Bootstrap, MySQL',
      image: '/api/placeholder/400/250'
    },
    {
      name: 'Taxpayer Entertainment Profiling System',
      company: 'Lagos IRS',
      description: 'Helped analyze tax records, discrepancies, and digital reporting tools.',
      tech: 'MySQL, Excel, Web Reporting Tools',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/30 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-400">{project.company}</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer" />
                </div>
                
                <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-gray-400">Project Screenshot</div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-xs text-purple-400 font-medium">{project.tech}</div>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-blue-400' : 'bg-gray-600'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;