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
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content - Left side on desktop, bottom on mobile */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 md:space-y-4 fade-in-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                Aryan Kadam
              </h1>
              <div className="flex flex-wrap gap-3 md:gap-4 text-base md:text-lg justify-center lg:justify-start">
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
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 fade-in">
              I specialize in creating responsive, user-friendly applications using modern 
              technologies like React.js, Node.js, and various cloud services. My focus is on 
              combining technical expertise with user-centered design principles to build 
              intuitive and impactful digital experiences.
            </p>

            <div className="fade-in">
              <div className="flex items-center gap-2 text-gray-400 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span>New York, USA</span>
              </div>
            </div>

            <div className="fade-in">
              {/* Social links */}
              <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
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
              <div className="flex gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start flex-wrap">
                <button 
                  onClick={scrollToProjects}
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 text-sm md:text-base"
                >
                  Contact Me
                </button>
                <a 
                  href="/path-to-your-resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-2.5 md:py-3 border border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg font-medium transition-all duration-300 text-sm md:text-base"
                >
                  My Resume
                </a>
              </div>
            </div>
          </div>

          {/* Profile image - Right side on desktop, top on mobile */}
          <div className="fade-in-right">
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="w-64 h-[350px] md:w-96 md:h-[500px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <img 
                    src="/docs/1.jpeg" 
                    alt="Aryan Kadam"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 md:w-6 md:h-6 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
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
