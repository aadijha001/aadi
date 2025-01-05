import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profile from "../images/Aaditya-color.svg";
import TypingEffect from "./TypingEffect";
const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center section-fade-in">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-indigo-600">Aaditya Jha</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              "Passionate about creating innovative solutions through code"
            </p>
            <p className="text-gray-600 mb-4">
              Associate Software Engineer specializing in Angular, React, and
              Full-stack development. Currently working at IVANTI, focusing on
              Web development and accessibility enhancement. Huge Interest and
              passioante towards Generative AI, Machine Learning and quatum
              computing.
            </p>
            <TypingEffect />
            <p className="text-gray-600 mb-8">
              Big fan of Star Gazing...............
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/aadijha001"
                target="_blank"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aaditya-jha-67baab219/"
                target="_blank"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jhanaaditya@gmail.com"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+916201920138"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          <div className="relative group">
            {/* Default Image */}
            <div className="relative group">
              <img
                src={profile}
                alt="Profile"
                className="rounded-full w-full max-w-md mx-auto shadow-2xl transform transition-transform duration-800 md:group-hover:grayscale md:group-hover:translate-x-5 md:group-hover:translate-y-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
