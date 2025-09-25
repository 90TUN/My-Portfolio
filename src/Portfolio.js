import React, { useState, useRef, useEffect } from 'react';
import { FaHeadphones, FaPlay, FaPause, FaRedo, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Portfolio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicMenu, setShowMusicMenu] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });

    audioRef.current = new Audio('/audio/site-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Set volume to 30% 

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(error => {
          console.log('Audio play failed:', error);
        });
        setIsPlaying(true);
      }
    }
  };

  const restartMusic = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (!isPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Audio play failed:', error);
        });
        setIsPlaying(true);
      }
    }
    setShowMusicMenu(false);
  };

  const handleMainMusicClick = () => {
    setShowMusicMenu(!showMusicMenu);
  };

  const handleBackgroundClick = () => {
    if (showMusicMenu) {
      setShowMusicMenu(false);
    }
  };

  const handleMusicAction = (action) => {
    if (action === 'toggle') {
      toggleMusic();
    } else if (action === 'restart') {
      restartMusic();
    } else if (action === 'close') {
      setShowMusicMenu(false);
    }
  };
  return (
    <div className="min-h-screen bg-white text-black relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      
      {/* Background Blur Overlay */}
      {showMusicMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-[9998]"
          onClick={handleBackgroundClick}
        />
      )}
      
      {/* Floating Music Player */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
        {/* Main Music Button */}
        <button
          onClick={handleMainMusicClick}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group active:scale-95 sm:hover:scale-110 relative"
          aria-label="Music Player Menu"
          title="Music Player"
          style={{ touchAction: 'manipulation' }}
        >
          <FaHeadphones className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Animated Sound Waves (when playing) */}
          {isPlaying && (
            <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 flex space-x-0.5">
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-pulse"></div>
              <div className="w-0.5 h-1 sm:w-1 sm:h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          )}
        </button>

        {/* Popup Menu */}
        {showMusicMenu && (
          <div className="absolute bottom-16 sm:bottom-20 right-0 flex flex-col space-y-3 sm:space-y-4 animate-fade-in">
            {/* Play/Pause Button */}
            <button
              onClick={() => handleMusicAction('toggle')}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group active:scale-95 sm:hover:scale-110"
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
              title={isPlaying ? 'Pause Music' : 'Play Music'}
              style={{ touchAction: 'manipulation' }}
            >
              {isPlaying ? (
                <FaPause className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>

            {/* Restart Button */}
            <button
              onClick={() => handleMusicAction('restart')}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group active:scale-95 sm:hover:scale-110"
              aria-label="Restart music"
              title="Restart Music"
              style={{ touchAction: 'manipulation' }}
            >
              <FaRedo className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => handleMusicAction('close')}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group active:scale-95 sm:hover:scale-110"
              aria-label="Close menu"
              title="Close Menu"
              style={{ touchAction: 'manipulation' }}
            >
              <FaTimes className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;