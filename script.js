// Theme switcher
const themeSwitcher = document.getElementById('theme-switcher');
    const elementsToToggle = [
        document.body,
        document.querySelector('.navbar'),
        document.querySelector('.header'),
        ...document.querySelectorAll('.header-image'),
        ...document.querySelectorAll('.about'),
        ...document.querySelectorAll('.project-card'),
        ...document.querySelectorAll('.category'),
        ...document.querySelectorAll('.skill-item'),
        document.querySelector('.footer')
    ];

    themeSwitcher.addEventListener('click', () => {
        elementsToToggle.forEach(element => element.classList.toggle('dark-theme'));
        const isDark = document.body.classList.contains('dark-theme');
        themeSwitcher.textContent = isDark ? '☀️' : '🌙';
    });

// navbar
gsap.from(".navbar", { 
    y: -100, 
    opacity: 0, 
    duration: 1, 
    ease: "bounce.out" 
  });
  gsap.utils.toArray(".nav-links a").forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.1, duration: 0.3 });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, duration: 0.3 });
    });
  });
  
//Header
  gsap.from(".header h1", { 
    x: -100, 
    opacity: 0, 
    duration: 1, 
    ease: "power3.out" 
  });
  
//Scroll
gsap.registerPlugin(ScrollTrigger);

gsap.from(".skills", { 
  opacity: 0, 
  scale: 0.5, 
  duration: 1, 
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%", 
    toggleActions: "play none none none"
  }
});
