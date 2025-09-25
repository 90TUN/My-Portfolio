import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-24 px-4 bg-gray-50 flex items-center">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-black mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <form action="https://formsubmit.co/akandeayomidotun444@gmail.com" method="POST" className="space-y-6">
              {/* Formsubmit configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Discussion"
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 resize-vertical min-h-32 text-sm"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-6 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info & Details */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-black mb-6">
                Let's Connect
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    ✉
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email</p>
                    <a 
                      href="mailto:akandeayomidotun444@gmail.com" 
                      className="text-black hover:text-gray-600 transition-colors duration-300 font-medium"
                    >
                      akandeayomidotun444@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    📞
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Phone</p>
                    <span className="text-black font-medium">07045721339</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    📍
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Location</p>
                    <span className="text-black font-medium">Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-black mb-4">
                Follow My Work
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', href: 'https://github.com/90TUN', label: 'GH' },
                  { name: 'LinkedIn', href: '#', label: 'LI' },
                  { name: 'Twitter', href: '#', label: 'TW' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-14 h-14 border border-gray-200 hover:border-black hover:bg-black text-black hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    title={social.name}
                  >
                    <span className="text-sm font-bold">{social.label}</span>
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