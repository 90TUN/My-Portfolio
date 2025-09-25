import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hello, I'm Ayomidotun";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 150); 

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-40 sm:pt-32 px-4 bg-white relative overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 z-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-1 h-1 sm:w-2 sm:h-2 bg-black opacity-20 animate-pulse"></div>
        <div className="hidden sm:block absolute top-32 right-16 w-1 h-1 bg-gray-400 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-64 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 sm:w-2 sm:h-2 bg-gray-300 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="hidden sm:block absolute top-48 right-20 w-1 h-1 bg-black opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional Floating Elements */}
        <div className="hidden sm:block absolute top-16 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-gray-200 opacity-25 animate-bounce" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute top-72 left-16 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-black opacity-35 animate-pulse" style={{ animationDelay: '3.2s' }}></div>
        <div className="absolute bottom-64 left-1/2 w-1 h-1 sm:w-2 sm:h-2 bg-gray-400 opacity-30 animate-bounce" style={{ animationDelay: '1.8s' }}></div>
        <div className="hidden md:block absolute top-40 left-3/4 w-1 h-1 bg-black opacity-45 animate-pulse" style={{ animationDelay: '2.4s' }}></div>
        <div className="hidden sm:block absolute bottom-20 right-16 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-300 opacity-20 animate-bounce" style={{ animationDelay: '3.6s' }}></div>
        <div className="hidden md:block absolute top-80 right-1/4 w-1 h-1 bg-black opacity-50 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="hidden sm:block absolute bottom-80 left-20 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 opacity-35 animate-bounce" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-56 right-32 w-1 h-1 sm:w-2 sm:h-2 bg-black opacity-25 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="hidden sm:block absolute bottom-48 right-12 w-1 h-1 bg-gray-300 opacity-40 animate-bounce" style={{ animationDelay: '2.6s' }}></div>
        
        {/* Hexagonal Tech Elements */}
        <div className="hidden sm:block absolute top-28 left-2/3 w-3 h-3 sm:w-4 sm:h-4 border border-gray-300 opacity-30 rotate-45 animate-pulse" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 sm:w-3 sm:h-3 border border-black opacity-20 rotate-12 animate-pulse" style={{ animationDelay: '3.8s' }}></div>
        <div className="hidden md:block absolute top-44 right-28 w-2 h-2 border border-gray-400 opacity-35 -rotate-45 animate-pulse" style={{ animationDelay: '2.2s' }}></div>
        
        {/* Animated Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-60 sm:opacity-100" xmlns="http://www.w3.org/2000/svg">
          {/* Top Left Circuit */}
          <path
            d="M50 100 L200 100 L200 150 L300 150"
            stroke="#e5e5e5"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
            className="animate-pulse"
          />
          <circle cx="200" cy="100" r="3" fill="#d1d5db" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="200" cy="150" r="2" fill="#9ca3af" className="animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Top Right Circuit */}
          <path
            d="M500 80 L650 80 L650 120 L750 120"
            stroke="#e5e5e5"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
          <circle cx="650" cy="80" r="2" fill="#d1d5db" className="animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Bottom Circuit */}
          <path
            d="M100 400 L250 400 L250 450 L400 450 L400 500"
            stroke="#e5e5e5"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDelay: '2.5s' }}
          />
          <circle cx="250" cy="400" r="2.5" fill="#9ca3af" className="animate-pulse" style={{ animationDelay: '3s' }} />
          <circle cx="400" cy="450" r="2" fill="#d1d5db" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
          
          {/* Extended Circuit Network */}
          <path
            d="M80 200 L180 200 L180 250 L280 250 L280 300 L380 300"
            stroke="#e5e5e5"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
            className="animate-pulse"
            style={{ animationDelay: '1.8s' }}
          />
          <circle cx="180" cy="200" r="3" fill="#000" opacity="0.3" className="animate-pulse" style={{ animationDelay: '2.2s' }} />
          <circle cx="280" cy="250" r="2" fill="#9ca3af" className="animate-pulse" style={{ animationDelay: '2.8s' }} />
          <circle cx="280" cy="300" r="4" fill="#d1d5db" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
          
          {/* Vertical Circuit Lines */}
          <path
            d="M120 60 L120 180 L170 180 L170 240"
            stroke="#e5e5e5"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDelay: '3.4s' }}
          />
          <circle cx="120" cy="180" r="2.5" fill="#9ca3af" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          
          <path
            d="M680 120 L680 200 L730 200 L730 280 L780 280"
            stroke="#e5e5e5"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDelay: '2.1s' }}
          />
          <circle cx="680" cy="200" r="3" fill="#000" opacity="0.2" className="animate-pulse" style={{ animationDelay: '4.2s' }} />
          <circle cx="730" cy="200" r="2" fill="#d1d5db" className="animate-pulse" style={{ animationDelay: '1.9s' }} />
          
          {/* Cross Circuit Connections */}
          <path
            d="M300 120 L450 120 L450 180 L580 180 L580 240"
            stroke="#e5e5e5"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: '3.1s' }}
          />
          <circle cx="450" cy="120" r="2" fill="#9ca3af" className="animate-pulse" style={{ animationDelay: '1.7s' }} />
          <circle cx="450" cy="180" r="3" fill="#000" opacity="0.25" className="animate-pulse" style={{ animationDelay: '3.8s' }} />
          <circle cx="580" cy="180" r="2.5" fill="#d1d5db" className="animate-pulse" style={{ animationDelay: '2.4s' }} />
          
          {/* Diagonal Tech Lines */}
          <path
            d="M150 320 L300 180 L450 240 L600 120"
            stroke="#e5e5e5"
            strokeWidth="0.8"
            fill="none"
            opacity="0.3"
            className="animate-pulse"
            style={{ animationDelay: '4.5s' }}
          />
          
          <path
            d="M550 320 L420 220 L320 280 L180 160"
            stroke="#d1d5db"
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDelay: '2.7s' }}
          />
          
          {/* Complex Circuit Junctions */}
          <g className="animate-pulse" style={{ animationDelay: '1.6s' }}>
            <path d="M480 160 L520 160 L520 200 L560 200" stroke="#e5e5e5" strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M500 140 L500 180" stroke="#e5e5e5" strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="500" cy="160" r="4" fill="none" stroke="#9ca3af" strokeWidth="1" opacity="0.6" />
            <circle cx="520" cy="160" r="2" fill="#d1d5db" />
            <circle cx="520" cy="200" r="2" fill="#9ca3af" />
          </g>
          
          <g className="animate-pulse" style={{ animationDelay: '3.6s' }}>
            <path d="M200 280 L240 280 L240 320 L280 320" stroke="#e5e5e5" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M220 260 L220 300" stroke="#e5e5e5" strokeWidth="1" fill="none" opacity="0.4" />
            <circle cx="220" cy="280" r="3" fill="none" stroke="#000" strokeWidth="1" opacity="0.3" />
            <circle cx="240" cy="280" r="1.5" fill="#9ca3af" />
            <circle cx="240" cy="320" r="2" fill="#d1d5db" />
          </g>
          
          {/* Floating Data Particles */}
          <g className="animate-pulse" style={{ animationDelay: '1.2s' }}>
            <rect x="80" y="200" width="4" height="1" fill="#e5e5e5" opacity="0.6" />
            <rect x="90" y="200" width="2" height="1" fill="#e5e5e5" opacity="0.6" />
            <rect x="96" y="200" width="6" height="1" fill="#e5e5e5" opacity="0.6" />
          </g>
          
          <g className="animate-pulse" style={{ animationDelay: '2.8s' }}>
            <rect x="600" y="300" width="3" height="1" fill="#d1d5db" opacity="0.5" />
            <rect x="608" y="300" width="5" height="1" fill="#d1d5db" opacity="0.5" />
            <rect x="618" y="300" width="2" height="1" fill="#d1d5db" opacity="0.5" />
          </g>
        </svg>
        
        {/* Floating Code Blocks */}
        <div className="hidden sm:block absolute top-24 right-32 opacity-30">
          <div className="text-xs font-mono text-gray-400 animate-pulse" style={{ animationDelay: '1.8s' }}>
            {'<div>'}
          </div>
        </div>
        
        <div className="absolute bottom-32 left-24 opacity-25">
          <div className="text-xs sm:text-xs font-mono text-gray-400 animate-pulse" style={{ animationDelay: '3.2s' }}>
            {'{...}'}
          </div>
        </div>
        
        <div className="hidden md:block absolute top-1/3 right-12 opacity-20">
          <div className="text-xs font-mono text-gray-400 animate-pulse" style={{ animationDelay: '2.4s' }}>
            {'()=>'}
          </div>
        </div>
        
        {/* Additional Code Elements */}
        <div className="absolute top-16 left-20 opacity-35">
          <div className="text-xs font-mono text-black animate-pulse" style={{ animationDelay: '4.1s' }}>
            {'const'}
          </div>
        </div>
        
        <div className="hidden sm:block absolute bottom-24 right-20 opacity-25">
          <div className="text-xs font-mono text-gray-500 animate-pulse" style={{ animationDelay: '1.3s' }}>
            {'useState'}
          </div>
        </div>
        
        <div className="absolute top-2/3 left-12 opacity-30">
          <div className="text-xs font-mono text-gray-400 animate-pulse" style={{ animationDelay: '3.7s' }}>
            {'return'}
          </div>
        </div>
        
        <div className="hidden md:block absolute top-40 left-2/3 opacity-20">
          <div className="text-xs font-mono text-black animate-pulse" style={{ animationDelay: '2.9s' }}>
            {'function'}
          </div>
        </div>
        
        <div className="hidden sm:block absolute bottom-40 left-1/4 opacity-25">
          <div className="text-xs font-mono text-gray-500 animate-pulse" style={{ animationDelay: '0.9s' }}>
            {'useEffect'}
          </div>
        </div>
        
        <div className="hidden md:block absolute top-52 right-1/4 opacity-30">
          <div className="text-xs font-mono text-gray-400 animate-pulse" style={{ animationDelay: '3.5s' }}>
            {'await'}
          </div>
        </div>
        
        <div className="hidden sm:block absolute bottom-16 left-1/3 opacity-20">
          <div className="text-xs font-mono text-black animate-pulse" style={{ animationDelay: '2.1s' }}>
            {'export'}
          </div>
        </div>
        
        <div className="hidden md:block absolute top-36 right-1/3 opacity-35">
          <div className="text-xs font-mono text-gray-500 animate-pulse" style={{ animationDelay: '1.6s' }}>
            {'import'}
          </div>
        </div>
        
        {/* Binary Code Streams */}
        <div className="hidden md:block absolute top-20 left-1/2 opacity-15">
          <div className="text-xs font-mono text-gray-400 animate-pulse" style={{ animationDelay: '4.3s' }}>
            {'101010'}
          </div>
        </div>
        
        <div className="hidden sm:block absolute top-60 left-16 opacity-25">
          <div className="text-xs font-mono text-gray-500 animate-pulse" style={{ animationDelay: '3.9s' }}>
            {'001101'}
          </div>
        </div>
        
        {/* Grid Pattern */}
        <div className="hidden md:block absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="border-r border-gray-200 last:border-r-0"></div>
            ))}
          </div>
        </div>
        
        {/* Matrix-Style Falling Elements */}
        <div className="hidden lg:block absolute top-0 left-1/4 opacity-10">
          <div className="flex flex-col space-y-2 animate-pulse" style={{ animationDelay: '5s' }}>
            <div className="text-xs font-mono text-green-600">{'0'}</div>
            <div className="text-xs font-mono text-green-600">{'1'}</div>
            <div className="text-xs font-mono text-green-600">{'0'}</div>
          </div>
        </div>
        
        <div className="absolute top-0 right-1/3 opacity-10">
          <div className="flex flex-col space-y-2 animate-pulse" style={{ animationDelay: '6.2s' }}>
            <div className="text-xs font-mono text-blue-600">{'▲'}</div>
            <div className="text-xs font-mono text-blue-600">{'●'}</div>
            <div className="text-xs font-mono text-blue-600">{'◆'}</div>
          </div>
        </div>
        
        {/* Scanning Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20 animate-pulse" 
               style={{ top: '20%', animationDelay: '2.8s', animationDuration: '3s' }}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-10 animate-pulse" 
               style={{ top: '90%', animationDelay: '1.5s', animationDuration: '5s' }}></div>
        </div>
        
        {/* Radar/Scanner Effect */}
        <div className="absolute top-10 right-10 w-16 h-16 opacity-15">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border border-gray-300 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-2 rounded-full border border-gray-400 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute inset-4 rounded-full border border-gray-500 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-500 rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        
        {/* Data Packets */}
        <div className="absolute bottom-10 left-10 opacity-20">
          <div className="flex space-x-1 animate-pulse" style={{ animationDelay: '3.3s' }}>
            <div className="w-2 h-1 bg-blue-400"></div>
            <div className="w-1 h-1 bg-blue-500"></div>
            <div className="w-3 h-1 bg-blue-300"></div>
            <div className="w-1 h-1 bg-blue-600"></div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-8 opacity-25">
          <div className="flex space-x-1 animate-pulse" style={{ animationDelay: '4.7s' }}>
            <div className="w-1 h-1 bg-purple-400"></div>
            <div className="w-2 h-1 bg-purple-500"></div>
            <div className="w-1 h-1 bg-purple-300"></div>
            <div className="w-3 h-1 bg-purple-600"></div>
          </div>
        </div>
        
        {/* Terminal Cursors */}
        <div className="absolute top-72 right-24 opacity-30">
          <div className="text-lg font-mono text-black animate-pulse" style={{ animationDelay: '2.2s' }}>
            {'_'}
          </div>
        </div>
        
        <div className="absolute bottom-52 left-32 opacity-25">
          <div className="text-lg font-mono text-gray-600 animate-pulse" style={{ animationDelay: '3.8s' }}>
            {'|'}
          </div>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Main Heading with Typing Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-black mb-6 tracking-tight">
          {displayedText}
          <span className={`inline-block w-1 bg-black ml-1 ${isTypingComplete ? 'animate-blink' : 'animate-pulse'}`} style={{ height: '1em' }}></span>
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 font-normal leading-snug"
          data-aos="fade-up"
          data-aos-delay="2000"
        >
          Web Developer & UI Designer
        </p>
        
        {/* Description */}
        <p 
          className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="2200"
        >
          I craft clean, modern web experiences with thoughtful design and efficient code. 
          Passionate about creating digital solutions that make a difference.
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          data-aos="fade-up"
          data-aos-delay="2400"
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-black text-white text-base font-medium cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
          
          <button 
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-black border-2 border-black text-base font-medium cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-0.5"
          >
            View My Work
          </button>
        </div>

        {/* Scroll indicator */}
        <div 
          className="flex flex-col items-center text-gray-400"
          data-aos="fade-in"
          data-aos-delay="2600"
        >
          <span className="text-sm mb-2 text-gray-400">
            Scroll to explore
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;