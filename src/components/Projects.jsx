import { useEffect, useState } from "react"; // Import useState
import { FaGithub, FaExternalLinkAlt, FaSyncAlt } from "react-icons/fa";
import ePlatform from "../../public/ePlatform.png";
import dreamers from "../../public/dreamers.png";
import quiz from "../../public/quiz.png";
import Farming from "../../public/Farming.png";
import seat from "../../public/seat.png";
import shop from "../../public/shop.png";


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
      setIsVisible(true);
    }, []);

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
      techStack: ["React", "Express.Js", "MySQL", "Tailwind CSS",],
    },
    {
      title: "Farming Assistant",
      description:
        "Farming Assistant is a web application which helps as an assistant to the farmers by providing various kinds of agriculture-related information and services like online marketplace.",
      image: Farming,
      github: "https://github.com/Alamgir2-2/Farming-Assistant",
      live: "#",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    },
    {
      title: "Shop Assistant",
      description:
        "Shop Management System stores records of suppliers, sales and purchases and customer records are maintained and manipulated.Generally, these works are done and managed manually, leading to the chances of human errors that maycreate problems.Thus, a secured and reliable system is required to handle it.",
      image: shop,
      github: "https://github.com/IIT-NSTU/Shop-Assistant",
      live: "#",
      techStack: ["Java", "Java Swing"],
    },
    {
      title: "Seat Management System",
      description:
        "Built with PHP, MySQL, JavaScript, HTML, CSS, and Bootstrap, this project serves as a comprehensive seat allocation system for the residential halls of a university. It simplifies the process of assigning and managing seats for students, offering an intuitive interface for administrators to allocate, modify, and track seat assignments efficiently. The system enhances transparency and operational efficiency within the university's residential management, ensuring seamless accommodation allocation based on predefined criteria.",
      image: seat,
      github: "https://github.com/Alamgir2-2/Seat-Allocation-System",
      live: "#",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    },
    {
      title: "Quiz Hero",
      description:
        "A Online Quiz Taker.This is an interactive online quiz platform where users can attempt multiple quizzes, each containing four answer options. A time limit will be set for each quiz to enhance the challenge. After completing the quiz, the correct answers will be revealed, and the system will provide feedback based on the user's performance",
      image: quiz,
      github: "#",
      live: "https://lively-arithmetic-4ebc42.netlify.app/",
      techStack: ["React", "Bootstrap"],
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

      {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Projects
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6 rounded-full transform transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6">
  {projects.map((project, index) => (
    <div
      key={index}
      className="perspective w-full h-auto min-h-[26rem] sm:min-h-[28rem] cursor-pointer relative"
    >
      {/* Flip Icon */}
      {!isIconDisabled && (
        <div
          className="absolute top-2 right-2 text-green-400 transition duration-300 z-20"
          onClick={(e) => {
            e.stopPropagation();
            handleFlip(index);
          }}
        >
          <FaSyncAlt className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
      )}

      {/* Flip Card Container */}
      <div
        className={`relative preserve-3d w-full h-full duration-1000 ${
          flipped === index ? "rotate-y-180" : ""
        }`}
        onClick={(e) => {
          const isGitHubButton = e.target.closest('a[href*="github.com"]');
          const isLiveDemoButton = e.target.closest('a[href*="live"]');
          if (!isGitHubButton && !isLiveDemoButton) handleFlip(index);
        }}
      >
        {/* Front Side */}
        <div className="absolute backface-hidden w-full h-full border backdrop-blur-lg rounded-2xl shadow-lg shadow-green-500 overflow-hidden p-4 sm:p-6 flex flex-col">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 text-justify text-sm sm:text-base">
            {truncateDescription(project.description, 20)}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 sm:gap-4 justify-start sm:justify-between">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm sm:text-base w-full sm:w-auto justify-center border hover:from-purple-700 hover:to-indigo-900 transition"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1.5 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg text-sm sm:text-base w-full sm:w-auto justify-center border hover:from-green-600 hover:to-teal-900 transition"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute backface-hidden w-full h-full border bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg shadow-green-500 overflow-hidden p-4 sm:p-6 rotate-y-180 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-600">
            Tech Stack
          </h3>
          <ul className="space-y-1 mb-4 text-sm sm:text-base">
            {project.techStack.map((tech, idx) => (
              <li key={idx} className="text-gray-500">
                {tech}
              </li>
            ))}
          </ul>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-600">
            Description
          </h3>
          <p className="text-gray-500 overflow-y-auto max-h-40 text-sm sm:text-base text-justify px-1 sm:px-2">
            {project.description}
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