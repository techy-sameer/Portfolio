import React from "react";

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="py-20 bg-gray-800 text-center text-white animate-slideRight"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-teal-400 mb-6">About Me</h2>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-6">
          Hi, my name is <span className= "font-semibold text-teal-400">[Sameer Javed]</span>. 
          I am a passionate <span className="font-semibold text-teal-400">Full Stack Web Developer</span> 
          with experience in building dynamic, user-friendly, and scalable web applications. 
          My goal is to create innovative digital experiences using modern tools and technologies.
        </p>

        <p className="text-lg text-gray-400 mb-8">
          I specialize in frontend technologies like <span className="font-semibold text-teal-400">
          React.js, HTML5, CSS3, and JavaScript</span>, and backend technologies like <span className="font-semibold text-teal-400">
          Node.js, Express.js, MongoDB, and MySQL</span>. I also have experience working with REST APIs, authentication, 
          and deploying web applications.
        </p>

        {/* Resume Download Button */}
        <a
          href="techSameer (1).pdf" // Replace with the actual path to your resume
          download="techSameer (1).pdf_Resume.pdf"
          className="inline-block px-8 py-3 bg-teal-400 text-gray-800 font-bold rounded-lg hover:bg-teal-500 transition duration-300 shadow-lg transform hover:scale-105"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
