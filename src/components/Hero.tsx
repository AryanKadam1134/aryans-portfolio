import { ChevronDown, MapPin, Globe, Code, GraduationCap, Github, Linkedin, Code2 } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Add X icon component
const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5">
    <path 
      fill="currentColor" 
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    />
  </svg>
);

const Hero = () => {
  useIntersectionObserver();
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 md:px-6 pt-20 md:pt-28 pb-12 md:pb-16">
      <div className="container mx-auto max-w-6xl"> {/* Reduced from max-w-7xl */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center"> {/* Reduced gaps */}
          {/* Text content - Left side */}
          <div className="space-y-3 md:space-y-5 text-center lg:text-left order-2 lg:order-1"> {/* Reduced vertical spacing */}
            <div className="space-y-2 md:space-y-3 fade-in-left"> {/* Reduced title spacing */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"> {/* Reduced font sizes */}
                Aryan Kadam
              </h1>
              <div className="flex flex-wrap gap-2 md:gap-3 text-sm md:text-base justify-center lg:justify-start">
                <span className="flex items-center gap-2 text-blue-400">
                  <Globe className="w-4 h-4 md:w-5 md:h-5" />
                  UI/UX Designer
                </span>
                <span className="flex items-center gap-2 text-purple-400">
                  <Code className="w-4 h-4 md:w-5 md:h-5" />
                  Full Stack Developer
                </span>
                <span className="flex items-center gap-2 text-green-400">
                  <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                  Computer Engineering Student
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 fade-in"> {/* Reduced max width and font size */}
               Computer Science & Engineering student and Full-Stack Developer with hands-on experience building real-world
               web applications using technologies like React.js, Node.js, and Supabase. Passionate about solving complex problems,
               understanding user needs, and delivering clean, scalable solutions. Skilled at working in collaborative team
               environments and continuously learning new technologies to stay ahead in a fast-paced development landscape.
            </p>

            <div className="fade-in">
              <div className="flex items-center gap-2 text-gray-400 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span>Kalyan, Maharashtra</span>
              </div>
            </div>

            <div className="fade-in">
              {/* Social links */}
              <div className="flex gap-2 md:gap-3 justify-center lg:justify-start"> {/* Reduced gaps */}
                <a 
                  href="https://www.linkedin.com/in/aryankadam04" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-blue-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-gray-400 hover:text-blue-400" />
                </a>
                <a 
                  href="https://github.com/AryanKadam1134" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-purple-500 transition-colors"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5 text-gray-400 hover:text-purple-400" />
                </a>
                <a 
                  href="https://devfolio.co/@aryankadam3114" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-blue-400 transition-colors"
                >
                  <Code2 className="w-4 h-4 md:w-5 md:h-5 text-gray-400 hover:text-blue-400" />
                </a>
                <a 
                  href="https://x.com/aryan61434" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-white transition-colors"
                >
                  <XIcon />
                </a>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 md:gap-3 pt-2 md:pt-3 justify-center lg:justify-start flex-wrap"> {/* Reduced spacing */}
                <button 
                  onClick={scrollToProjects}
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 text-sm md:text-base"
                >
                  Contact Me
                </button>
                <a 
                  href="public/docs/Aryan_s_Resume (9).pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-2.5 md:py-3 border border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg font-medium transition-all duration-300 text-sm md:text-base"
                >
                  My Resume
                </a>
              </div>
            </div>
          </div>

          {/* Profile image - Right side */}
          <div className="fade-in-right">
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="relative max-w-[80%] lg:max-w-full"> {/* Reduced from 90% */}
                <div className="aspect-[3/4] w-full max-w-[300px] lg:max-w-[400px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden"> {/* Reduced max widths */}
                  <img 
                    src="/docs/1.jpeg" 
                    alt="Aryan Kadam"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 md:w-5 md:h-5 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-500" />
      </button>
    </section>
  );
};

export default Hero;
