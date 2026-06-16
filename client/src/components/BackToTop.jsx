import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'rgba(243,236,219,0.06)',
        border: '1px solid rgba(243,236,219,0.18)',
        color: '#f3ecdb',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 50,
        backdropFilter: 'blur(6px)',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity 0.25s ease, transform 0.25s ease, background 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(243,236,219,0.12)';
        e.currentTarget.style.borderColor = 'rgba(243,236,219,0.32)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(243,236,219,0.06)';
        e.currentTarget.style.borderColor = 'rgba(243,236,219,0.18)';
      }}
    >
      <i className="fas fa-arrow-up" style={{ fontSize: '13px' }}></i>
    </button>
  );
};

export default BackToTop;
