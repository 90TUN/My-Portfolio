import React from 'react';

const Experience = () => {
  const experience = [
    { role: 'Front-End Engineer', company: 'DexterPro Technologies', period: 'Apr 2023 – Present' },
    { role: 'Entrenchment Consultant', company: 'Stanbic IBTC Bank', period: 'Nov 2023 – May 2024' },
    { role: 'Corper', company: 'Lagos Internal Revenue Service', period: 'Nov 2022 – Nov 2023' },
    { role: 'Intern', company: 'Lagos State Secretariat (M.O.S.T)', period: 'Sep 2021 – Dec 2021' },
    { role: 'Intern', company: 'Nigeria Armed Forces Resettlement Center', period: 'Sep 2020 – Dec 2020' }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 bg-gray-800/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience Timeline
        </h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="md:w-1/3">
                <div className="text-sm text-purple-400 font-medium">{exp.period}</div>
              </div>
              <div className="md:w-2/3">
                <div className="bg-gray-800/50 rounded-lg p-6 border-l-4 border-blue-500 hover:bg-gray-700/50 transition-colors">
                  <h3 className="text-lg font-bold text-blue-400 mb-1">{exp.role}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;