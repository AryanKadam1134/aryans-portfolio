
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          John Doe
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Building digital experiences with modern technologies
        </p>
        <button 
          onClick={scrollToAbout}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors"
        >
          View Work
        </button>
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
