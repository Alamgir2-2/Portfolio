import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <div className="text-center">
        <img
          src="your-photo-url.jpg" // Replace with your professional photo URL
          alt="Your Name"
          className="w-32 h-32 rounded-full mx-auto mb-6"
        />
        <h1 className="text-6xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-2xl mb-8">Passionate Web Developer | UI/UX Enthusiast</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
