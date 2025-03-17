const Hero = () => {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Your Name</h1>
          <p className="text-2xl mb-8">Full Stack Developer | UI/UX Enthusiast</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            View My Work
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;