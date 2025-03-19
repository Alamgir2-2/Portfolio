import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import alamgir from "../assets/alamgir.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex  items-center justify-center text-white overflow-hidden relative"
    >
      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#01032a " fill-opacity="1" d="M0,64L7.7,101.3C15.5,139,31,213,46,234.7C61.9,256,77,224,93,181.3C108.4,139,124,85,139,85.3C154.8,85,170,139,186,133.3C201.3,128,217,64,232,53.3C247.7,43,263,85,279,112C294.2,139,310,149,325,133.3C340.6,117,356,75,372,80C387.1,85,403,139,418,154.7C433.5,171,449,149,465,144C480,139,495,149,511,176C526.5,203,542,245,557,224C572.9,203,588,117,604,101.3C619.4,85,635,139,650,170.7C665.8,203,681,213,697,218.7C712.3,224,728,224,743,213.3C758.7,203,774,181,790,149.3C805.2,117,821,75,836,96C851.6,117,867,203,883,245.3C898.1,288,914,288,929,277.3C944.5,267,960,245,975,245.3C991,245,1006,267,1022,272C1037.4,277,1053,267,1068,245.3C1083.9,224,1099,192,1115,192C1130.3,192,1146,224,1161,224C1176.8,224,1192,192,1208,176C1223.2,160,1239,160,1254,181.3C1269.7,203,1285,245,1301,261.3C1316.1,277,1332,267,1347,240C1362.6,213,1378,171,1394,154.7C1409,139,1425,149,1432,154.7L1440,160L1440,320L1432.3,320C1424.5,320,1409,320,1394,320C1378.1,320,1363,320,1347,320C1331.6,320,1316,320,1301,320C1285.2,320,1270,320,1254,320C1238.7,320,1223,320,1208,320C1192.3,320,1177,320,1161,320C1145.8,320,1130,320,1115,320C1099.4,320,1084,320,1068,320C1052.9,320,1037,320,1022,320C1006.5,320,991,320,975,320C960,320,945,320,929,320C913.5,320,898,320,883,320C867.1,320,852,320,836,320C820.6,320,805,320,790,320C774.2,320,759,320,743,320C727.7,320,712,320,697,320C681.3,320,666,320,650,320C634.8,320,619,320,604,320C588.4,320,573,320,557,320C541.9,320,526,320,511,320C495.5,320,480,320,465,320C449,320,434,320,418,320C402.6,320,387,320,372,320C356.1,320,341,320,325,320C309.7,320,294,320,279,320C263.2,320,248,320,232,320C216.8,320,201,320,186,320C170.3,320,155,320,139,320C123.9,320,108,320,93,320C77.4,320,62,320,46,320C31,320,15,320,8,320L0,320Z"></path></svg>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side: Text Content */}
          <div className="text-center px-16 lg:text-left lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-4 animate-fade-in-down">
              Hi, I'm{" "}
              <span className="text-yellow-300">
                <Typewriter
                  words={[
                    "Alamgir Hossain",
                    // "Full-Stack Developer",
                    // "React Enthusiast",
                  ]}
                  loop={0} // 0 means infinite loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 animate-fade-in-up">
              A Passionate <span className="text-yellow-300">
                <Typewriter
                  words={[
                    "Web Developer",
                    // "React Enthusiast",
                  ]}
                  loop={0} // 0 means infinite loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={40}
                  delaySpeed={1000}
                /></span>
            </p>
            <div className="flex items-center mb-12 justify-center lg:justify-start space-x-4">
              <button
                onClick={() => {
                  const cvUrl = "/Alamgir CV.pdf";
                  const link = document.createElement("a");
                  link.href = cvUrl;
                  link.setAttribute("download", "Alamgir_Hossain_Resume.pdf");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}

                className="bg-white text-indigo-600 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold cursor-pointer hover:bg-black hover:border border-blue-800 transition duration-300 animate-bounce-in">
                Download Resume
              </button>
              {/* Social Icons */}
              <a
                href="https://github.com/Alamgir2-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-yellow-300 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/alamgir22/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/Alamgir.2.web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-blue-500 transition duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Right Side: Image with Animated Border */}
          <div className="relative mx-25 mt-8 lg:mt-0">
            {/* Spinning Border with 3 Segments and Gaps */}
            <div
              className="absolute -inset-2 animate-spin-slow rounded-full border-[6px] border-transparent"
              style={{
                background: `conic-gradient(
        from 0deg,
        transparent 0deg 15deg,
        red 15deg 75deg,
        transparent 75deg 105deg,
        blue 105deg 165deg,
        transparent 165deg 195deg,
        green 195deg 255deg,
        transparent 255deg 285deg,
        orange 285deg 345deg,
        transparent 345deg 360deg
      )`,
              }}
            ></div>

            {/* Profile Image */}
            <img
              src={alamgir}
              alt="Alamgir"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
