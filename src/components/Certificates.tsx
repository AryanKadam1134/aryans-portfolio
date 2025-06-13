
import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      title: "Google Cloud Developer",
      issuer: "Google Cloud",
      date: "2022"
    },
    {
      title: "React Advanced",
      issuer: "Meta",
      date: "2023"
    },
    {
      title: "Full Stack Development",
      issuer: "freeCodeCamp",
      date: "2021"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Certifications
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-start gap-4 hover:border-slate-600 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                <span className="text-gray-500 text-sm">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
