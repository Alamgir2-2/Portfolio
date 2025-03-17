import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com" className="hover:text-blue-400 transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-400 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; 2023 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;