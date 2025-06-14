import React, { useState, useEffect, useRef } from "react";

const About = () => {
  // State for animated values
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [clients, setClients] = useState(0);

  // Ref for the About section
  const aboutRef = useRef(null);

  // Function to animate the counting effect
  const animateValue = (setValue, end, duration, suffix = "") => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * end) + suffix);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Intersection Observer to trigger animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animations with slight delays
            setTimeout(() => animateValue(setExperience, 3, 1000, "+"), 100);
            setTimeout(() => animateValue(setProjects, 20, 1200, "+"), 200);
            setTimeout(() => animateValue(setSatisfaction, 100, 1400, "%"), 300);
            setTimeout(() => animateValue(setClients, 15, 1000, "+"), 400);
            observer.unobserve(aboutRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 text-white" ref={aboutRef}>
      <div className="max-w-4xl mx-auto bg-white text-gray-800 p-10 rounded-3xl relative shadow-lg shadow-green-500">
        
        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm a passionate full-stack developer who loves creating beautiful, functional web applications. 
            With expertise in modern technologies like{" "}
            <strong className="text-blue-500">React</strong>,{" "}
            <strong className="text-blue-500">Node.js</strong>,{" "}
            <strong className="text-blue-500">PHP</strong>,{" "}
            <strong className="text-blue-500">JavaScript</strong>, and{" "}
            <strong className="text-blue-500">Tailwind CSS</strong>, I bring ideas to life through clean, efficient code.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I believe in writing code that not only works but is maintainable, scalable, and user-friendly. 
            My goal is to create digital experiences that solve real problems and delight users.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['JavaScript', 'React', 'Node.js','PHP', 'Tailwind CSS','Bootstrap', 'MongoDB','MySQL', 'Express.js', 'Git','jQuery','Ajax'].map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors duration-300">
            <p className="text-3xl font-bold text-blue-600 mb-2">{experience}</p>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
          <div className="text-center bg-purple-50 p-6 rounded-xl hover:bg-purple-100 transition-colors duration-300">
            <p className="text-3xl font-bold text-purple-600 mb-2">{projects}</p>
            <p className="text-gray-600 font-medium">Projects Done</p>
          </div>
          <div className="text-center bg-green-50 p-6 rounded-xl hover:bg-green-100 transition-colors duration-300">
            <p className="text-3xl font-bold text-green-600 mb-2">{satisfaction}</p>
            <p className="text-gray-600 font-medium">Client Satisfaction</p>
          </div>
          <div className="text-center bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-colors duration-300">
            <p className="text-3xl font-bold text-orange-600 mb-2">{clients}</p>
            <p className="text-gray-600 font-medium">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;