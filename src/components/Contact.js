import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-black relative z-10 overflow-hidden">
      {/* Tech Lines and Patterns Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <form action="https://formsubmit.co/akandeayomidotun444@gmail.com" method="POST" className="space-y-6">
              {/* Formsubmit configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors text-gray-200 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors text-gray-200 placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none text-gray-200 placeholder-gray-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 rounded-lg font-semibold transition-all duration-300 text-white"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-purple-400" size={20} />
                  <a href="mailto:akandeayomidotun444@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    akandeayomidotun444@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-purple-400" size={20} />
                  <span className="text-gray-300">07045721339</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-purple-400" size={20} />
                  <span className="text-gray-300">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 hover:text-white hover:scale-110 transition-all duration-300 text-gray-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;