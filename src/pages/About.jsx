// import React from 'react';

// const About = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-2 py-2 sm:px-2 lg:px-2 mb-0">
//       <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
//         Get back to growth with <span className="text-blue-600 dark:text-blue-500"> world's no one</span> CRM.
//       </h1>
//       <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center mb-6">
//         Here at Storytail we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
//       </p>

//       <div className="mb-6 text-center">
//         <p className="text-gray-500 dark:text-gray-400">
//           Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
//         </p>
//         <p className="text-gray-500 dark:text-gray-400 mt-3">
//           Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.
//         </p>
//       </div>

//       <div className="mb-6 text-center">
//         <p className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
//           Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work and deploy.
//         </p>
//         <p className="text-gray-500 dark:text-gray-400 mt-3">
//           Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
//         </p>
//       </div>

//       <div className="mb-6 text-center">
//         <p className="text-gray-500 dark:text-gray-400">
//           <span className="uppercase tracking-widest text-7xl font-bold text-gray-900 dark:text-gray-100 me-3 float-start">T</span>rack work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
//         </p>
//         <p className="text-gray-500 dark:text-gray-400 mt-3">
//           Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.
//         </p>
//       </div>

//     </div>
//   );
// };

// export default About;


// About.jsx
// import React from 'react';

// const About = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
//       <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center text-gray-600">
//         Get back to growth with <span className="text-blue-600 dark:text-blue-500">world's no one</span> CRM.
//       </h1>
//       <p className="text-lg text-center text-gray-600 dark:text-gray-400">
//         Here at Storytail we focus on markets where technology, innovation, and capital can unlock long-term value.
//       </p>
//       <div className="space-y-6 text-center text-gray-500 dark:text-gray-400">
//         <p>Track work across the enterprise through an open, collaborative platform...</p>
//         <p>Deliver great service experiences fast - without the complexity of traditional ITSM solutions...</p>
//         <p className="text-lg">Deliver great service experiences fast and deploy.</p>
//         <p>Track work across the enterprise through an open, collaborative platform...</p>
//         <p><span className="uppercase tracking-widest text-7xl font-bold text-gray-900 dark:text-white">T</span>rack work across the enterprise through an open, collaborative platform...</p>
//         <p>Accelerate development, eliminate toil, and deploy changes with a complete audit trail.</p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState } from 'react';
import { Mail, Phone, Globe, Users, Building, User, Send, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 animate-fade-in">
            Get back to growth with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              world's #1
            </span>{' '}
            CRM
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-90">
            At <span className="font-semibold text-blue-400">Storytail</span>, we focus on markets where technology, 
            innovation, and capital unlock long-term value and drive economic growth.
          </p>
          
          {/* CTA Button */}
          <div className="mt-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform">
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Enterprise Integration",
              description: "Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools.",
              icon: <Building className="w-8 h-8" />
            },
            {
              title: "Rapid Response",
              description: "IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.",
              icon: <CheckCircle className="w-8 h-8" />
            },
            {
              title: "Streamlined Operations",
              description: "Deliver great service experiences fast without the complexity of traditional ITSM solutions. Accelerate critical development work.",
              icon: <Send className="w-8 h-8" />
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 transform">
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Large Quote Section */}
        <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-12 mb-16">
          <div className="absolute top-8 left-8 text-8xl font-bold text-blue-400/30 select-none">T</div>
          <div className="relative z-10 ml-16">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              rack work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About