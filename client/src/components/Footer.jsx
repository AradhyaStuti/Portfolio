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
              <Link key={l.to} to={l.to} style={{ color: '#3f3f46', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
                onMouseLeave={(e) => e.target.style.color = '#3f3f46'}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <a href="https://github.com/AradhyaStuti" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/aradhya-stuti" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:aradhya.mutants@gmail.com" className="social-icon"><i className="fas fa-envelope"></i></a>
          </div>

          <p style={{ color: '#1c1c1e', fontSize: '12px' }}>&copy; 2026 Aradhya Stuti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
