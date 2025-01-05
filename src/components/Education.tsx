import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: 'Vellore Institute of Technology',
      location: 'Vellore, India',
      degree: 'B.Tech in Computer Science and Engineering',
      period: 'Aug 2019 - Aug 2023',
      score: 'CGPA: 8.59'
    },
    {
      school: 'Kathmandu Model College',
      location: 'Kathmandu, Nepal',
      degree: '10+2 Maths+Science+Computer Science',
      period: 'Jun 2017 - Jun 2019',
      score: '92%'
    },
    {
      school: 'New Eng H. Sec School',
      location: 'Janakpur, Nepal',
      degree: 'Class 10',
      period: 'May 2016 - May 2017',
      score: '93.75%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient section-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <GraduationCap className="text-indigo-600" />
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="cards p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-indigo-600">{edu.school}</h3>
              <p className="text-gray-600">{edu.location}</p>
              <p className="font-medium mt-2">{edu.degree}</p>
              <div className="flex justify-between mt-2 text-gray-600">
                <span>{edu.period}</span>
                <span className="font-semibold">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;