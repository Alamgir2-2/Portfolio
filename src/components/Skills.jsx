import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaJs, FaPhp, FaDatabase, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkills, setHoveredSkills] = useState({});

  const skills = [
    { name: "React", level: 90, color: "#61dafb", icon: <FaReact />, category: "Frontend" },
    { name: "Node.js", level: 85, color: "#68a063", icon: <FaNodeJs />, category: "Backend" },
    { name: "JavaScript", level: 92, color: "#f7df1e", icon: <FaJs />, category: "Language" },
    { name: "PHP", level: 88, color: "#8993be", icon: <FaPhp />, category: "Backend" },
    { name: "Next.js", level: 88, color: "#000000", icon: <SiNextdotjs />, category: "Framework" },
    { name: "Express.js", level: 78, color: "#68a063", icon: <SiExpress />, category: "Backend" },
    { name: "MySQL", level: 80, color: "#00758f", icon: <FaDatabase />, category: "Database" },
    { name: "MongoDB", level: 70, color: "#47A248", icon: <SiMongodb />, category: "Database" },
    { name: "jQuery", level: 75, color: "#0769ad", icon: <SiJquery />, category: "Library" },
    { name: "AJAX", level: 78, color: "#2c3e50", icon: <FaJs />, category: "Technology" },
    { name: "Tailwind CSS", level: 95, color: "#38b2ac", icon: <SiTailwindcss />, category: "CSS" },
    { name: "Bootstrap", level: 85, color: "#7952b3", icon: <FaBootstrap />, category: "CSS" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseEnter = (skillName) => {
    setHoveredSkills(prev => ({
      ...prev,
      [skillName]: Date.now()
    }));
  };

  const handleMouseLeave = (skillName) => {
    setHoveredSkills(prev => ({
      ...prev,
      [skillName]: null
    }));
  };

  const CircularProgress = ({ value, color, children, isHovered }) => {
    const radius = 36;
    const strokeWidth = 4;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (isHovered ? value / 100 : 0) * circumference;

    return (
      <div className="relative w-20 h-20">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="rgba(255,255,255,0.1)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            style={{
              strokeDashoffset,
              transition: 'stroke-dashoffset 1s ease-in-out',
              filter: `drop-shadow(0 0 6px ${color}40)`
            }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="min-h-screen py-20 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4 sm:px-6 md:px-0">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Technical Skills
          </h2>
          <div
            className={`w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6 rounded-full transform transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
          ></div>
        </div>


        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const isHovered = hoveredSkills[skill.name];

            return (
              <div
                key={index}
                className={`group relative flex flex-col items-center p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl 
        bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 
        hover:border-gray-600/50 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: `0 8px 32px ${skill.color}20`
                }}
                onMouseEnter={() => handleMouseEnter(skill.name)}
                onMouseLeave={() => handleMouseLeave(skill.name)}
              >
                {/* Glowing Border */}
                <div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{ background: `linear-gradient(45deg, ${skill.color}40, transparent, ${skill.color}40)` }}
                ></div>

                {/* Category Badge */}
                <div className="absolute -top-2 left-2 px-2 py-0.5 text-[10px] sm:text-xs bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-gray-300 border border-gray-600 font-semibold">
                  {skill.category}
                </div>

                {/* Skill Icon */}
                <div
                  className="text-2xl sm:text-4xl mb-3 sm:mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10"
                  style={{
                    color: skill.color,
                    filter: `drop-shadow(0 0 12px ${skill.color}60)`
                  }}
                >
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-sm sm:text-lg font-bold mb-2 text-center relative z-10 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Circular Progress */}
                <div className="mb-3 sm:mb-4 relative z-10">
                  <CircularProgress value={skill.level} color={skill.color} isHovered={isHovered}>
                    {!isHovered ? (
                      <div className="text-xl sm:text-2xl mb-1 mr-2" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                    ) : (
                      <span className="text-[10px] sm:text-xs font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    )}
                  </CircularProgress>
                </div>

                {/* Skill Level Bar */}
                <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2 mb-2 relative z-10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out relative"
                    style={{
                      width: isHovered ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      boxShadow: `0 0 10px ${skill.color}60`
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Mastery Level */}
                <div className="text-center relative z-10">
                  <p className="text-xs sm:text-sm font-semibold text-gray-300">
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Learning'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;