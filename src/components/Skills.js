import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Bootstrap', icon: '📦' },
    { name: 'WordPress', icon: '📝' },
    { name: 'MySQL', icon: '🛠️' },
    { name: 'Figma', icon: '✨' }
  ];

  const softSkills = [
    { name: 'Problem Solving', progress: 95 },
    { name: 'Critical Thinking', progress: 90 },
    { name: 'Teamwork', progress: 88 },
    { name: 'Communication', progress: 85 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, 
        rootMargin: '-50px'
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-black relative z-10 overflow-hidden">
      {/* Hacking Matrix Background Animation */}
      <div className="absolute inset-0 z-0">
        {/* Matrix Rain Effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          {/* Vertical Code Streams */}
          <div className="absolute top-0 left-10 text-green-400 text-xs font-mono animate-pulse">
            <div className="animate-bounce">01100101</div>
            <div className="animate-bounce delay-75">11010011</div>
            <div className="animate-bounce delay-150">00110101</div>
          </div>
          <div className="absolute top-20 right-20 text-green-500 text-xs font-mono animate-pulse delay-100">
            <div className="animate-bounce delay-200">function()</div>
            <div className="animate-bounce delay-300">var x = 1;</div>
            <div className="animate-bounce delay-400">return x;</div>
          </div>
          <div className="absolute top-40 left-1/3 text-green-300 text-xs font-mono animate-pulse delay-200">
            <div className="animate-bounce delay-500">console.log</div>
            <div className="animate-bounce delay-600">array.map</div>
            <div className="animate-bounce delay-700">async/await</div>
          </div>
          <div className="absolute bottom-40 right-1/3 text-green-400 text-xs font-mono animate-pulse delay-300">
            <div className="animate-bounce delay-100">&lt;div&gt;</div>
            <div className="animate-bounce delay-200">className=</div>
            <div className="animate-bounce delay-300">&lt;/div&gt;</div>
          </div>
          <div className="absolute top-1/2 left-1/4 text-green-500 text-xs font-mono animate-pulse delay-400">
            <div className="animate-bounce delay-800">npm install</div>
            <div className="animate-bounce delay-900">git commit</div>
            <div className="animate-bounce delay-1000">git push</div>
          </div>
          <div className="absolute bottom-20 left-20 text-green-300 text-xs font-mono animate-pulse delay-500">
            <div className="animate-bounce delay-300">SELECT *</div>
            <div className="animate-bounce delay-400">FROM users</div>
            <div className="animate-bounce delay-500">WHERE id=1</div>
          </div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Animated Tech Lines */}
        <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse delay-75"></div>
        <div className="absolute bottom-60 left-20 w-40 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse delay-150"></div>
        <div className="absolute bottom-40 right-10 w-28 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-pulse delay-300"></div>
        
        {/* Vertical Tech Lines */}
        <div className="absolute top-32 left-32 w-px h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse delay-100"></div>
        <div className="absolute top-48 right-40 w-px h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse delay-200"></div>
        <div className="absolute bottom-52 left-40 w-px h-24 bg-gradient-to-b from-transparent via-blue-300 to-transparent animate-pulse delay-250"></div>
        
        {/* Small Tech Dots */}
        <div className="absolute top-24 left-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-36 right-32 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-75"></div>
        <div className="absolute bottom-48 left-16 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-150"></div>
        <div className="absolute bottom-32 right-24 w-1 h-1 bg-blue-600 rounded-full animate-ping delay-300"></div>
        
        {/* Corner Tech Elements */}
        <div className="absolute top-16 left-16">
          <div className="w-8 h-8 border-l-2 border-t-2 border-blue-400 opacity-60"></div>
        </div>
        <div className="absolute top-16 right-16">
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
            <div className="w-2 h-2 bg-green-400 rounded-full opacity-40 animate-ping"></div>
            <div className="w-8 h-px bg-green-400 opacity-40"></div>
            <div className="w-1 h-1 bg-green-500 rounded-full opacity-40 animate-ping delay-100"></div>
          </div>
        </div>
        <div className="absolute top-2/3 right-12">
          <div className="flex items-center space-x-1">
            <div className="w-1 h-1 bg-green-300 rounded-full opacity-40 animate-ping delay-200"></div>
            <div className="w-6 h-px bg-green-300 opacity-40"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full opacity-40 animate-ping delay-300"></div>
          </div>
        </div>

        {/* Hacking Terminal Boxes */}
        <div className="absolute top-10 right-10 bg-black/50 border border-green-500/30 rounded p-1 text-xs font-mono text-green-400 opacity-60 animate-pulse">
          <div>&gt; skills.exe</div>
          <div>&gt; loading...</div>
        </div>
        <div className="absolute bottom-10 left-10 bg-black/50 border border-green-500/30 rounded p-1 text-xs font-mono text-green-400 opacity-60 animate-pulse delay-200">
          <div>$ npm run dev</div>
          <div>⚡ ready</div>
        </div>
        
        {/* Floating Code Snippets */}
        <div className="absolute top-1/4 right-1/4 text-green-400/40 text-xs font-mono animate-bounce delay-500">
          {'{ skill: "React" }'}
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-green-500/40 text-xs font-mono animate-bounce delay-700">
          {'await loadSkills()'}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-400">Technical Skills</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center hover:bg-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 group">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">{skill.icon}</div>
                  <div className="text-sm font-medium text-gray-200">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div ref={skillsRef}>
            <h3 className="text-2xl font-bold mb-8 text-purple-400">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.progress}%` : '0%',
                        transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                      }}
                    ></div>
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