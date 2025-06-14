import { Award, ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Certificates = () => {
  useIntersectionObserver();

  const certificates = [
    {
      title: "Google UI/UX Professional Certificate",
      issuer: "Coursera",
      date: "2025",
      url: "https://www.coursera.org/certificate/example" // Add your actual certificate URL
    },
    {
      title: "1st Runner Up in Hackathon",
      issuer: "Beachack Season 6",
      date: "08/03/2025",
      url: "https://example.com/beachack-certificate" // Add your actual certificate URL
    },
    {
      title: "Finalist in Hackathon",
      issuer: "AceHack 5.0",
      date: "29/04/2025",
      url: "https://example.com/acehack-certificate" // Add your actual certificate URL
    },
    {
      title: "Full Stack Development",
      issuer: "freeCodeCamp",
      date: "2021",
      url: "https://www.freecodecamp.org/certification/example" // Add your actual certificate URL
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Certifications
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-start gap-4 hover:border-slate-600 transition-all duration-300 hover:scale-105 group ${
                index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
              }`}
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                <span className="text-gray-500 text-sm block mb-3">{cert.date}</span>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-medium">View Certificate</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
