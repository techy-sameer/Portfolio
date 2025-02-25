import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-10 px-6 md:px-12">
      {/* Glassmorphism Background Effect */}
      <div className="absolute inset-0 bg-opacity-30 backdrop-blur-md"></div>

      <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Brand Name */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Sameer Portfolio
          </h2>
          <p className="text-lg text-gray-300 pt-3">
            Thank you for visiting! Let’s connect and build something amazing.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-200 mb-3">Quick Links</h3>
          <a href="#hero" className="text-gray-400 hover:text-white transition-all duration-300">🏠 Home</a>
          <a href="#about" className="text-gray-400 hover:text-white transition-all duration-300">👤 About</a>
          <a href="#education" className="text-gray-400 hover:text-white transition-all duration-300">🎓 Education</a>
          <a href="#skills" className="text-gray-400 hover:text-white transition-all duration-300">💡 Skills</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-all duration-300">📞 Contact</a>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-gray-200 mb-3">Contact Info</h3>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-yellow-400" />
            <span className="text-gray-300 hover:text-white transition-all duration-300">7500604904</span>
          </div>
          <div className="flex items-center space-x-3 mt-2">
            <FaEnvelope className="text-blue-400" />
            <span className="text-gray-300 hover:text-white transition-all duration-300">techsameer235@gmail.com</span>
          </div>
         
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-8 md:mt-0">
          <a href="https://www.linkedin.com/in/sameer-javed-aa1b782a5/" target="_blank" rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-400 text-3xl transition-all duration-300 transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="mailto:yourmail@gmail.com" 
            className="text-gray-300 hover:text-gray-200 text-3xl transition-all duration-300 transform hover:scale-110">
            <FaEnvelope />
          </a>
          <a href="tel:+1234567890" 
            className="text-green-500 hover:text-green-400 text-3xl transition-all duration-300 transform hover:scale-110">
            <FaPhoneAlt />
          </a>
          <a href="https://github.com/techy-sameer" target="_blank" rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white text-3xl transition-all duration-300 transform hover:scale-110">
            <FaGithub />
          </a>
        
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Sameer. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
