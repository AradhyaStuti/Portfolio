import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-accent text-black flex items-center justify-center z-50 hover:bg-teal-400 transition-colors shadow-lg shadow-accent/20"
    >
      <i className="fas fa-arrow-up text-sm"></i>
    </button>
  );
};

export default BackToTop;
