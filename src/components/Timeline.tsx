import React from 'react';

const Timeline = () => {
  const events = [
    {
      year: '2023',
      title: 'Senior Frontend Developer',
      description: 'Promoted to lead frontend development team',
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      description: 'Started working with MERN stack',
    },
    {
      year: '2019',
      title: 'Bachelor\'s Degree',
      description: 'Graduated in Computer Science',
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Timeline</h2>
        <div className="relative">
          {events.map((event, index) => (
            <div key={index} className="mb-8 flex">
              <div className="flex-shrink-0 w-24 text-right pr-6">
                <span className="font-bold text-blue-600">{event.year}</span>
              </div>
              <div className="flex-grow pl-6 border-l-2 border-gray-300">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;