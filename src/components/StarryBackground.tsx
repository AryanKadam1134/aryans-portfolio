
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
      if (!starsContainer) {
        console.log('Stars container not found');
        return;
      }
      
      const numberOfStars = window.innerWidth <= 768 ? 100 : 200;
      console.log('Creating', numberOfStars, 'twinkling stars');
      
      // Clear existing stars
      const existingStars = starsContainer.querySelectorAll('.twinkling-star');
      existingStars.forEach(star => star.remove());
      
      const colors = Object.values(starColors);
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'twinkling-star';
        star.style.position = 'absolute';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Make stars more visible
        const size = Math.random() * 4 + 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.borderRadius = '50%';
        star.style.opacity = String(Math.random() * 0.8 + 0.5);
        star.style.animationDuration = `${Math.random() * 4 + 2}s`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        star.style.pointerEvents = 'none';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = color;
        star.style.boxShadow = `0 0 ${size * 6}px ${color}, 0 0 ${size * 12}px ${color}40`;
        
        starsContainer.appendChild(star);
      }
      console.log('Twinkling stars created successfully');
    }

    // Enhanced multiple box shadows for background stars
    function multiple_box_shadow(n: number) {
      let value = '';
      const colors = ['#ffffff', '#4f46e5', '#7c3aed', '#2563eb', '#0891b2', '#059669'];
      
      for(let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 2 + 0.5;
        value += `${x}px ${y}px ${size}px ${color}`;
        if(i < n - 1) value += ', ';
      }
      return value;
    }

    // Enhanced mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      
      const stars = document.querySelectorAll('#stars, #stars2, #stars3');
      stars.forEach((starLayer, index) => {
        const speed = (index + 1) * 10;
        const x = mouseX * speed;
        const y = mouseY * speed;
        (starLayer as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });

      // Add parallax to twinkling stars
      const twinklingStars = document.querySelectorAll('.twinkling-star');
      twinklingStars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 3;
        const x = mouseX * speed;
        const y = mouseY * speed;
        (star as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    // Enhanced smooth parallax scrolling
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const stars = document.querySelectorAll('#stars, #stars2, #stars3');
      stars.forEach((starLayer, index) => {
        const speed = (index + 1) * 0.2;
        (starLayer as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    // Handle window resize
    const handleResize = () => {
      createTwinklingStars();
      initializeBackgroundStars();
    };

    // Initialize background stars with enhanced visibility
    const initializeBackgroundStars = () => {
      const isMobile = window.innerWidth <= 768;
      const stars1 = document.querySelector('#stars') as HTMLElement;
      const stars2 = document.querySelector('#stars2') as HTMLElement;
      const stars3 = document.querySelector('#stars3') as HTMLElement;

      if (stars1) {
        stars1.style.boxShadow = multiple_box_shadow(isMobile ? 500 : 1000);
        console.log('Stars1 box-shadow applied');
      }
      if (stars2) {
        stars2.style.boxShadow = multiple_box_shadow(isMobile ? 200 : 400);
        console.log('Stars2 box-shadow applied');
      }
      if (stars3) {
        stars3.style.boxShadow = multiple_box_shadow(isMobile ? 100 : 200);
        console.log('Stars3 box-shadow applied');
      }
    };

    // Wait for DOM to be ready
    const initializeStars = () => {
      console.log('Initializing starry background');
      initializeBackgroundStars();
      createTwinklingStars();
      
      // Create additional floating particles for more movement
      const createFloatingParticles = () => {
        const container = document.getElementById('stars-container');
        if (!container) return;

        for (let i = 0; i < 30; i++) {
          const particle = document.createElement('div');
          particle.style.position = 'absolute';
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.width = '1px';
          particle.style.height = '1px';
          particle.style.backgroundColor = '#ffffff';
          particle.style.borderRadius = '50%';
          particle.style.opacity = '0.6';
          particle.style.animation = `float ${Math.random() * 15 + 15}s linear infinite`;
          particle.style.boxShadow = '0 0 4px #ffffff';
          particle.style.pointerEvents = 'none';
          container.appendChild(particle);
        }
      };

      createFloatingParticles();
    };

    // Initialize immediately
    initializeStars();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
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
