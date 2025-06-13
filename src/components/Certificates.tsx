
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
    <section id="certificates" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Certificates
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
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
