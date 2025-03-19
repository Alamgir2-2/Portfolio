import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4  text-white">
      <div className="max-w-4xl mx-auto bg-white text-gray-800 p-10 rounded-3xl shadow-lg relative shadow-lg shadow-green-500">
        {/* Profile Image */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Content */}
        <div className=" text-center">
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate developer with expertise in <strong className="text-blue-500">React</strong>, 
            <strong className="text-blue-500"> Tailwind CSS</strong>, and <strong className="text-blue-500">Node.js</strong>. 
            I love crafting beautiful, user-friendly applications that solve real-world problems.
          </p>
          
          {/* Animated Icons or Stats */}
          <div className="mt-6 flex justify-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500 animate-pulse">2+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500 animate-pulse">15+</p>
              <p className="text-gray-600">Projects Done</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500 animate-pulse">100%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
