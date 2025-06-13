
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import StarryBackground from "@/components/StarryBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <StarryBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
      </main>
    </div>
  );
};

export default Index;
