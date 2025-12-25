// Polished interactions + subtle GSAP reveals
document.addEventListener('DOMContentLoaded', () => {
  // inject year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // CTA placeholders
  ['loginBtn','signupBtn','ctaDemo','ctaRequest'].forEach(id=>{
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '#'; // placeholder for demo
    });
  });

  // GSAP reveals
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    gsap.from('.hero-title', { y: 36, opacity: 0, duration: 0.9, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, delay: 0.12 });
    gsap.from('.hero-media img', { scale: 1.04, opacity: 0, duration: 1.0, delay: 0.18, ease: 'power3.out' });
    gsap.from('.hero-quick li', { y: 10, opacity: 0, duration: 0.6, stagger: 0.06, delay: 0.22 });

    // Section reveals
    gsap.utils.toArray('.feature-card, .showcase-text, .stat-card, .cta-card').forEach(el => {
      gsap.from(el, {
        y: 28, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    // subtle parallax for showcase image
    gsap.to('.showcase-image', {
      y: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-showcase',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // Animated counters (once)
  const counters = document.querySelectorAll('.stat-val');
  if (counters.length) {
    const animateCounters = () => {
      counters.forEach(el => {
        const target = parseFloat(el.dataset.target || el.textContent) || 0;
        const isFloat = String(target).includes('.');
        const duration = 1200;
        const start = performance.now();
        const frame = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const value = isFloat ? (target * progress).toFixed(1) : Math.floor(target * progress);
          el.textContent = value;
          if (progress < 1) requestAnimationFrame(frame);
          else el.textContent = target;
        };
        requestAnimationFrame(frame);
      });
    };

    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });

    obs.observe(document.getElementById('stats') || document.body);
  }
});
