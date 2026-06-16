import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import useReveal from '../hooks/useReveal';
import usePageTitle from '../hooks/usePageTitle';

// core stack visible above the fold - recruiter scan-bait
const coreStack = ['Python', 'PyTorch', 'TensorFlow', 'LangGraph', 'FastAPI', 'React', 'Node.js', 'MongoDB', 'Docker'];

const Home = () => {
  useReveal();
  usePageTitle('AI/ML Engineer · Full-Stack MERN Developer');

  return (
    <>
      <Hero />

      {/* core stack — scrolling marquee */}
      <div className="stack-marquee">
        <span className="stack-label">Core Stack</span>
        <div className="marquee-container" style={{ flex: 1 }}>
          <div className="marquee-track stack-track">
            {[...coreStack, ...coreStack, ...coreStack].map((s, i) => (
              <span key={i} className="stack-chip">
                {s}<span className="stack-sep">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* about card */}
      <div className="section">
        <div className="container">
          <span className="section-label">Profile</span>
          <div className="card-glow reveal" style={{ padding: '56px', marginTop: '8px' }}>
            <p style={{ color: '#f3ecdb', fontSize: '15px', fontWeight: 600, letterSpacing: '0.01em', marginBottom: '20px' }}>
              AI/ML Engineer <span style={{ color: '#52525b', margin: '0 8px' }}>·</span> Full-Stack MERN Developer
            </p>
            <p style={{ fontSize: '21px', lineHeight: 1.7, color: '#c4c4c8', fontWeight: 400, maxWidth: '760px' }}>
              I build <span style={{ color: '#f3ecdb', fontWeight: 600 }}>production-grade AI/ML systems</span> —{' '}
              <span style={{ color: '#f3ecdb', fontWeight: 600 }}>deep learning, RAG pipelines, and computer vision</span> in PyTorch and FastAPI,
              with a <span style={{ color: '#f3ecdb', fontWeight: 600 }}>MongoDB · Express · React · Node</span> application layer around them.
              Docker and GitHub Actions for shipping.
            </p>
            <div style={{ marginTop: '36px' }}>
              <Link to="/about" className="btn-primary">More About Me</Link>
            </div>
          </div>
        </div>
      </div>

      {/* featured projects */}
      <FeaturedProjects />

      {/* contact CTA */}
      <div className="section section-bordered" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '520px', margin: '0 auto' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Get in touch</span>
            <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '16px' }}>Let's work together</h2>
            <p style={{ color: '#71717a', marginBottom: '36px', fontSize: '15px', lineHeight: 1.7 }}>
              Open to internships, freelance, and full-time roles. Always happy to chat about an interesting problem.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <Link to="/projects" className="btn-secondary">View Projects</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
