import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaReact, FaNodeJs, FaJs, FaPhp, FaDatabase, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiNextdotjs,SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, color: "#61dafb", icon: <FaReact /> },
    { name: "Node.js", level: 85, color: "#68a063", icon: <FaNodeJs /> },
    { name: "JavaScript", level: 92, color: "#f7df1e", icon: <FaJs /> },
    { name: "PHP", level: 88, color: "#8993be", icon: <FaPhp /> },
    { name: "Next.js", level: 88, color: "#434343", icon:<SiNextdotjs /> },
    { name: "Express.js", level: 78, color: "#f1d108", icon:<SiExpress />},
    { name: "MySQL", level: 80, color: "#00758f", icon: <FaDatabase /> },
    { name: "MongoDB", level: 70, color: "#00fefa", icon: <SiMongodb /> },
    { name: "jQuery", level: 75, color: "#0769ad", icon: <SiJquery /> }, 
    { name: "AJAX", level: 78, color: "#2c3e50", icon: <FaJs /> },
    { name: "Tailwind CSS", level: 95, color: "#38b2ac", icon: <SiTailwindcss /> },
    { name: "Bootstrap", level: 85, color: "#7952b3", icon: <FaBootstrap /> },
  ];

  return (
    <section id="skills" className="py-20 bg- text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-white">🚀 Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group relative flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-2" style={{ color: skill.color }}>
                {/* {skill.icon} */}
              </div>
              {/* Skill Name */}
              <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-24 h-24 mb-4 relative">
                <CircularProgressbar
                  value={skill.level}
                  styles={{
                    path: {
                      stroke: skill.color,
                    },
                    trail: {
                      stroke: "#0000", 
                    },
                  }}
                />
                {/* Icon and Percentage Inside the Circle */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  {/* <p className="text-sm font-bold mt-1" style={{ color: skill.color }}>
                    {skill.level}%
                  </p> */}
                </div>
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-4 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.level}% Mastery
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
