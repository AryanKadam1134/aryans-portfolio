
const About = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About
        </h2>
        <div className="text-center space-y-6">
          <p className="text-gray-400 leading-relaxed">
            Passionate full-stack developer with 5+ years of experience creating 
            digital solutions. I focus on clean code, user experience, and modern technologies.
          </p>
          <p className="text-gray-400 leading-relaxed">
            When not coding, I enjoy exploring new tech, contributing to open-source, 
            and sharing knowledge with the community.
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <span className="px-3 py-1 bg-slate-800 text-blue-400 rounded text-sm">
              Problem Solver
            </span>
            <span className="px-3 py-1 bg-slate-800 text-purple-400 rounded text-sm">
              Team Player
            </span>
            <span className="px-3 py-1 bg-slate-800 text-green-400 rounded text-sm">
              Learner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
