import React from "react";
import { Github, Linkedin, Mail, Twitter, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400">
              © 2025 Aaditya Jha. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/aadijha001"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aaditya-jha-67baab219/"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jhanaaditya@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+916201920138"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Phone size={20} />
            </a>
            {/* <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
