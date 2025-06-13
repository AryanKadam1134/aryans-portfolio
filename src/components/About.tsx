
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm a passionate full-stack developer with over 5 years of experience in creating 
              digital solutions that make a difference. I love turning complex problems into simple, 
              beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge with the developer community through blogs and talks.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Team Player
              </span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                Continuous Learner
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
              <div className="w-60 h-60 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
                JD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
