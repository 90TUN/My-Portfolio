import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = section === 'home' 
          ? document.body 
          : document.getElementById(section);
        
        if (element) {
          const offsetTop = section === 'home' ? 0 : element.offsetTop;
          const offsetBottom = offsetTop + (section === 'home' ? window.innerHeight : element.offsetHeight);
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, sectionName) => {
    setIsMenuOpen(false);
    setActiveSection(sectionName);
    
    if (sectionName === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionName);
      if (element) {
        const offsetTop = element.offsetTop - 80; 
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-black">
            &lt;90TUN/&gt;
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => {
                    if (item.name.toLowerCase() === 'home') {
                      e.preventDefault();
                      handleNavClick(item.href, 'home');
                    }
                  }}
                  className={`
                    py-2 text-sm font-medium transition-all duration-300 no-underline border-b-2
                    ${activeSection === item.name.toLowerCase() 
                      ? 'text-black border-black' 
                      : 'text-gray-600 border-transparent hover:text-black'
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div 
                  className={`
                    w-5 h-0.5 bg-black mb-1 transition-all duration-300
                    ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}
                  `}
                ></div>
                <div 
                  className={`
                    w-5 h-0.5 bg-black mb-1 transition-all duration-300
                    ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
                  `}
                ></div>
                <div 
                  className={`
                    w-5 h-0.5 bg-black transition-all duration-300
                    ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}
                  `}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden
        ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-4 py-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.name.toLowerCase() === 'home') {
                  e.preventDefault();
                  handleNavClick(item.href, 'home');
                } else {
                  setIsMenuOpen(false);
                }
              }}
              className={`
                block py-3 text-base font-medium border-b border-gray-100 last:border-b-0 
                transition-colors duration-300 no-underline
                ${activeSection === item.name.toLowerCase() 
                  ? 'text-black' 
                  : 'text-gray-600 hover:text-black'
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;