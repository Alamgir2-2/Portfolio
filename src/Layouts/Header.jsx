import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto flex justify-center space-x-8 py-4">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer hover:text-purple-500 transition duration-300"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer hover:text-purple-500 transition duration-300"
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer hover:text-purple-500 transition duration-300"
        >
          Skills
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer hover:text-purple-500 transition duration-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;