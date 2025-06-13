
import { useEffect } from 'react';

const StarryBackground = () => {
  useEffect(() => {
    // Enhanced star colors configuration with better visibility
    const starColors = {
      red: '#ff6b6b',
      blue: '#4dabf7',
      yellow: '#ffd43b',
      white: '#ffffff',
      purple: '#9775fa',
      green: '#51cf66'
    };

    // Create enhanced twinkling stars
    function createTwinklingStars() {
      const starsContainer = document.getElementById('stars-container');
      if (!starsContainer) return;
      
      const numberOfStars = window.innerWidth <= 768 ? 80 : 150;
      
      // Clear existing stars
      const existingStars = starsContainer.querySelectorAll('.twinkling-star');
      existingStars.forEach(star => star.remove());
      
      const colors = Object.values(starColors);
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'twinkling-star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Enhanced star sizes and brightness
        const size = Math.random() * 4 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = String(Math.random() * 0.8 + 0.4);
        star.style.animationDuration = `${Math.random() * 4 + 1.5}s`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = color;
        star.style.boxShadow = `0 0 ${size * 4}px ${color}, 0 0 ${size * 8}px ${color}40`;
        
        starsContainer.appendChild(star);
      }
    }

    // Enhanced multiple box shadows for background stars
    function multiple_box_shadow(n: number) {
      let value = '';
      const colors = ['#4f46e5', '#7c3aed', '#2563eb', '#0891b2', '#059669', '#dc2626'];
      
      for(let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 3 + 0.5;
        value += `${x}px ${y}px ${size}px ${color}`;
        if(i < n - 1) value += ', ';
      }
      return value;
    }

    // Enhanced mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const stars = document.querySelectorAll('#stars, #stars2, #stars3');
      stars.forEach((starLayer, index) => {
        const speed = (index + 1) * 15;
        const x = (mouseX * speed - speed / 2);
        const y = (mouseY * speed - speed / 2);
        (starLayer as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });

      // Add parallax to twinkling stars
      const twinklingStars = document.querySelectorAll('.twinkling-star');
      twinklingStars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 5;
        const x = (mouseX * speed - speed / 2);
        const y = (mouseY * speed - speed / 2);
        (star as HTMLElement).style.transform = `translate(${x}px, ${y}px) scale(${(star as HTMLElement).style.transform.includes('scale') ? (star as HTMLElement).style.transform.match(/scale\(([\d.]+)\)/)?.[1] || '1' : '1'})`;
      });
    };

    // Enhanced smooth parallax scrolling
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const stars = document.querySelectorAll('#stars, #stars2, #stars3');
      stars.forEach((starLayer, index) => {
        const speed = (index + 1) * 0.3;
        (starLayer as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    // Handle window resize
    const handleResize = () => {
      createTwinklingStars();
    };

    // Initialize enhanced star animations
    const isMobile = window.innerWidth <= 768;
    const stars1 = document.querySelector('#stars') as HTMLElement;
    const stars2 = document.querySelector('#stars2') as HTMLElement;
    const stars3 = document.querySelector('#stars3') as HTMLElement;

    if (stars1) stars1.style.boxShadow = multiple_box_shadow(isMobile ? 400 : 800);
    if (stars2) stars2.style.boxShadow = multiple_box_shadow(isMobile ? 150 : 300);
    if (stars3) stars3.style.boxShadow = multiple_box_shadow(isMobile ? 80 : 150);

    createTwinklingStars();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Create additional floating particles
    const createFloatingParticles = () => {
      const container = document.getElementById('stars-container');
      if (!container) return;

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.backgroundColor = '#6366f1';
        particle.style.borderRadius = '50%';
        particle.style.opacity = '0.3';
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.boxShadow = '0 0 6px #6366f1';
        container.appendChild(particle);
      }
    };

    createFloatingParticles();

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
