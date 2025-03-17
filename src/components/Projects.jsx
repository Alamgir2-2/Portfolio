const Projects = () => {
    const projects = [
      {
        title: "Project 1",
        description: "A modern e-commerce platform built with React and Node.js.",
        image: "https://via.placeholder.com/400",
        link: "#",
      },
      {
        title: "Project 2",
        description: "A portfolio website using Tailwind CSS and Framer Motion.",
        image: "https://via.placeholder.com/400",
        link: "#",
      },
    ];
  
    return (
      <section id="projects" className="py-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-purple-500 hover:text-purple-400 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;