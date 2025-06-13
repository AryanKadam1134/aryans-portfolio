
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack solution with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Manager",
      description: "Real-time collaborative task management app",
      technologies: ["Vue.js", "Express", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather app with charts and forecasts",
      technologies: ["React", "TypeScript", "API"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5 hover:border-slate-600 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-slate-700 text-blue-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a 
                  href={project.githubUrl} 
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a 
                  href={project.liveUrl} 
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
