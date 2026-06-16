import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const roles = ['AI/ML Engineer', 'MERN Stack Developer', 'Deep Learning Engineer', 'Generative AI Developer'];

const FULL_NAME = 'Aradhya Stuti';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [name, setName] = useState('');

  // typewriter — wrote this by hand rather than pulling in react-typed.
  // 80ms typing / 40ms deleting / 1800ms pause feels right after tweaking.
  // every branch returns a cleanup so the timer is cancelled if the user
  // navigates away mid-cycle.
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
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

  // type the name once on mount (no looping — it's not a marketing line)
  useEffect(() => {
    if (name.length >= FULL_NAME.length) return;
    const t = setTimeout(() => setName(FULL_NAME.slice(0, name.length + 1)), 90);
    return () => clearTimeout(t);
  }, [name]);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="hero-grid">
          {/* Text column */}
          <div>
            {/* role typing - eyebrow */}
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#a1a1aa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {text}<span className="typing-cursor"></span>
              </span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#404044' }}></span>
              <span style={{ fontSize: '11px', fontWeight: 500, color: '#8a8a90', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                IEEE Published Author
              </span>
            </div>

            {/* monument-scale name with type-in on mount */}
            <h1 className="hero-name">
              {name}<span className="typing-cursor"></span>
            </h1>

            {/* tagline — mirrors the resume header so the framing is consistent across surfaces */}
            <p style={{ color: '#f3ecdb', fontSize: '15px', fontWeight: 600, letterSpacing: '0.01em', marginTop: '18px', marginBottom: 0 }}>
              AI/ML Engineer <span style={{ color: '#52525b', margin: '0 8px' }}>·</span> Full-Stack MERN Developer
            </p>

            {/* bio — tagline above already covers the role, so this is for context */}
            <p style={{ color: '#c4c4c8', fontSize: '17px', maxWidth: '560px', marginTop: '20px', marginBottom: '14px', lineHeight: 1.65 }}>
              Specialized in deep learning, retrieval-augmented generation, and computer vision, engineered alongside full-stack MERN applications. IEEE-published on multimodal depression prediction. Internships at Adanas Technology and Infosys Springboard.
            </p>

            {/* availability */}
            <p style={{ color: '#8a8a90', fontSize: '14px', marginBottom: '36px' }}>
              Open to SDE / AI-ML / Full-Stack internships and entry-level roles.
            </p>

            {/* Primary CTAs */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '24px' }}>
              <Link to="/projects" className="btn-primary">View Projects</Link>
              <a href="/api/resume" className="btn-secondary">
                <i className="fas fa-download" style={{ fontSize: '11px' }}></i> Download Resume
              </a>
            </div>

            {/* Quick channels */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://github.com/AradhyaStuti" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: '#71717a', fontSize: '18px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#f3ecdb'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#71717a'}
              ><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/aradhya-stuti" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#71717a', fontSize: '18px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#f3ecdb'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#71717a'}
              ><i className="fab fa-linkedin"></i></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aradhya.mutants@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" style={{ color: '#71717a', fontSize: '18px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#f3ecdb'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#71717a'}
              ><i className="fas fa-envelope"></i></a>
              <span style={{ color: '#404044', fontSize: '14px' }}>·</span>
              <Link to="/contact" style={{ color: '#8a8a90', fontSize: '13px', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#f3ecdb'; e.currentTarget.style.borderColor = '#f3ecdb'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8a8a90'; e.currentTarget.style.borderColor = 'transparent'; }}
              >
                or contact me directly →
              </Link>
            </div>
          </div>

          {/* Photo column */}
          <div className="hero-photo">
            <img src="/me.png" alt="Portrait of Aradhya Stuti" decoding="async" fetchPriority="high" width="280" height="350" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
