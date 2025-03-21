import React, { useState, useEffect, useRef } from "react";

const About = () => {
  // State for animated values
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

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
            // Start animations
            animateValue(setExperience, 2, 1000, "+"); // 2+ years experience (1 second duration)
            animateValue(setProjects, 15, 1000, "+"); // 15+ projects done (1 second duration)
            animateValue(setSatisfaction, 100, 1000, "%"); // 100% client satisfaction (1 second duration)
            observer.unobserve(aboutRef.current); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Cleanup observer
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
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate developer with expertise in{" "}
            <strong className="text-blue-500">React</strong>,{" "}
            <strong className="text-blue-500">Tailwind CSS</strong>, and{" "}
            <strong className="text-blue-500">Node.js</strong>. I love crafting
            beautiful, user-friendly applications that solve real-world problems.
          </p>

          {/* Animated Stats */}
          <div className="mt-6 flex justify-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500 animate-pulse">
                {experience}
              </p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500 animate-pulse">
                {projects}
              </p>
              <p className="text-gray-600">Projects Done</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500 animate-pulse">
                {satisfaction}
              </p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;