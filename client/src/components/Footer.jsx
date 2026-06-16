import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '80px 0 60px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', textAlign: 'center' }}>

          {/* Nav links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} style={{ color: '#525258', fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.14em', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = '#f3ecdb'}
                onMouseLeave={(e) => e.target.style.color = '#525258'}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <a href="https://github.com/AradhyaStuti" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/aradhya-stuti" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aradhya.mutants@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="social-icon"><i className="fas fa-envelope"></i></a>
          </div>

          <p style={{ color: '#525258', fontSize: '12px', letterSpacing: '0.04em' }}>&copy; 2026 Aradhya Stuti — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
