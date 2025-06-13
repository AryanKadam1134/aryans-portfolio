
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Python", "Express", "GraphQL"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "AWS", "Testing"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5"
            >
              <h3 className="text-lg font-semibold mb-4 text-center text-blue-400">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-slate-700/50 rounded p-2 text-center text-gray-300 text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
