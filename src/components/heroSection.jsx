import React from "react";
import { ReactTyped } from "react-typed"; // Correct named import
import Image from '../assets/images/Sam.jpg';

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen bg-gradient-to-r from-teal-700 via-teal-600 to-teal-800 text-white flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-6 flex sm:flex-row items-center justify-center sm:justify-between">
          {/* Profile Image */}
          <div className="w-80 h-80 mb-6 sm:mb-0 sm:mr-8">
            <img
              src={Image}
              alt="Profile photo of Sameer Javed"
              className="w-full h-full object-cover rounded-full border-4 border-teal-400 shadow-lg transition transform hover:scale-105"
            />
          </div>

          {/* Hero Text */}
          <div className="text-center sm:text-left max-w-xl">
            <h1 className="text-5xl font-extrabold mb-4 animate-fadeUp sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-teal-300">Sameer Javed</span>
            </h1>
            <p className="text-xl mb-8 sm:text-2xl text-gray-200">
              A passionate <span className="font-semibold text-teal-400">Web Developer</span> crafting modern, dynamic websites and applications.
            </p>
            {/* Auto type effect using ReactTyped */}
            <p className="text-xl mb-8 sm:text-2xl text-gray-200">
              I am into <span className="font-semibold text-teal-400">
                <ReactTyped
                  strings={[
                    "Frontend Dev",
                    "Backend Dev",
                    "Web Designer",
                    "JavaScript Enthusiast",
            
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={1000}
                  loop
                />
              </span>
            </p>
            <a
              href="#about"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:bg-teal-400 hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      </section>
    </div>
  );
};

export default HeroSection;
