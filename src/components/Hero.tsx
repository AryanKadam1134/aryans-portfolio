
import { ChevronDown, MapPin, Globe, Code, GraduationCap } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                John Doe
              </h1>
              <div className="flex flex-wrap gap-4 text-lg">
                <span className="flex items-center gap-2 text-blue-400">
                  <Globe className="w-5 h-5" />
                  UI/UX Designer
                </span>
                <span className="flex items-center gap-2 text-purple-400">
                  <Code className="w-5 h-5" />
                  Full Stack Developer
                </span>
                <span className="flex items-center gap-2 text-green-400">
                  <GraduationCap className="w-5 h-5" />
                  Computer Engineering Student
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Hello! I'm John, a passionate full-stack developer and aspiring UX designer. 
              Currently pursuing my Bachelor's in Computer Engineering and enrolled in the 
              Google UX Design Professional Certificate course.
            </p>

            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>New York, USA</span>
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                onClick={scrollToAbout}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </button>
              <button 
                onClick={scrollToAbout}
                className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg font-medium transition-all duration-300"
              >
                My Resume
              </button>
            </div>
          </div>

          {/* Right side - Profile image placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-slate-700/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <div className="w-32 h-32 bg-slate-700/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <p className="text-sm">Profile Photo</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </button>
    </section>
  );
};

export default Hero;
