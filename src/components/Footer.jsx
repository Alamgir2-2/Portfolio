import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white mt-10 py-8 px-18">
      <hr /> 
      <div className="max-w-6xl mx-auto px-4 p-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/Alamgir2-2" className="hover:text-yellow-300 transform transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/alamgir22/" className="hover:text-blue-400 transform transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com/Alamgir.2.web/" className="hover:text-blue-600 transform transition duration-300">
            <FaFacebook size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; 2025, Alamgir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;