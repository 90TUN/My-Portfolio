import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-700 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Akande Ayomidotun. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {[Github, Linkedin, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;