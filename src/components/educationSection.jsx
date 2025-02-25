import React from "react";

function App() {
  const educationData = [
    {
      title: "Bachelor of Computer Application",
      institution: "Mahatma Jyotiba Phule Rohilkhand University",
      year: "2022 - 2025",
      description:
        "Graduated with First-Class Honors, specializing in Web Development, Data Structures, and Algorithms.",
    },
    {
      title: "High School ",
      institution: "Har Bilas Goyal Inter College",
      year: "2017 - 2018",
      description:
        "Secured top grades in Computer Science, Mathematics, and Physics.",
    },
    {
      title: "Intermediate",
      institution: "ARTI YADAV T C YADAV SHIKSHA NIKETAN I C BADAUN",
      year: "2020 - 2O21",
      description:
        "Passed First Division.",
    },
  ];

  const photoData = [
    { src: "https://via.placeholder.com/300", alt: "Placeholder Image 1" },
    { src: "https://via.placeholder.com/300", alt: "Placeholder Image 2" },
    { src: "https://via.placeholder.com/300", alt: "Placeholder Image 3" },
    { src: "https://via.placeholder.com/300", alt: "Placeholder Image 4" },
    { src: "https://via.placeholder.com/300", alt: "Placeholder Image 5" },
    { src: "https://via.placeholder.com/300", alt: "Placeholder Image 6" },
  ];

  return (
    <div className="bg-gray-900 text-white font-sans">
     
     

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-teal-400 mb-8 text-center">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-teal-300">
                  {edu.title}
                </h3>
                <p className="text-gray-400 italic">{edu.institution}</p>
                <p className="text-gray-500 text-sm mb-4">{edu.year}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default App;
