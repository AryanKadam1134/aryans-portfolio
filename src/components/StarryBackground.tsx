
import { useEffect } from 'react';

const StarryBackground = () => {
  useEffect(() => {
    // Star colors configuration
    const starColors = {
      red: '#ff3366',
      blue: '#4169e1',
      yellow: '#ffd700',
      white: '#ffffff'
    };

    // Create twinkling stars
    function createTwinklingStars() {
      const starsContainer = document.getElementById('stars-container');
      if (!starsContainer) return;
      
      const numberOfStars = window.innerWidth <= 768 ? 50 : 100;
      
      // Clear existing stars
      const existingStars = starsContainer.querySelectorAll('.twinkling-star');
      existingStars.forEach(star => star.remove());
      
      const colors = [
        starColors.red,
        starColors.blue,
        starColors.yellow,
        starColors.white
      ];
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'twinkling-star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.opacity = String(Math.random() * 0.7 + 0.3);
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.boxShadow = `0 0 10px ${star.style.backgroundColor}`;
        starsContainer.appendChild(star);
      }
    }

    // Generate multiple box shadows for stars
    function multiple_box_shadow(n: number) {
      let value = '';
      for(let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        const color = Math.random() > 0.7 ? '#4f46e5' : '#94a3b8';
        const size = Math.random() * 2;
        value += `${x}px ${y}px ${size}px ${color}`;
        if(i < n - 1) value += ', ';
      }
      return value;
    }

    // Add mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const stars = document.querySelectorAll('#stars, #stars2, #stars3');
      stars.forEach((starLayer, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX * speed);
        const y = (mouseY * speed);
        (starLayer as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    // Add smooth parallax scrolling
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const stars = document.querySelectorAll('#stars, #stars2, #stars3');
      stars.forEach((starLayer, index) => {
        const speed = (index + 1) * 0.5;
        (starLayer as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    // Handle window resize
    const handleResize = () => {
      createTwinklingStars();
    };

    // Initialize star animations
    const isMobile = window.innerWidth <= 768;
    const stars1 = document.querySelector('#stars') as HTMLElement;
    const stars2 = document.querySelector('#stars2') as HTMLElement;
    const stars3 = document.querySelector('#stars3') as HTMLElement;

    if (stars1) stars1.style.boxShadow = multiple_box_shadow(isMobile ? 300 : 700);
    if (stars2) stars2.style.boxShadow = multiple_box_shadow(isMobile ? 100 : 200);
    if (stars3) stars3.style.boxShadow = multiple_box_shadow(isMobile ? 50 : 100);

    createTwinklingStars();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default StarryBackground;
