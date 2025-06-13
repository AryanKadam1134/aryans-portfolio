
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "React.js", color: "text-blue-400" },
        { name: "JavaScript", color: "text-yellow-400" },
        { name: "HTML5", color: "text-orange-400" },
        { name: "CSS3", color: "text-blue-500" },
        { name: "Bootstrap", color: "text-purple-400" },
        { name: "TailwindCSS", color: "text-cyan-400" }
      ]
    },
    {
      title: "Backend", 
      icon: "🗄️",
      skills: [
        { name: "Node.js", color: "text-green-400" },
        { name: "Express.js", color: "text-gray-400" },
        { name: "Python", color: "text-yellow-400" },
        { name: "Flask", color: "text-red-400" }
      ]
    },
    {
      title: "Database",
      icon: "🗃️", 
      skills: [
        { name: "Firebase", color: "text-orange-400" },
        { name: "MySQL", color: "text-blue-400" },
        { name: "Supabase", color: "text-green-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-3 justify-center">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-slate-600 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className={`text-lg font-semibold ${skill.color} group-hover:scale-110 transition-transform`}>
                      {skill.name}
                    </div>
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
