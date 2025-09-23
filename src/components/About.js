import React from 'react';
import { User, Code, Palette, Database, Globe, Award, Download } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, label: 'Clean Code', description: 'Writing maintainable, scalable solutions' },
    { icon: Palette, label: 'UI/UX Design', description: 'Creating beautiful user experiences' },
    { icon: Database, label: 'Data-Driven', description: 'Making informed development decisions' },
    { icon: Globe, label: 'Modern Web', description: 'Using latest technologies & best practices' }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
            
            {/* Profile Image with Enhanced Styling */}
            <div className="relative w-80 h-80 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                <User size={120} className="text-gray-800" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-75 opacity-60"></div>
              <div className="absolute top-8 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-150 opacity-60"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-4"></div>
                <h3 className="text-xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a passionate <span className="text-blue-400 font-semibold">Front-End Developer</span>, 
                <span className="text-purple-400 font-semibold"> UI Designer</span>, and 
                <span className="text-pink-400 font-semibold"> Data Science Enthusiast</span>. 
                I specialize in creating responsive, user-friendly, and visually appealing web applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a problem-solving mindset and adaptability, I am eager to contribute to innovative 
                projects while constantly improving my technical expertise and staying current with 
                industry trends.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-4"></div>
                What I Bring
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="bg-gray-800/20 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                        <highlight.icon size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{highlight.label}</h4>
                        <p className="text-sm text-gray-400">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left">
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/files/DOTUN-CV.pdf';
                  link.download = 'DOTUN-CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Download size={18} className="mr-2 group-hover:animate-bounce" />
                Download CV
              </button>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;