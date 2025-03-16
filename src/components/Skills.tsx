import React from 'react';
import { icons } from '../constants/icons';

const Skills = () => {
  const skillCategories = [
    {
      icon: <icons.Code2 size={24} />,
      title: 'Languages',
      skills: ['Java', 'Python', 'Javascript', 'SQL']
    },
    {
      icon: <icons.Terminal size={24} />,
      title: 'Frameworks',
      skills: ['Angular', 'ReactJs']
      // skills: ['Angular', 'ReactJs', 'Spring Boot']
    },
    {
      icon: <icons.Database size={24} />,
      title: 'Databases',
      skills: ['MongoDB', 'Firebase', 'MySQL']
    },
    {
      icon: <icons.Wrench size={24} />,
      title: 'Tools',
      skills: ['Git', 'VScode', 'Azure', 'WireShark']
    },
    {
      icon: <icons.Globe size={24} />,
      title: 'Web Development',
      skills: ['HTML/CSS/JS', 'NodeJS']
    },
    {
      icon: <icons.Brain size={24} />,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Self-learning', 'Adaptability', 'Leading']
    }
  ];

  return (
    <section id="skills" className="py-20 section-fade-in bg-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 cards rounded-lg hover:shadow-md transition-all duration-300"
            >
              <div className="text-indigo-600 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white text-indigo-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;