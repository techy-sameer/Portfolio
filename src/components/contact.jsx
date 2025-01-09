import React from "react";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="py-20 bg-gray-800 text-center text-white animate-fadeIn"
      >
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-4xl font-bold text-teal-400 mb-6">Contact Me</h2>
          <p className="text-lg text-gray-400 mb-6">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>

          {/* Email Button */}
          <a
            href="mailto:your.email@example.com" // Replace with your email
            className="bg-teal-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition transform hover:scale-105 mb-6 inline-block"
          >
            Send an Email
          </a>

          {/* Social Media Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Find Me On</h3>
            <div className="flex justify-center gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-600 transition transform hover:scale-110"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/your-username" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-600 transition transform hover:scale-110"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/your-username" // Replace with your Twitter URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-600 transition transform hover:scale-110"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/your-username" // Replace with your Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-600 transition transform hover:scale-110"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
