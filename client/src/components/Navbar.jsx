import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const linkStyle = (active) => ({
    fontSize: '10px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: active ? '#14b8a6' : '#52525b',
    textDecoration: 'none',
    transition: 'color 0.2s ease, transform 0.2s ease',
    display: 'inline-block',
    padding: '4px 0',
    borderBottom: active ? '2px solid #14b8a6' : '2px solid transparent',
  });

  const handleResume = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/resume');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Aradhya_Stuti_Resume.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      window.open('/api/resume', '_blank');
    }
  };

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: scrolled ? '8px 0' : '16px 0', transition: 'padding 0.3s ease' }}>
      <div className="container">
        <div className="nav-bar" style={{ borderRadius: '999px', padding: '8px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '480px', margin: '0 auto' }}>

          {/* All links visible on desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="hidden md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={linkStyle(location.pathname === l.to)}
                onMouseEnter={(e) => { e.target.style.color = '#14b8a6'; e.target.style.borderBottomColor = '#14b8a6'; }}
                onMouseLeave={(e) => {
                  const active = location.pathname === l.to;
                  e.target.style.color = active ? '#14b8a6' : '#52525b';
                  e.target.style.borderBottomColor = active ? '#14b8a6' : 'transparent';
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/api/resume"
              onClick={handleResume}
              style={{ ...linkStyle(false), cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#14b8a6'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#52525b'; }}
            >
              Resume <i className="fas fa-download" style={{ fontSize: '8px', marginLeft: '4px' }}></i>
            </a>
          </div>

          {/* Hamburger - always visible on right */}
          <button
            style={{ background: 'none', border: 'none', color: '#71717a', fontSize: '20px', cursor: 'pointer', padding: '4px', transition: 'color 0.2s, transform 0.2s' }}
            onClick={() => setOpen(!open)}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#14b8a6'; e.currentTarget.style.transform = 'scale(1.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#71717a'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="nav-bar" style={{ borderRadius: '20px', padding: '28px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} style={{ fontSize: '15px', fontWeight: 600, color: location.pathname === l.to ? '#14b8a6' : '#71717a', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
            <a
              href="/api/resume"
              onClick={handleResume}
              style={{ fontSize: '15px', fontWeight: 600, color: '#71717a', textDecoration: 'none', cursor: 'pointer' }}
            >
              Resume <i className="fas fa-download" style={{ fontSize: '10px', marginLeft: '6px' }}></i>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
