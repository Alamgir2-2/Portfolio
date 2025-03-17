const Skills = () => {
    const skills = [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Node.js", level: 85 },
    ];
  
    return (
      <section id="skills" className="py-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="max-w-4xl mx-auto px-4">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full">
                <div
                  className="bg-purple-500 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
                  style={{ width: `${skill.level}%` }}
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;