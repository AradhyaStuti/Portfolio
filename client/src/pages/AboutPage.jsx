const skills = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'SQL'], icon: 'fa-code' },
  { title: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'], icon: 'fa-palette' },
  { title: 'Backend', items: ['Node.js', 'Express', 'Django', 'Flask', 'REST APIs'], icon: 'fa-server' },
  { title: 'Databases & Infra', items: ['MongoDB', 'Redis', 'AWS EC2', 'Linux'], icon: 'fa-database' },
  { title: 'AI / ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'Ollama', 'NLP', 'Computer Vision', 'RAG', 'Generative AI', 'Prompt Engineering'], icon: 'fa-brain' },
  { title: 'Data & Tools', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit', 'Git', 'Docker', 'CI/CD', 'Postman', 'Jupyter Notebook'], icon: 'fa-terminal' },
];

const expertise = [
  { icon: 'fa-brain', title: 'Machine Learning & Deep Learning', desc: 'PyTorch, TensorFlow, and scikit-learn. 92.2% AUC-ROC on the IEEE-published multimodal depression prediction work, with SHAP for interpretability.' },
  { icon: 'fa-eye', title: 'Computer Vision', desc: 'Image classification and industrial defect detection — ResNet-50 transfer learning, SSIM anomaly detection, perceptual hashing. Core of the PCB defect project at Infosys.' },
  { icon: 'fa-robot', title: 'Generative AI & RAG', desc: 'LangChain and LangGraph pipelines over vector stores. Built RouteLM (an ML-tutor RAG system) and LangChain-powered chatbots — including a WhatsApp chatbot — for Adanas.' },
  { icon: 'fa-chart-line', title: 'Data Analysis & NLP', desc: 'Classification on 28K-record datasets, real-time monitoring dashboards, and NLP pipelines with pandas, NumPy, and Streamlit.' },
  { icon: 'fa-layer-group', title: 'Full Stack (MERN)', desc: 'End-to-end web apps with React, Node, Express, and MongoDB — plus Django/DRF on the Python side. JWT auth, REST APIs, Redis caching. Shipped 10+ routes serving daily traffic at Adanas.' },
  { icon: 'fa-rocket', title: 'Deployment & DevOps', desc: 'Docker, GitHub Actions CI, Redis caching, query optimization. Every project here ships with at least the first two.' },
];

import useReveal from '../hooks/useReveal';
import usePageTitle from '../hooks/usePageTitle';
import { useState, useEffect } from 'react';

const NAME = 'Aradhya Stuti';

const AboutPage = () => {
  useReveal();
  usePageTitle('About');
  const [name, setName] = useState('');

  useEffect(() => {
    if (name.length >= NAME.length) return;
    const t = setTimeout(() => setName(NAME.slice(0, name.length + 1)), 95);
    return () => clearTimeout(t);
  }, [name]);

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <span className="section-label">About</span>
        <div className="about-header">
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.6rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '20px', color: '#f3ecdb', marginTop: '10px', lineHeight: 1.05, whiteSpace: 'nowrap', minHeight: '1.05em' }}>
              {name}<span className="typing-cursor"></span>
            </h1>
            <p style={{ color: '#c4c4c8', fontSize: '17px', lineHeight: 1.75, marginBottom: '28px' }}>
              AI/ML engineer with full-stack MERN expertise. My work splits between deep learning and production web shipping — shipped Django + React applications at Adanas Technology, and a ResNet-50 PCB defect detection system at Infosys Springboard. IEEE-published on multimodal depression prediction. Comfortable across the modern Python AI/ML toolchain and the full MERN stack — I prefer projects where I get to do both.
            </p>
            {/* Recruiter quick-actions */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="/api/resume" className="btn-primary" style={{ fontSize: '12px', padding: '10px 20px' }}>
                <i className="fas fa-download" style={{ fontSize: '10px' }}></i> Resume
              </a>
              <a href="https://github.com/AradhyaStuti" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-secondary" style={{ fontSize: '12px', padding: '10px 20px' }}>
                <i className="fab fa-github" style={{ fontSize: '13px' }}></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/aradhya-stuti" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-secondary" style={{ fontSize: '12px', padding: '10px 20px' }}>
                <i className="fab fa-linkedin" style={{ fontSize: '13px' }}></i> LinkedIn
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aradhya.mutants@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="btn-secondary" style={{ fontSize: '12px', padding: '10px 20px' }}>
                <i className="fas fa-envelope" style={{ fontSize: '13px' }}></i> Email
              </a>
            </div>
          </div>
          <figure className="about-circle">
            <img src="/me1.png" alt="Aradhya Stuti" loading="lazy" decoding="async" />
          </figure>
        </div>

        {/* Experience — surfaced first for recruiter scan */}
        <div style={{ marginBottom: '100px' }}>
          <span className="section-label">Experience</span>
          <h2 className="section-title reveal" style={{ marginTop: '8px', marginBottom: '40px' }}>Internships</h2>
          <div style={{ maxWidth: '680px' }}>
            {[
              { period: 'Mar 2026 – May 2026', title: 'Software Developer Intern — Adanas Technology', desc: 'Built full-stack web applications with Django and React. Developed a LangChain-powered chatbot and a WhatsApp chatbot for automated user support. Shipped 10+ API routes serving daily user traffic, with Redis caching to cut average page-load latency by 15 percent.' },
              { period: 'Nov 2025 – Jan 2026', title: 'Generative AI Intern — Infosys Springboard', desc: 'Built a PCB defect classifier covering six defect types — ResNet-50 transfer learning paired with SSIM-based anomaly detection. Shipped behind a Streamlit UI and FastAPI endpoint, with Docker, 24 unit tests, and a four-job GitHub Actions CI pipeline.' },
            ].map((item) => (
              <div key={item.period} className="timeline-item reveal">
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#f3ecdb', textTransform: 'uppercase', letterSpacing: '0.14em' }}>{item.period}</span>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#f3ecdb', margin: '8px 0 6px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research — surfaced second, IEEE credibility */}
        <div style={{ marginBottom: '100px' }}>
          <span className="section-label">Research</span>
          <h2 className="section-title reveal" style={{ marginTop: '8px', marginBottom: '40px' }}>Published work</h2>
          <div className="card reveal" style={{ padding: '36px', maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#f3ecdb', textTransform: 'uppercase', letterSpacing: '0.16em', border: '1px solid rgba(243,236,219,0.25)', padding: '4px 10px', borderRadius: '2px' }}>IEEE</span>
              <span style={{ fontSize: '11px', color: '#71717a', letterSpacing: '0.05em' }}>Published Paper</span>
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#f3ecdb', marginBottom: '14px', lineHeight: 1.3 }}>Multimodal Approach for Depression Prediction</h4>
            <p style={{ fontSize: '14px', color: '#c4c4c8', lineHeight: 1.7, marginBottom: '18px' }}>
              A study on combining multiple data modalities to improve depression risk prediction over single-modality baselines. Foundational work that later evolved into the Student Depression Risk Predictor project.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://ieeexplore.ieee.org/document/11386544"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#f3ecdb', fontSize: '13px', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid rgba(243,236,219,0.3)', paddingBottom: '1px', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#f3ecdb'}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'rgba(243,236,219,0.3)'}
              >
                Read on IEEE Xplore <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '10px', marginLeft: '4px' }}></i>
              </a>
              <a
                href="https://scholar.google.com/citations?user=KmBeZvIAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#f3ecdb', fontSize: '13px', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid rgba(243,236,219,0.3)', paddingBottom: '1px', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#f3ecdb'}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'rgba(243,236,219,0.3)'}
              >
                Google Scholar <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '10px', marginLeft: '4px' }}></i>
              </a>
              <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '11px', color: '#71717a', letterSpacing: '0.02em' }}>DOI: 10.1109/AECE67531.2025.11386544</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '100px' }}>
          <span className="section-label">Education</span>
          <h2 className="section-title reveal" style={{ marginTop: '8px', marginBottom: '40px' }}>Academic background</h2>
          <div className="card reveal" style={{ padding: '36px', maxWidth: '680px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#f3ecdb' }}>Bachelor of Technology in Information Technology</h4>
              <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '12px', color: '#f3ecdb', fontWeight: 600 }}>CGPA 8.32 / 10</span>
            </div>
            <p style={{ fontSize: '12px', color: '#f3ecdb', fontWeight: 500, marginBottom: '6px', letterSpacing: '0.05em' }}>Aug 2023 – Apr 2027</p>
            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '24px' }}>Raj Kumar Goel Institute of Technology, Abdul Kalam Technical University</p>

            {/* Core coursework */}
            <p style={{ fontSize: '11px', fontWeight: 500, color: '#71717a', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '12px' }}>Core coursework</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                'Data Structures & Algorithms',
                'Operating Systems',
                'Database Management Systems',
                'Computer Networks',
                'Object-Oriented Programming',
                'Software Engineering',
                'Machine Learning',
                'Web Technologies',
                'Theory of Computation',
                'Computer Organization & Architecture',
                'Discrete Mathematics',
                'Artificial Intelligence',
              ].map((c) => <span key={c} className="pill">{c}</span>)}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '100px' }}>
          <span className="section-label">Skills</span>
          <h2 className="section-title reveal" style={{ marginTop: '8px', marginBottom: '40px' }}>Tools & technologies</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.title} className="card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '4px', background: 'rgba(243,236,219,0.06)', border: '1px solid rgba(243,236,219,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fas ${s.icon}`} style={{ color: '#f3ecdb', fontSize: '15px' }}></i>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '15px', color: '#f3ecdb', letterSpacing: '-0.005em' }}>{s.title}</h3>
                    <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '10px', color: '#71717a', letterSpacing: '0.06em' }}>
                      {String(s.items.length).padStart(2, '0')} {s.items.length === 1 ? 'tool' : 'tools'}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {s.items.map((item) => <span key={item} className="pill">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div style={{ marginBottom: '100px' }}>
          <span className="section-label">Specialization</span>
          <h2 className="section-title reveal" style={{ marginTop: '8px', marginBottom: '40px' }}>What I specialize in</h2>
          <div className="expertise-grid">
            {expertise.map((e) => (
              <div key={e.title} className="card" style={{ padding: '36px', display: 'flex', gap: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '4px', background: 'rgba(243,236,219,0.06)', border: '1px solid rgba(243,236,219,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`fas ${e.icon}`} style={{ color: '#f3ecdb', fontSize: '18px' }}></i>
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '17px', marginBottom: '8px', color: '#f3ecdb', letterSpacing: '-0.01em' }}>{e.title}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: '100px' }}>
          <span className="section-label">Certifications</span>
          <h2 className="section-title reveal" style={{ marginTop: '8px', marginBottom: '40px' }}>Verified credentials</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', maxWidth: '680px' }}>
            {[
              'Deep Learning for Developers — Infosys Springboard',
              'Artificial Intelligence Primer — Infosys Springboard',
              'Prompt Engineering — Infosys Springboard',
              'Internet of Things and Cloud Computing — NPTEL',
            ].map((cert) => (
              <div key={cert} className="card reveal" style={{ padding: '16px 24px', width: '100%' }}>
                <p style={{ fontWeight: 500, fontSize: '14px', color: '#c4c4c8' }}>{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <span className="section-label">Languages</span>
          <h2 className="section-title reveal" style={{ marginTop: '8px', marginBottom: '40px' }}>Languages spoken</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['English', 'Hindi', 'German'].map((lang) => (
              <div key={lang} className="card" style={{ padding: '24px 44px', textAlign: 'center' }}>
                <p style={{ fontWeight: 600, fontSize: '15px', color: '#f3ecdb' }}>{lang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
