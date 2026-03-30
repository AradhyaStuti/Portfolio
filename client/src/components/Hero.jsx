import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const roles = ['Data Scientist', 'Full Stack Developer', 'Deep Learning Engineer', 'Generative AI Developer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    if (!deleting && text === current) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && text === '') {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(deleting ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section
      style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end',
        background: `linear-gradient(to bottom, rgba(10,12,16,0.15) 0%, rgba(10,12,16,0.96) 100%), url('/me.jpeg') center/cover no-repeat`,
      }}
    >
      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="particle" style={{ left: `${15 + i * 15}%`, bottom: '0', animationDuration: `${6 + i * 2}s`, animationDelay: `${i * 0.8}s` }} />
      ))}

      <div className="container" style={{ paddingBottom: '60px', paddingTop: '360px', position: 'relative', zIndex: 10 }}>
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#14b8a6', letterSpacing: '0.02em' }}>
            {text}<span className="typing-cursor"></span>
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '28px', maxWidth: '720px', letterSpacing: '-0.03em', color: '#fff' }}>
          Engineering systems that
          <span style={{ color: '#14b8a6' }}> learn</span>,
          <span style={{ color: '#14b8a6' }}> adapt</span>, and
          <span style={{ color: '#14b8a6' }}> scale</span>.
        </h1>
        <p style={{ color: '#64748b', fontSize: '17px', maxWidth: '480px', marginBottom: '44px', lineHeight: 1.7 }}>
          Building intelligent AI/ML systems and scalable web applications that solve real-world problems — from concept to production.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Link to="/projects" className="btn-primary">
            View Projects <i className="fas fa-arrow-right"></i>
          </Link>
          <Link to="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
