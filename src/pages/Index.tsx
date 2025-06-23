import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import StarryBackground from "@/components/StarryBackground";
import Loader from "@/components/Loader";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Allow time for stars to fill in
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds to match star animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className={`min-h-screen bg-slate-950 text-white relative overflow-x-hidden transition-opacity duration-500 ${
        loading ? 'opacity-0' : 'opacity-100'
      }`}>
        <StarryBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Certificates />
            <Education />
          </main>
        </div>
      </div>
    </>
  );
};

export default Index;
