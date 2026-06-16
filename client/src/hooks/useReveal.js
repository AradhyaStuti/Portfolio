import { useEffect } from 'react';

const useReveal = () => {
  useEffect(() => {
    const observe = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
      return observer;
    };

    // Run immediately and also after a delay to catch dynamically loaded content
    const obs1 = observe();
    const timer = setTimeout(() => observe(), 500);
    const timer2 = setTimeout(() => observe(), 1500);

    return () => {
      obs1.disconnect();
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);
};

export default useReveal;
