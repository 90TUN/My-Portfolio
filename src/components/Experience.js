import React from 'react';

const Experience = () => {
  const experience = [
    { role: 'Front-End Engineer', company: 'DexterPro Technologies', period: 'Apr 2023 – Present', current: true },
    { role: 'Entrenchment Consultant', company: 'Stanbic IBTC Bank', period: 'Nov 2023 – May 2024', current: false },
    { role: 'Corper', company: 'Lagos Internal Revenue Service', period: 'Nov 2022 – Nov 2023', current: false },
    { role: 'Intern', company: 'Lagos State Secretariat (M.O.S.T)', period: 'Sep 2021 – Dec 2021', current: false },
    { role: 'Intern', company: 'Nigeria Armed Forces Resettlement Center', period: 'Sep 2020 – Dec 2020', current: false }
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-4 bg-white flex items-center">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {experience.map((exp, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              {/* Timeline Dot */}
              <div className={`
                absolute left-6 top-4 w-3 h-3 rounded-full border-2 border-black -translate-x-1/2 z-10
                ${exp.current ? 'bg-black' : 'bg-white'}
              `}></div>

              {/* Content */}
              <div className="ml-16">
                <div className="bg-gray-50 border border-gray-200 p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-black group">
                  {/* Period */}
                  <div className="text-sm text-gray-600 font-medium mb-2">
                    {exp.period}
                    {exp.current && (
                      <span className="ml-2 text-black font-semibold">
                        • Current
                      </span>
                    )}
                  </div>
                  
                  {/* Role */}
                  <h3 className="text-xl font-semibold text-black mb-2 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  
                  {/* Company */}
                  <p className="text-gray-600 font-medium text-base">
                    {exp.company}
                  </p>
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