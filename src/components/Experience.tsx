import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'IVANTI',
      position: 'Associate Software Engineer',
      period: 'July 2023 - Present',
      type: 'OnSite',
      responsibilities: [
        'Angular Migration: Worked on migrating the applicaiton from ext to Angular',
        'Accessability Enhancement: Enhaced accessability and added measures for validation',
        'LOB components: Created Dynamic list view, enchanced banner',
        'Bug Fixing: Resolved  customer and internal',
        'Automation: Automated the testing for UI functions',
        'Localization Systematization: Added Python scipt to remove manual updatation of strings'
      ]
    },
    {
      company: 'IVANTI',
      position: 'Engineering Intern',
      period: 'Jan 2023 - July 2023',
      type: 'OnSite',
      responsibilities: [
        'Google Tag Manager: GTM integration and data collection in GA',
        'Feature Rollouts: created the Business Objects details page',
        'Bug Fix: UI and functionality Bug Fixing',
      ]
    }
  ];

  return (
    <section id="experience" className="py-20  section-fade-in bg-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Briefcase className="text-indigo-600" />
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="cards p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600">{exp.company}</h3>
                  <p className="text-lg font-medium">{exp.position}</p>
                </div>
                <div className="text-gray-600">
                  <p>{exp.period}</p>
                  <p className="text-indigo-500">{exp.type}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;