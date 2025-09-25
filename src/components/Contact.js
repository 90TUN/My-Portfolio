import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300" data-aos="fade-right" data-aos-delay="200">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <form action="https://formsubmit.co/akandeayomidotun444@gmail.com" method="POST" className="space-y-6">
              {/* Formsubmit configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Enter your message..."
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 resize-vertical min-h-24 sm:min-h-32 text-sm"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 sm:py-4 px-4 sm:px-6 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info & Details */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <div className="bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300" data-aos="fade-left" data-aos-delay="400">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6">
                Let's Connect
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <HiMail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">Email</p>
                    <a 
                      href="mailto:akandeayomidotun444@gmail.com" 
                      className="text-black hover:text-gray-600 transition-colors duration-300 font-medium text-sm sm:text-base break-all"
                    >
                      akandeayomidotun444@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <HiPhone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">Phone</p>
                    <span className="text-black font-medium text-sm sm:text-base">07045721339</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <HiLocationMarker className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">Location</p>
                    <span className="text-black font-medium text-sm sm:text-base">Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300" data-aos="fade-left" data-aos-delay="600">
              <h4 className="text-lg sm:text-xl font-semibold text-black mb-4">
                Follow My Work
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://github.com/90TUN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-200 hover:border-black hover:bg-black text-black hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  title="GitHub"
                >
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-200 hover:border-black hover:bg-black text-black hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-200 hover:border-black hover:bg-black text-black hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  title="Twitter"
                >
                  <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;