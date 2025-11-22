import React from 'react';
import { Code2, Database, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 size={24} />,
      title: 'Frontend Development',
      description: 'Angular, React, TypeScript, Tailwind CSS',
    },
    {
      icon: <Database size={24} />,
      title: 'Backend Development',
      description: 'Node.js, Express, MongoDB',
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Technologies',
      description: 'REST APIs, GraphQL, WebSockets',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient section-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <p className="text-gray-600 mb-4">
              <p>Always trying to learn new moves like Queen's gambit...........</p>
              <p className='text-right'>So, yeah love travelling yet hate to travel.</p>
              <p> Anything didn't go as planned :( what I do sit and start writing and studing stuffs</p>
              <p className='text-center'>Love you ask :) Mountains I hear </p>
              <p className='text-right'> Fear you say :( Horror movie I Remember</p>
              <p> Hard you say didn't tried enough I feel</p>
              <p className='text-center'>Peace you say :) Illusion it is</p>
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="cards p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;