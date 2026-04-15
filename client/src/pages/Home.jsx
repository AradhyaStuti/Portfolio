import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import useReveal from '../hooks/useReveal';

const expertise = [
  { icon: 'fa-layer-group', title: 'Full Stack Dev' },
  { icon: 'fa-brain', title: 'Deep Learning' },
  { icon: 'fa-eye', title: 'Computer Vision' },
  { icon: 'fa-robot', title: 'Generative AI & RAG' },
  { icon: 'fa-chart-line', title: 'Data Science' },
  { icon: 'fa-rocket', title: 'DevOps' },
];

const allSkills = ['Python', 'JavaScript', 'SQL', 'React', 'Node.js', 'TensorFlow', 'PyTorch', 'LangChain', 'Ollama', 'MongoDB', 'Docker', 'Django', 'Flask', 'Redis', 'Tailwind CSS', 'Express', 'Git', 'Scikit-learn', 'Pandas', 'Streamlit'];

function SpotlightCard({ children, style }) {
  const ref = useRef(null);
  const spotRef = useRef(null);

  const handleMouse = (e) => {
    if (!ref.current || !spotRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    spotRef.current.style.left = `${e.clientX - rect.left}px`;
    spotRef.current.style.top = `${e.clientY - rect.top}px`;
  };

  return (
    <div ref={ref} className="card card-spotlight" style={style} onMouseMove={handleMouse}>
      <div ref={spotRef} className="spotlight" />
      {children}
    </div>
  );
}

const Home = () => {
  useReveal();

  return (
    <>
      <Hero />

      {/* ─── Skills Marquee ─── */}
      <div style={{ padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span key={i} style={{ padding: '8px 20px', borderRadius: '999px', border: '1px solid #1c2030', fontSize: '13px', fontWeight: 600, color: '#52525b', whiteSpace: 'nowrap', background: '#111318' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── About ─── */}
      <div className="section">
        <div className="container">
          <div className="card-glow reveal" style={{ padding: '56px', position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '24px', lineHeight: 1.7, color: '#94a3b8', fontWeight: 400 }}>
              I build <span style={{ color: '#fff', fontWeight: 700 }}>deep learning pipelines</span> that achieve
              92.2% classification accuracy using TensorFlow, PyTorch, and LangChain, and ship{' '}
              <span style={{ color: '#fff', fontWeight: 700 }}>production web applications</span> with
              REST APIs serving 100+ daily requests and deployment workflows with 89.6% test coverage.
            </p>
            <div style={{ marginTop: '36px' }}>
              <Link to="/about" className="btn-primary">
                More About Me <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Expertise with spotlight ─── */}
      <div className="section section-bordered">
        <div className="container">
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px' }}>
            <h2 className="section-title">What I do</h2>
            <Link to="/about" style={{ color: '#14b8a6', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}>
              See All <i className="fas fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </Link>
          </div>
          <div className="expertise-mini-grid">
            {expertise.map((item, i) => (
              <Link to="/about" key={item.title} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <SpotlightCard style={{ padding: '32px 20px', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(20,184,166,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', position: 'relative', zIndex: 1 }}>
                    <i className={`fas ${item.icon}`} style={{ color: '#14b8a6', fontSize: '20px' }}></i>
                  </div>
                  <p style={{ fontWeight: 700, fontSize: '13px', color: '#94a3b8', position: 'relative', zIndex: 1 }}>{item.title}</p>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Projects ─── */}
      <FeaturedProjects />

      {/* ─── CTA ─── */}
      <div className="section section-bordered" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="reveal">
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Let's work together</h2>
            <p style={{ color: '#52525b', marginBottom: '40px', maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto', fontSize: '16px', lineHeight: 1.6 }}>
              Looking for an AI/ML engineer or full-stack developer? Let's build something impactful together.
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
