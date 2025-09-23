import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Web Developer', 'UI Designer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4 bg-black pt-24 overflow-hidden">
      {/* Dark Blue Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-purple-900/30 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-900/20 to-transparent animate-pulse delay-75"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-800/10 via-transparent to-blue-900/20 animate-pulse delay-150"></div>
      
      {/* Tech Lines and Patterns Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        {/* Animated Tech Lines */}
        <div className="absolute top-32 left-10 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute top-52 right-20 w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse delay-75"></div>
        <div className="absolute bottom-60 left-20 w-40 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse delay-150"></div>
        <div className="absolute bottom-40 right-10 w-28 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-pulse delay-300"></div>
        
        {/* Vertical Tech Lines */}
        <div className="absolute top-44 left-32 w-px h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse delay-100"></div>
        <div className="absolute top-60 right-40 w-px h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse delay-200"></div>
        <div className="absolute bottom-52 left-40 w-px h-24 bg-gradient-to-b from-transparent via-blue-300 to-transparent animate-pulse delay-250"></div>
        
        {/* Small Tech Dots */}
        <div className="absolute top-36 left-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-48 right-32 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-75"></div>
        <div className="absolute bottom-48 left-16 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-150"></div>
        <div className="absolute bottom-32 right-24 w-1 h-1 bg-blue-600 rounded-full animate-ping delay-300"></div>
        
        {/* Corner Tech Elements */}
        <div className="absolute top-28 left-16">
          <div className="w-8 h-8 border-l-2 border-t-2 border-blue-400 opacity-60"></div>
        </div>
        <div className="absolute top-28 right-16">
          <div className="w-8 h-8 border-r-2 border-t-2 border-blue-500 opacity-60"></div>
        </div>
        <div className="absolute bottom-16 left-16">
          <div className="w-8 h-8 border-l-2 border-b-2 border-blue-300 opacity-60"></div>
        </div>
        <div className="absolute bottom-16 right-16">
          <div className="w-8 h-8 border-r-2 border-b-2 border-blue-600 opacity-60"></div>
        </div>
        
        {/* Circuit-like patterns */}
        <div className="absolute top-1/3 left-8">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
            <div className="w-8 h-px bg-blue-400 opacity-40"></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full opacity-40"></div>
          </div>
        </div>
        <div className="absolute top-2/3 right-12">
          <div className="flex items-center space-x-1">
            <div className="w-1 h-1 bg-blue-300 rounded-full opacity-40"></div>
            <div className="w-6 h-px bg-blue-300 opacity-40"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto w-full relative z-10">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {/* Placeholder for actual image - replace src with your image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-600">A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-gray-200 mb-2">
            Hi, I'm
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ayomidotun
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Crafting responsive, modern web experiences with clean code and thoughtful design
        </p>
        
        {/* Dynamic Role */}
        <div className="mb-12">
          <div className="text-lg sm:text-xl md:text-2xl">
            <span className="text-gray-400">I am a </span>
            <span className="text-blue-400 font-semibold transition-all duration-500 inline-block">
              {roles[currentRole]}
            </span>
          </div>
          
          {/* Role indicator dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {roles.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentRole ? 'bg-blue-400 scale-125' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Let's Work Together
          </button>
          
          <button 
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto px-8 py-4 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer"
          >
            View My Work
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;