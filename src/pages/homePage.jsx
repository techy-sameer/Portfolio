import React from "react";
import Education from "../components/educationSection";
import HeroSection from "../components/heroSection";
import Contact from "../components/contact";
import SkillsSection from "../components/skillSection";
import AboutMe from "../components/aboutMe";
import Footer from "../components/footer";
function Home() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-teal-800 text-white fixed top-0 w-full z-50 shadow-md animate-fadeDown">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold">Sameer Javed</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#hero" className="hover:text-teal-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-teal-400 transition">
                  Education
                </a>
              </li>
              <li>
               
                <a href="#contact" className="hover:text-teal-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}

      <HeroSection />

      {/* About Section */}
      <AboutMe />
      <section
        id="about"
        className="py-20 bg-gray-800 text-center animate-slideRight"
      >
        <div className="container mx-auto px-6">
        
        </div>
      </section>
      {/* Skills Section */}

      <SkillsSection />

      {/* Education Section */}
      <section
        id="education"
        className="py-20 bg-gray-800 text-center animate-slideRight"
      >
        <Education />
      </section>


      {/* Contact Section */}
      <Contact />

      <Footer/>
    </div>
  );
}

export default Home;
