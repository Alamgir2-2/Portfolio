import { useState } from "react"; // Import useState
import { FaGithub, FaExternalLinkAlt, FaSyncAlt } from "react-icons/fa"; 
import ePlatform from "../../public/ePlatform.png"; 
import dreamers from "../../public/dreamers.png"; 


const Projects = () => {
  const [flipped, setFlipped] = useState(null); // State to track flipped card
  const [isIconDisabled, setIsIconDisabled] = useState(false); // State to disable icon during flip

  // Function to truncate description
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const projects = [
    {
      title: "The Dreamers",
      description:
        "A Student and Social Welfare Organization. This project is built with modern technologies like React, Node.js, Tailwind CSS, and MongoDB. It is a platform for students to connect and collaborate on social welfare activities. The platform also includes features like event management, donation tracking, and community forums.",
      image: dreamers,
      github: "https://github.com/Alamgir2-2/The-Dreamers",
      live: "https://the-dreamers.vercel.app/",
      techStack: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    },
    {
      title: "ePlatform",
      description:
        "Smart Learning Platform enhances online education with webcam engagement tracking, randomized quizzes, progress reports, and time-tracking. Instructors benefit from easy course creation, video/blog management, and real-time tracking. Rewards and leaderboards boost student motivation. Built with React, Express.js, and MySQL.",
      image: ePlatform,
      github: "https://github.com/Alamgir2-2/Online-Education-Platform",
      live: "https://online-education-platform-3.onrender.com/",
      techStack: ["React","Express.Js", "MySQL", "Tailwind CSS", ],
    },
  ];

  const handleFlip = (index) => {
    setIsIconDisabled(true); // Disable icon during flip
    setFlipped(flipped === index ? null : index); // Toggle flip

    // Re-enable icon after flip animation completes (1 second)
    setTimeout(() => {
      setIsIconDisabled(false);
    }, 1000);
  };

  return (
    <section
      id="projects"
      className="py-24 relative z-10 "
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[url('/path/to/your/texture.png')] bg-cover bg-center opacity-30"></div>

      <h2 className="text-5xl font-semibold text-center text-white mb-16 animate-fade-in">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="perspective w-full h-[28rem] cursor-pointer relative"
          >
            {/* Flip Icon on the Right Side (Outside the Flip Card) */}
            {!isIconDisabled && (
              <div
                className="absolute top-2 right-2 text-green-400 transition duration-300 z-20"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card flip when clicking the icon
                  handleFlip(index); // Toggle flip
                }}
              >
                <FaSyncAlt className="h-4 w-4" />
              </div>
            )}

            {/* Flip Card Container */}
            <div
              className={`relative preserve-3d w-full h-full duration-1000 ${
                flipped === index ? "rotate-y-180" : ""
              }`}
              onClick={(e) => {
                // Check if the click is on GitHub or Live Demo button
                const isGitHubButton = e.target.closest(
                  'a[href*="github.com"]'
                );
                const isLiveDemoButton = e.target.closest(
                  'a[href*="live-demo.com"]'
                );
                // Flip only if not clicking on GitHub or Live Demo button
                if (!isGitHubButton && !isLiveDemoButton) {
                  handleFlip(index);
                }
              }}
            >
              {/* Front Side */}
              <div className="absolute backface-hidden w-full h-full border backdrop-blur-lg rounded-2xl shadow-lg shadow-green-500 overflow-hidden p-6 flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 border-3 rounded-xl object-cover rounded-t-xl mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-justify">
                  {truncateDescription(project.description, 20)} {/* Show only 20 words */}
                </p>
                <div className="mt-auto flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-900 transition duration-300 border"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-900 transition duration-300 border"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute backface-hidden w-full h-full border bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg shadow-green-500 overflow-hidden p-6 rotate-y-180 flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 text-gray-600">
                  Tech Stack
                </h3>
                <ul className="space-y-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <li key={index} className="text-gray-500">
                      {tech}
                    </li>
                  ))}
                </ul>
                <h3 className="text-2xl font-semibold mb-2 text-gray-600">
                  Description
                </h3>
                <p className="text-gray-500 overflow-y-auto max-h-40 text-justify px-2">
                  {project.description} {/* Show full description */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for Flip Animation */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Projects;