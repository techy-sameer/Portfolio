import React from "react";

{/* Skills Section */}
const SkillSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-center animate-slideLeft">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-teal-400 mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-700 rounded shadow hover:shadow-lg transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-2 text-teal-400">HTML</h3>
            <p className="text-gray-400">Building the structure of web pages.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded shadow hover:shadow-lg transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-2 text-teal-400">CSS</h3>
            <p className="text-gray-400">Styling modern, responsive web designs.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded shadow hover:shadow-lg transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-2 text-teal-400">JavaScript</h3>
            <p className="text-gray-400">Creating dynamic and interactive websites.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded shadow hover:shadow-lg transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-2 text-teal-400">React.js</h3>
            <p className="text-gray-400">Building scalable and reusable UI components.</p>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default SkillSection;
