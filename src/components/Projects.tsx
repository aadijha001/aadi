import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Emotion Detection',
      description: 'Python-based emotion detection system',
      tech: ['Python', 'Machine Learning'],
      github: 'https://github.com/aadijha001/emotiondetection',
    },
    {
      title: 'Plant Leaf Disease Detection',
      description: 'Disease detection using CNN',
      tech: ['Python', 'CNN', 'Deep Learning'],
      github: 'https://github.com/aadijha001/plantleafdisease',
    },
    {
      title: 'Word Prediction',
      description: 'suggest current & next word',
      tech: ['HTML', 'Javascript'],
      github: 'https://github.com/aadijha001/word-prediction',
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive algorithm visualization tool',
      tech: ['python'],
      github: 'https://github.com/aadijha001/aadi01/tree/main/my%20projects',
    },
    {
      title: 'Real Time Coding',
      description: 'Collaborative coding platform',
      tech: ['React', 'Firebase'],
      github: 'https://github.com/aadijha001/realtimecoding',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient section-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Code className="text-indigo-600" />
          Projects
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="cards rounded-lg overflow-hidden shadow-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;