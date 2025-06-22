import { GraduationCap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      school: "SSPM's College of Engineering, Mumbai University",
      year: "2021 - 2025",
      score: "7.86", // CGPA
      type: "cgpa"
    },
    {
      degree: "HSC in Science", 
      school: "R. K. Talreja College of Arts, Science & Commerce",
      year: "2019 - 2021",
      score: "80.5", // Percentage
      type: "percentage"
    },
    {
      degree: "SSC", 
      school: "SPP New Era High School",
      year: "2018 - 2019",
      score: "68", // Percentage
      type: "percentage"
    }
  ];

  const formatScore = (score: string, type: string) => {
    if (!score || score === "-") return "Ongoing";
    return type === "cgpa" ? `CGPA: ${score}` : `Percentage: ${score}%`;
  };

  useIntersectionObserver();
  
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Academic Background
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-start gap-4 hover:border-slate-600 transition-all duration-300 hover:scale-105 fade-in ${
                index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
              }`}
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                <h4 className="text-purple-400 mb-2">{edu.school}</h4>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{edu.year}</span>
                  <span>{formatScore(edu.score, edu.type)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
