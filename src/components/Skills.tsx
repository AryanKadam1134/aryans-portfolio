import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "💻",
      skills: [
        { 
          name: "React.js", 
          color: "text-blue-400", 
          logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
        },
        { 
          name: "JavaScript", 
          color: "text-yellow-400", 
          logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
        },
        { 
          name: "HTML5", 
          color: "text-orange-400", 
          logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg"
        },
        { 
          name: "CSS3", 
          color: "text-blue-500", 
          logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg"
        },
        { 
          name: "Bootstrap", 
          color: "text-purple-400", 
          logo: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"
        },
        { 
          name: "TailwindCSS", 
          color: "text-cyan-400", 
          logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
        }
      ]
    },
    {
      title: "Backend Technologies", 
      icon: "🗄️",
      skills: [
        { 
          name: "Node.js", 
          color: "text-green-400", 
          logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
        },
        { 
          name: "Express.js", 
          color: "text-gray-400", 
          logo: "https://cdn.iconscout.com/icon/premium/png-256-thumb/express-js-5379348-4492470.png?f=webp&w=256"
        },
        { 
          name: "Python", 
          color: "text-yellow-400", 
          logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg"
        },
        { 
          name: "Flask", 
          color: "text-red-400", 
          logo: "https://cdn.worldvectorlogo.com/logos/flask.svg"
        }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "☁️", 
      skills: [
        { 
          name: "Firebase", 
          color: "text-orange-400", 
          logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
        },
        { 
          name: "MySQL", 
          color: "text-blue-400", 
          logo: "https://cdn.cdnlogo.com/logos/m/10/mysql.svg"
        },
        { 
          name: "Supabase", 
          color: "text-green-400", 
          logo: "/docs/supabase-logo-png_seeklogo-435677-removebg-preview.png"
        }
      ]
    }
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="skills" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 fade-in opacity-0 transition-all duration-700 translate-y-10">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        <div className="space-y-12 md:space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6 md:space-y-8 fade-in opacity-0 transition-all duration-700 translate-y-10">
              <div className="flex items-center gap-2 md:gap-3 justify-center">
                <span className="text-2xl md:text-3xl">{category.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 md:p-4 text-center hover:border-slate-600 transition-all duration-300 hover:scale-105 group flex flex-col items-center justify-center w-[100px] md:w-[140px]"
                  >
                    <div className="mb-2 md:mb-3 h-8 md:h-10 flex items-center justify-center">
                      <img 
                        src={skill.logo}
                        alt={skill.name}
                        className="w-auto h-full object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className={`text-xs md:text-sm font-semibold ${skill.color} group-hover:scale-110 transition-transform`}>
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
