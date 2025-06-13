
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Refillia",
      description: "Refillia 💧 is a web application that helps users locate free water refill stations, reducing plastic waste and promoting sustainability. Users can discover, add, and review refill stations, making clean drinking water more accessible while encouraging businesses to participate in eco-friendly initiatives.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "Supabase", "Openstreetmap"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/lovable-uploads/987ae341-10a5-4d09-a189-f53e55e0bcaf.png"
    },
    {
      title: "GhumoAI",
      description: "GhumoAI is an innovative AI-powered travel planning platform that creates personalized city tour itineraries based on your preferences. The application combines artificial intelligence with local insights to deliver customized travel experiences.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "Supabase", "Openstreetmap"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/lovable-uploads/d2523d19-adc7-4c0f-86ab-8f652cfb209a.png"
    },
    {
      title: "EcoPlace",
      description: "EcoPlace 🌱 is a platform that provides real-time sustainability scores for e-commerce products, empowering consumers and businesses to make eco-friendly decisions.",
      technologies: ["React.js", "TailwindCSS", "JavaScript", "Node.js", "Express.js", "Firebase"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/lovable-uploads/a7ad1462-a814-43f4-b37d-dd94c86cfa90.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-slate-700/50 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Project Preview</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-blue-400 rounded-full text-xs border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2">
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
