import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#101010] bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto flex justify-end lg:justify-center items-center py-4 px-4">
        {/* Hamburger Menu for Mobile (Right Side) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links (Centered) */}
        <div className="hidden lg:flex justify-center space-x-8 w-full">
          <Link
            to="hero"
            smooth={true}
            duration={1000}
            className="text-white cursor-pointer hover:text-purple-500 transition duration-900"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="text-white cursor-pointer hover:text-purple-500 transition duration-900"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="text-white cursor-pointer hover:text-purple-500 transition duration-900"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            className="text-white cursor-pointer hover:text-purple-500 transition duration-900"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="text-white cursor-pointer hover:text-purple-500 transition duration-900"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation Menu (Slides from Right) */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-34 bg-[#101010] bg-opacity-95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:text-purple-500 transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu List */}
          <div className="flex flex-col space-y-6 p-6">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-white text-lg cursor-pointer hover:text-purple-500 transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white text-lg cursor-pointer hover:text-purple-500 transition duration-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-white text-lg cursor-pointer hover:text-purple-500 transition duration-300"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-white text-lg cursor-pointer hover:text-purple-500 transition duration-300"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white text-lg cursor-pointer hover:text-purple-500 transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;