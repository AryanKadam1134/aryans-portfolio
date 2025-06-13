
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      year: "2019 - 2021",
      gpa: "3.8/4.0"
    },
    {
      degree: "Bachelor of Science in Software Engineering", 
      school: "University of California, Berkeley",
      year: "2015 - 2019",
      gpa: "3.7/4.0"
    }
  ];

  return (
    <section id="education" className="py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                <h4 className="text-blue-400 mb-2">{edu.school}</h4>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{edu.year}</span>
                  <span>GPA: {edu.gpa}</span>
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
