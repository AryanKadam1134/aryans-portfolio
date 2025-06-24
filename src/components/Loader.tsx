import { useEffect, useState } from 'react';

const Loader = () => {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<{
    x: number;
    y: number;
    size: number;
    delay: number;
    color: string;
    shadow: string;
  }[]>([]);

  useEffect(() => {
    setMounted(true);

    // Star colors array with their respective opacities
    const starColors = [
      { color: 'rgb(255, 255, 255)', shadow: 'rgba(255, 255, 255, 0.4)' }, // white
      { color: 'rgb(147, 197, 253)', shadow: 'rgba(147, 197, 253, 0.4)' }, // blue
      { color: 'rgb(250, 204, 21)', shadow: 'rgba(250, 204, 21, 0.4)' },   // yellow
      { color: 'rgb(167, 139, 250)', shadow: 'rgba(167, 139, 250, 0.4)' }  // purple
    ];

    // Generate stars for each layer with different colors
    const generateStarsForLayer = (count: number, size: number, baseDelay: number) => 
      Array.from({ length: count }).map(() => {
        const colorIndex = Math.floor(Math.random() * starColors.length);
        return {
          x: Math.random() * 100,
          y: Math.random() * 100,
          size,
          delay: baseDelay + (Math.random() * 1.5),
          color: starColors[colorIndex].color,
          shadow: starColors[colorIndex].shadow
        };
      });

    // Create stars for all three layers with increased density
    const newStars = [
      ...generateStarsForLayer(200, 1, 0),     // Small stars
      ...generateStarsForLayer(150, 2, 0.3),   // Medium stars
      ...generateStarsForLayer(75, 3, 0.6)     // Large stars
    ];

    setStars(newStars);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 bg-[#09090f]">
      {/* Star field container */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${star.y}%`,
              left: `${star.x}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: star.size > 1 
                ? `0 0 ${star.size * 2}px ${star.shadow},
                   0 0 ${star.size * 4}px ${star.shadow}`
                : 'none',
              opacity: 0,
              animation: `twinkleIn 2s ease-out forwards`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>
      
      {/* Centered loading text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/50 text-sm tracking-widest">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;