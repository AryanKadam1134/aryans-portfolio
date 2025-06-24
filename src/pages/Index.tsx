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
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const minLoadingTime = 2000;
    const startTime = Date.now();

    const preloadContent = async () => {
      try {
        const imagePromises = [
          '/docs/1.jpeg',
          '/docs/portfolio1.png',
          '/docs/ghomoai.png',
          '/docs/ecoplace.png',
          '/docs/vconnect.png',
          '/docs/image_caption_generator.png',
          '/docs/refillia.png'
        ].map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        setTimeout(() => {
          setLoading(false);
          // Add small delay before showing content
          requestAnimationFrame(() => {
            setContentVisible(true);
          });
        }, remainingTime);

      } catch (error) {
        console.error('Failed to preload content:', error);
        setLoading(false);
        requestAnimationFrame(() => {
          setContentVisible(true);
        });
      }
    };

    preloadContent();
  }, []);

  return (
    <div className="min-h-screen bg-[#09090f]">
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-1000 ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Loader />
      </div>

      <div 
        className={`min-h-screen text-white relative transition-opacity duration-1000 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
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
    </div>
  );
};

export default Index;
