import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  useIntersectionObserver();
  
  const projects = [
    {
      title: "Refillia",
      description: "Refillia 💧 is a web application that helps users locate free water refill stations, reducing plastic waste and promoting sustainability. Users can discover, add, and review refill stations, making clean drinking water more accessible while encouraging businesses to participate in eco-friendly initiatives.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "Supabase", "Openstreetmap"],
      githubUrl: "https://github.com/AryanKadam1134/Refillia",
      liveUrl: "https://team-deployers.vercel.app/",
      image: "public/docs/refillia.png"
    },
    {
      title: "GhumoAI",
      description: "GhumoAI is an innovative AI-powered travel planning platform that creates personalized city tour itineraries based on your preferences. The application combines artificial intelligence with local insights to deliver customized travel experiences.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "Supabase", "Openstreetmap"],
      githubUrl: "https://github.com/AryanKadam1134/GhumoAI",
      liveUrl: "https://ghumo-ai.vercel.app/",
      image: "public/docs/ghomoai.png"
    },
    {
      title: "EcoPlace",
      description: "EcoPlace 🌱 is a platform that provides real-time sustainability scores for e-commerce products, empowering consumers and businesses to make eco-friendly decisions.",
      technologies: ["React.js", "TailwindCSS", "JavaScript", "Node.js", "Express.js", "Firebase"],
      githubUrl: "https://github.com/AryanKadam1134/EcoPlace",
      liveUrl: "https://eco-place-cyan.vercel.app/",
      image: "public/docs/ecoplace.png"
    },
    {
      title: "VConnect",
      description: "VConnect🤝 is a gamified web platform that connects volunteers with organizers by offering event management tools, a points-based reward system (AURA), and social features to make volunteering engaging and rewarding.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "Firebase"],
      githubUrl: "https://github.com/AryanKadam1134/Vconnect",
      liveUrl: "https://vconnect-ecru.vercel.app/",
      image: "public/docs/vconnect.png"
    },
    {
      title: "Image Caption Generator",
      description: "The 🖼️ Image Caption Generator is a web application that allows users to upload an image and receive an AI-generated caption describing the content of the image. The project utilizes a Flask-based backend for image processing and a React.js frontend for an interactive user interface.",
      technologies: ["React.js", "TailwindCSS", "Python", "Flask"],
      githubUrl: "https://github.com/AryanKadam1134/Image-Caption-Generator",
      liveUrl: "",
      image: "public/docs/image_caption_generator.png"
    },
    {
      title: "Portfolio Website",
      description: "Hi there!! 👋 I'm Aryan Kadam... This is a brief info about me and my capabilities. Showcasing what I have practised and achieved till now... and a quick go-through of my Skills and Projects...",
      technologies: ["React.js", "TailwindCSS"],
      githubUrl: "https://github.com/AryanKadam1134/aryans-portfolio.git",
      liveUrl: "",
      image: "public/docs/portfolio1.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-scale">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        {/* Changed grid columns for different breakpoints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="fade-scale h-full" // Added h-full to ensure equal height
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/20 group h-full flex flex-col"> {/* Added flex-col and h-full */}
                {/* Project Image */}
                <div className="aspect-[16/9] bg-slate-700/50 relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image.replace('public/', '/')} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                      <span className="text-slate-500 text-sm">Project Preview</span>
                    </div>
                  )}
                </div>
                
                {/* Content container with flex-grow to push links to bottom */}
                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2.5 py-1 bg-slate-700/50 text-blue-400 rounded-full text-xs border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4 mt-auto"> {/* Added mt-auto */}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit site
                      </a>
                    )}
                  </div>
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
