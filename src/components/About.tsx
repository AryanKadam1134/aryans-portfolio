
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in creating responsive, user-friendly applications using modern 
              technologies like React.js, Node.js, and various cloud services. My focus is on 
              combining technical expertise with user-centered design principles to build 
              intuitive and impactful digital experiences.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              When not coding, I enjoy exploring new tech, contributing to open-source, 
              and sharing knowledge with the community.
            </p>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-blue-500 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-purple-500 transition-colors">
                <Github className="w-5 h-5 text-gray-400 hover:text-purple-400" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-blue-400 transition-colors">
                <Code2 className="w-5 h-5 text-gray-400 hover:text-blue-400" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-green-500 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-green-400" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-400 text-xl">🌐</span>
              </div>
              <h4 className="text-blue-400 font-semibold mb-1">UI/UX Designer</h4>
            </div>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-purple-400 font-semibold mb-1">Full Stack Developer</h4>
            </div>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">🎓</span>
              </div>
              <h4 className="text-green-400 font-semibold mb-1">Computer Engineering Student</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
