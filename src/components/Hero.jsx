import React from "react";
import alamgir from '../assets/alamgir.jpg';
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center  text-white overflow-hidden"
    >
      <div className="text-center relative z-10">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="shape-1 animate-float"></div>
          <div className="shape-2 animate-float-reverse"></div>
          <div className="shape-3 animate-float"></div>
        </div>

        {/* Content */}
        <div className="relative z-20">
          <img
            src={alamgir} 
            alt="Your Name"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg transform hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">
            Hi, I'm <span className="text-yellow-300">[Your Name]</span>
          </h1>
          <p className="text-2xl mb-8 animate-fade-in-up">
            Passionate <span className="text-yellow-300">Web Developer</span> |{" "}
            <span className="text-yellow-300">UI/UX Enthusiast</span>
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 animate-bounce-in">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;