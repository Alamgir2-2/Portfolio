import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import alamgir from "../assets/alamgir.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-white overflow-hidden relative"
    >
      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#01032a " fillOpacity="1" d="M0,64L7.7,101.3C15.5,139,31,213,46,234.7C61.9,256,77,224,93,181.3C108.4,139,124,85,139,85.3C154.8,85,170,139,186,133.3C201.3,128,217,64,232,53.3C247.7,43,263,85,279,112C294.2,139,310,149,325,133.3C340.6,117,356,75,372,80C387.1,85,403,139,418,154.7C433.5,171,449,149,465,144C480,139,495,149,511,176C526.5,203,542,245,557,224C572.9,203,588,117,604,101.3C619.4,85,635,139,650,170.7C665.8,203,681,213,697,218.7C712.3,224,728,224,743,213.3C758.7,203,774,181,790,149.3C805.2,117,821,75,836,96C851.6,117,867,203,883,245.3C898.1,288,914,288,929,277.3C944.5,267,960,245,975,245.3C991,245,1006,267,1022,272C1037.4,277,1053,267,1068,245.3C1083.9,224,1099,192,1115,192C1130.3,192,1146,224,1161,224C1176.8,224,1192,192,1208,176C1223.2,160,1239,160,1254,181.3C1269.7,203,1285,245,1301,261.3C1316.1,277,1332,267,1347,240C1362.6,213,1378,171,1394,154.7C1409,139,1425,149,1432,154.7L1440,160L1440,320L1432.3,320C1424.5,320,1409,320,1394,320C1378.1,320,1363,320,1347,320C1331.6,320,1316,320,1301,320C1285.2,320,1270,320,1254,320C1238.7,320,1223,320,1208,320C1192.3,320,1177,320,1161,320C1145.8,320,1130,320,1115,320C1099.4,320,1084,320,1068,320C1052.9,320,1037,320,1022,320C1006.5,320,991,320,975,320C960,320,945,320,929,320C913.5,320,898,320,883,320C867.1,320,852,320,836,320C820.6,320,805,320,790,320C774.2,320,759,320,743,320C727.7,320,712,320,697,320C681.3,320,666,320,650,320C634.8,320,619,320,604,320C588.4,320,573,320,557,320C541.9,320,526,320,511,320C495.5,320,480,320,465,320C449,320,434,320,418,320C402.6,320,387,320,372,320C356.1,320,341,320,325,320C309.7,320,294,320,279,320C263.2,320,248,320,232,320C216.8,320,201,320,186,320C170.3,320,155,320,139,320C123.9,320,108,320,93,320C77.4,320,62,320,46,320C31,320,15,320,8,320L0,320Z"></path></svg>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">


          {/* Mobile: Image First (Order 1) */}
          <div className="relative order-1 sm:order-1 lg:order-2  flex-shrink-0">

            {/* Outer Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-xl opacity-20 animate-pulse z-0"></div>

            {/* Spinning Border with Multiple Segments */}
            <div
              className="absolute -inset-2 animate-spin rounded-full border-[4px] border-transparent z-0"
              style={{
                background: `conic-gradient(
            from 0deg,
            transparent 0deg 15deg,
            #ff6b6b 15deg 75deg,
            transparent 75deg 105deg,
            #4ecdc4 105deg 165deg,
            transparent 165deg 195deg,
            #45b7d1 195deg 255deg,
            transparent 255deg 285deg,
            #f9ca24 285deg 345deg,
            transparent 345deg 360deg
          )`,
                animation: 'spin 20s linear infinite'
              }}
            ></div>

            {/* Inner Spinning Ring */}
            <div
              className="absolute -inset-1 animate-spin rounded-full border-[1px] border-transparent z-0"
              style={{
                background: `conic-gradient(
            from 180deg,
            transparent 0deg 30deg,
            #ff9ff3 30deg 90deg,
            transparent 90deg 120deg,
            #54a0ff 120deg 180deg,
            transparent 180deg 210deg,
            #5f27cd 210deg 270deg,
            transparent 270deg 300deg,
            #00d2d3 300deg 360deg
          )`,
                animation: 'spin 20s linear infinite reverse'
              }}
            ></div>

            {/* Profile Image with Enhanced Animations */}
            <div className="relative z-10">
              <img
                src={alamgir}
                alt="Alamgir"
                className="rounded-full object-cover transform hover:scale-110 transition-all duration-500 hover:shadow-purple-500/50"
                style={{
                  width: 'clamp(180px, 20vw, 320px)',
                  height: 'clamp(180px, 20vw, 320px)',
                  filter: 'brightness(1.1) contrast(1.1)'
                }}
              />
            </div>
          </div>

          {/* Mobile: Text Content Second (Order 2) */}
          <div className="text-center px-4 sm:px-6 lg:text-left lg:w-1/2 order-2 sm:order-2 lg:order-1  ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-down leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                <Typewriter
                  words={["Alamgir Hossain"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              </span>
            </h1>


            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 animate-fade-in-up leading-relaxed">
              A Passionate{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent font-semibold">
                <Typewriter
                  words={[
                    "Software Engineer",
                    "Web Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
              <button
                onClick={() => {
                  const cvUrl = "/Alamgir_Hossain_Software_Developer.pdf";
                  const link = document.createElement("a");
                  link.href = cvUrl;
                  link.setAttribute("download", "Alamgir_Hossain_Software_Developer.pdf");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-white text-indigo-600 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold cursor-pointer hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white border-2 border-transparent hover:border-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 text-sm sm:text-base md:text-lg"
              >
                Download Resume
              </button>

              {/* Social Icons */}
              <div className="flex space-x-4 sm:space-x-6">
                <a
                  href="https://github.com/Alamgir2-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl sm:text-3xl hover:text-yellow-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/alamgir22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl sm:text-3xl hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/Alamgir.2.web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl sm:text-3xl hover:text-blue-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>



        </div>
      </div>


      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin 3s linear infinite;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.5s both;
        }
        
        .animate-bounce-in {
          animation: bounceIn 1s ease-out 1s both;
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;