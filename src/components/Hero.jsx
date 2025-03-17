import React from "react";
import alamgir from '../assets/alamgir.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-white overflow-hidden p-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">
              Hi, I'm <span className="text-yellow-300">Alamgir Hossain</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 animate-fade-in-up">
              Passionate <span className="text-yellow-300">Web Developer</span> 
              {/* |{" "}
              <span className="text-yellow-300">UI/UX Enthusiast</span> */}
            </p>
            <button className="bg-white text-indigo-600 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-gray-600 transition duration-300 animate-bounce-in">
              Download Resume
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <img
              src={alamgir}
              alt="Alamgir"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;