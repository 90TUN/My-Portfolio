import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaWordpress, 
  FaDatabase,
  FaFigma 
} from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {

  const technicalSkills = [
    { name: 'React.js', icon: FaReact },
    { name: 'JavaScript', icon: FaJs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'WordPress', icon: FaWordpress },
    { name: 'MySQL', icon: FaDatabase },
    { name: 'Figma', icon: FaFigma },
    { name: 'Canva', icon: SiCanva }
  ];

  const softSkills = [
    { name: 'Problem Solving', progress: 95 },
    { name: 'Critical Thinking', progress: 90 },
    { name: 'Teamwork', progress: 88 },
    { name: 'Communication', progress: 85 }
  ];



  return (
    <section id="skills" className="min-h-screen py-24 px-4 bg-black flex items-center relative overflow-hidden">
      {/* Animated White Tech Patterns */}
      <div className="absolute inset-0 z-0">
        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white opacity-10 animate-pulse"></div>
        <div className="absolute top-32 right-16 w-1 h-1 bg-gray-300 opacity-15 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-64 left-1/4 w-1.5 h-1.5 bg-white opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-gray-200 opacity-12 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-48 right-20 w-1 h-1 bg-white opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional Floating Elements */}
        <div className="absolute top-16 left-1/3 w-3 h-3 bg-gray-100 opacity-8 animate-bounce" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute top-72 left-16 w-1.5 h-1.5 bg-white opacity-18 animate-pulse" style={{ animationDelay: '3.2s' }}></div>
        <div className="absolute bottom-64 left-1/2 w-2 h-2 bg-gray-300 opacity-15 animate-bounce" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-40 left-3/4 w-1 h-1 bg-white opacity-22 animate-pulse" style={{ animationDelay: '2.4s' }}></div>
        <div className="absolute bottom-20 right-16 w-2.5 h-2.5 bg-gray-200 opacity-10 animate-bounce" style={{ animationDelay: '3.6s' }}></div>
        
        {/* Tech Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Horizontal Circuit Lines */}
          <path
            d="M50 150 L200 150 L200 200 L350 200"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.1"
            className="animate-pulse"
          />
          <circle cx="200" cy="150" r="3" fill="white" opacity="0.15" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="200" cy="200" r="2" fill="white" opacity="0.12" className="animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Vertical Tech Lines */}
          <path
            d="M150 80 L150 180 L200 180 L200 250"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
            opacity="0.08"
            className="animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
          <circle cx="150" cy="180" r="2.5" fill="white" opacity="0.1" className="animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Diagonal Connection Lines */}
          <path
            d="M400 120 L500 120 L500 180 L600 180"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.12"
            className="animate-pulse"
            style={{ animationDelay: '2.5s' }}
          />
          <circle cx="500" cy="120" r="2" fill="white" opacity="0.15" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
          <circle cx="500" cy="180" r="3" fill="white" opacity="0.1" className="animate-pulse" style={{ animationDelay: '3s' }} />
          
          {/* Complex Circuit Junction */}
          <g className="animate-pulse" style={{ animationDelay: '1.8s' }}>
            <path d="M300 300 L350 300 L350 340 L400 340" stroke="white" strokeWidth="0.8" fill="none" opacity="0.1" />
            <path d="M325 280 L325 320" stroke="white" strokeWidth="0.8" fill="none" opacity="0.1" />
            <circle cx="325" cy="300" r="4" fill="none" stroke="white" strokeWidth="1" opacity="0.08" />
            <circle cx="350" cy="300" r="2" fill="white" opacity="0.12" />
            <circle cx="350" cy="340" r="2" fill="white" opacity="0.15" />
          </g>
          
          {/* Data Flow Lines */}
          <path
            d="M80 400 L180 350 L280 400 L380 350"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            opacity="0.06"
            className="animate-pulse"
            style={{ animationDelay: '4s' }}
          />
          
          <path
            d="M500 400 L420 320 L340 380 L260 300"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            opacity="0.08"
            className="animate-pulse"
            style={{ animationDelay: '2.7s' }}
          />
        </svg>
        
        {/* Floating Code Elements */}
        <div className="absolute top-24 right-32 opacity-10">
          <div className="text-xs font-mono text-white animate-pulse" style={{ animationDelay: '1.8s' }}>
            {'</>'}
          </div>
        </div>
        
        <div className="absolute bottom-32 left-24 opacity-8">
          <div className="text-xs font-mono text-gray-200 animate-pulse" style={{ animationDelay: '3.2s' }}>
            {'{API}'}
          </div>
        </div>
        
        <div className="absolute top-1/3 right-12 opacity-12">
          <div className="text-xs font-mono text-white animate-pulse" style={{ animationDelay: '2.4s' }}>
            {'React'}
          </div>
        </div>
        
        <div className="absolute top-16 left-20 opacity-15">
          <div className="text-xs font-mono text-gray-100 animate-pulse" style={{ animationDelay: '4.1s' }}>
            {'JS'}
          </div>
        </div>
        
        <div className="absolute bottom-24 right-20 opacity-10">
          <div className="text-xs font-mono text-white animate-pulse" style={{ animationDelay: '1.3s' }}>
            {'CSS'}
          </div>
        </div>
        
        {/* Binary Streams */}
        <div className="absolute top-60 left-12 opacity-8">
          <div className="text-xs font-mono text-gray-300 animate-pulse" style={{ animationDelay: '3.7s' }}>
            {'101'}
          </div>
        </div>
        
        <div className="absolute bottom-16 left-1/3 opacity-12">
          <div className="text-xs font-mono text-white animate-pulse" style={{ animationDelay: '2.1s' }}>
            {'010'}
          </div>
        </div>
        
        {/* Tech Icons */}
        <div className="absolute top-36 right-1/3 opacity-15">
          <div className="text-sm text-white animate-pulse" style={{ animationDelay: '1.6s' }}>
            {'⚡'}
          </div>
        </div>
        
        <div className="absolute bottom-40 left-1/4 opacity-10">
          <div className="text-sm text-gray-200 animate-pulse" style={{ animationDelay: '0.9s' }}>
            {'⚙️'}
          </div>
        </div>
        
        {/* Network Nodes */}
        <div className="absolute top-20 left-1/2 opacity-12">
          <div className="w-4 h-4 border border-white rounded-full animate-pulse" style={{ animationDelay: '4.3s' }}></div>
        </div>
        
        <div className="absolute bottom-28 right-1/2 opacity-15">
          <div className="w-3 h-3 border border-gray-200 rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
        </div>
        
        {/* Scanning Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-5 animate-pulse" 
               style={{ top: '25%', animationDelay: '5s', animationDuration: '4s' }}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-8 animate-pulse" 
               style={{ top: '70%', animationDelay: '6.2s', animationDuration: '5s' }}></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and essential soft skills
          </p>
        </div>
        
        <div className="flex flex-col gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8 text-center" data-aos="fade-right" data-aos-delay="200">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skill.name} 
                    className="bg-gray-900 border border-gray-700 py-6 px-3 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 hover:border-white group cursor-pointer select-none"
                    data-aos="zoom-in"
                    data-aos-delay={300 + (index * 100)}
                    onClick={() => {
                      console.log(`Clicked on ${skill.name}`);
                    }}
                  >
                    <div className="text-4xl mb-4 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 flex justify-center">
                      <IconComponent />
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-white break-words transition-colors duration-300">
                      {skill.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8 text-center" data-aos="fade-left" data-aos-delay="200">
              Soft Skills
            </h3>
            <div className="bg-gray-900 border border-gray-700 p-6 sm:p-8 md:p-10 hover:shadow-2xl hover:shadow-white/10 transition-shadow duration-300" data-aos="fade-up" data-aos-delay="400">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="mb-8 last:mb-0"
                  data-aos="slide-right"
                  data-aos-delay={600 + (index * 150)}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm sm:text-base font-medium text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 font-mono">
                      {skill.progress}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-800 border border-gray-600 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-2000 ease-out"
                      style={{ width: `${skill.progress}%` }}
                      data-aos="slide-right"
                      data-aos-delay={800 + (index * 150)}
                      data-aos-duration="1500"
                    ></div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    {skill.name === 'Problem Solving' && 'Analytical thinking and creative solutions'}
                    {skill.name === 'Critical Thinking' && 'Logical analysis and decision making'}
                    {skill.name === 'Teamwork' && 'Collaborative development and communication'}
                    {skill.name === 'Communication' && 'Clear documentation and client interaction'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;