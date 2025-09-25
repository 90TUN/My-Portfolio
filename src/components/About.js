import React from 'react';

const About = () => {
  const highlights = [
    { label: 'Clean Code', description: 'Writing maintainable, scalable solutions' },
    { label: 'UI/UX Design', description: 'Creating beautiful user experiences' },
    { label: 'Data-Driven', description: 'Making informed development decisions' },
    { label: 'Modern Web', description: 'Using latest technologies & best practices' }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="min-h-screen py-24 bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-black mb-3 relative">
                  Who I Am
                  <div className="w-12 h-1 bg-black mt-2"></div>
                </h3>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg text-justify">
                  I am a passionate <span className="font-semibold text-black">Front-End Developer</span>, 
                  <span className="font-semibold text-black"> UI Designer</span>, 
                  and <span className="font-semibold text-black">AI Enthusiast</span>. 
                  I specialize in creating responsive, user-friendly, and visually appealing web applications.
                </p>
                <p className='text-justify'>
                  With a problem-solving mindset and adaptability, I am eager to contribute to innovative 
                  projects while constantly improving my technical expertise and staying current with 
                  industry trends.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-black mb-3 relative">
                  What I Bring
                  <div className="w-12 h-1 bg-black mt-2"></div>
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="group"
                    data-aos="zoom-in"
                    data-aos-delay={600 + (index * 100)}
                  >
                    <div className="p-4 border-l-4 border-black bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                      <h4 className="font-semibold text-black mb-2">
                        {highlight.label}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <div className="pt-4" data-aos="fade-up" data-aos-delay="1000">
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/files/DOTUN-CV.pdf';
                  link.download = 'DOTUN-CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                <span className="mr-2">↓</span>
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:sticky lg:top-32" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-6 sm:mb-8 text-center">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center group"
                    data-aos="flip-up"
                    data-aos-delay={500 + (index * 100)}
                  >
                    <div className="bg-white p-3 sm:p-4 lg:p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;