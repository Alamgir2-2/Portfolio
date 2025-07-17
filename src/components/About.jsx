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
      <div className="max-w-7xl mx-auto  text-gray-800 p-10 rounded-3xl relative shadow-lg shadow-green-500 border-2">

        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6 shadow-lg"></div>

          <div className="max-w-6xl mx-auto px-2 sm:px-2 lg:px-3">
            <p className="text-base text-justify sm:text-sm md:text-xl text-gray-300 leading-relaxed mb-6 font-medium">
              👋 Hi! I'm <span className="text-white font-bold">Md Alamgir Hossain</span>,
              a passionate <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                Full-Stack Developer
              </span> and graduate from <span className="text-blue-400 font-semibold">IIT, Noakhali Science and Technology University</span>.
              I transform ideas into <span className="text-yellow-400 font-semibold">stunning digital experiences</span> and
              specialize in building <span className="text-green-400 font-semibold">scalable</span>,
              <span className="text-blue-400 font-semibold"> high-performance</span> web applications
              that users <span className="text-pink-400 font-semibold">love</span> and businesses
              <span className="text-purple-400 font-semibold"> rely on</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-5 md:p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">🚀 What I Do</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  I craft responsive web applications using cutting-edge technologies like{" "}
                  <strong className="text-blue-600">React</strong>, <strong className="text-purple-600">JavaScript</strong>,
                  <strong className="text-green-600"> PHP</strong>, and <strong className="text-pink-600">Node.js</strong>.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 sm:p-5 md:p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">💡 My Approach</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Clean code, seamless UX, and scalable architecture. I believe every line of code
                  should serve a purpose and create value.
                </p>
              </div>
            </div>
          </div>


          {/* Enhanced Skills Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-400 mb-4">🛠️ Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'JavaScript', classes: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' },
                { name: 'React', classes: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
                { name: 'Node.js', classes: 'bg-green-100 text-green-800 hover:bg-green-200' },
                { name: 'TypeScript', classes: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200' },
                { name: 'Tailwind CSS', classes: 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200' },
                { name: 'Bootstrap', classes: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' },
                { name: 'MongoDB', classes: 'bg-green-100 text-green-800 hover:bg-green-200' },
                { name: 'Express.js', classes: 'bg-gray-100 text-gray-800 hover:bg-gray-200' },
                { name: 'Git', classes: 'bg-orange-100 text-orange-800 hover:bg-orange-200' },
                { name: 'AWS', classes: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' },
                { name: 'MySQL', classes: 'bg-blue-100 text-blue-800 hover:bg-blue-200' }
              ].map((skill, index) => (
                <span
                  key={index}
                  className={`${skill.classes} px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Animated Stats */}
        <div className="border-2 p-6 rounded-2xl shadow-inner">
          <h3 className="text-base sm:text-xl font-bold text-gray-400 mb-6 text-center">
            📊 My Journey in Numbers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-blue-500">
              <div className="text-3xl sm:text-4xl mb-2">💼</div>
              <p className="text-xl sm:text-3xl font-bold text-blue-600 mb-2">{experience}</p>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-purple-500">
              <div className="text-3xl sm:text-4xl mb-2">🚀</div>
              <p className="text-xl sm:text-3xl font-bold text-purple-600 mb-2">{projects}</p>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Projects Done</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-green-500">
              <div className="text-3xl sm:text-4xl mb-2">⭐</div>
              <p className="text-xl sm:text-3xl font-bold text-green-600 mb-2">{satisfaction}</p>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Client Satisfaction</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-orange-500">
              <div className="text-3xl sm:text-4xl mb-2">😊</div>
              <p className="text-xl sm:text-3xl font-bold text-orange-600 mb-2">{clients}</p>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Happy Clients</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;