import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, color: "#61dafb" }, // React Color
    { name: "Tailwind CSS", level: 95, color: "#38b2ac" }, // Tailwind Color
    { name: "Node.js", level: 85, color: "#68a063" }, // Node.js Color
    { name: "JavaScript", level: 92, color: "#f7df1e" }, // JavaScript Color
    { name: "PHP", level: 88, color: "#8993be" }, // PHP Color
    { name: "MySQL", level: 80, color: "#00758f" }, // MySQL Color
  ];

  return (
    <section id="skills" className="py-20 bg- text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-white">🚀 Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Skill Name */}
              <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>

              {/* Circular Progress Indicator */}
              <div className="w-24 h-24 mb-4">
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={{
                    path: {
                      stroke: skill.color, // Dynamic color for each skill
                    },
                    text: {
                      fill: "#fff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
