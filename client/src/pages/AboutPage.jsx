const skills = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'SQL'], icon: 'fa-code' },
  { title: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'], icon: 'fa-palette' },
  { title: 'Backend', items: ['Node.js', 'Express', 'Django', 'Flask', 'REST APIs'], icon: 'fa-server' },
  { title: 'Databases & Infra', items: ['MongoDB', 'Redis', 'WebRTC', 'Socket.IO'], icon: 'fa-database' },
  { title: 'AI / ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'LangGraph', 'NLP', 'CNNs', 'RAG', 'Generative AI', 'LLMs'], icon: 'fa-brain' },
  { title: 'Data & Tools', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit', 'Git', 'Docker', 'CI/CD', 'Postman', 'Jupyter Notebook'], icon: 'fa-terminal' },
];

const expertise = [
  { icon: 'fa-layer-group', title: 'Full Stack Development', desc: 'Building end-to-end web applications with React, Node.js, Express, and MongoDB. REST APIs serving 500+ daily requests with optimized performance.' },
  { icon: 'fa-brain', title: 'Machine Learning & Deep Learning', desc: 'Designing ML pipelines with TensorFlow, PyTorch, and Scikit-learn — achieving 98.7% accuracy on production defect detection systems.' },
  { icon: 'fa-eye', title: 'Computer Vision', desc: 'Image classification and visual inspection systems using CNNs, with image augmentation techniques that lift recall by 15%.' },
  { icon: 'fa-robot', title: 'Generative AI & RAG Systems', desc: 'Building intelligent systems with LangChain, LangGraph, and vector databases. Prompt engineering and LLM-powered applications.' },
  { icon: 'fa-chart-line', title: 'Data Analysis & NLP', desc: 'Classification systems on 10,000+ records, visualization dashboards, and natural language processing pipelines.' },
  { icon: 'fa-rocket', title: 'Deployment & DevOps', desc: 'Containerization with Docker, CI/CD pipelines, server query optimization, and caching strategies that reduce load times by 40%.' },
];

import useReveal from '../hooks/useReveal';

const AboutPage = () => {
  useReveal();
  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <span className="section-label">About</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px', color: '#fff' }}>
          Aradhya Stuti
        </h1>
        <p style={{ color: '#71717a', fontSize: '18px', maxWidth: '640px', lineHeight: 1.7, marginBottom: '80px' }}>
          Data Scientist and Full Stack Developer who built deep learning pipelines that raised
          defect detection to 98.7% accuracy and cut manual inspection by 25%. Shipped production
          web applications with REST APIs serving 500 daily requests while reducing page load time by 40%.
        </p>

        {/* Skills */}
        <div style={{ marginBottom: '100px' }}>
          <h2 className="section-title reveal" style={{ marginBottom: '40px' }}>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.title} className="card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(20,184,166,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fas ${s.icon}`} style={{ color: '#14b8a6', fontSize: '14px' }}></i>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '15px', color: '#fff' }}>{s.title}</h3>
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
          <h2 className="section-title reveal" style={{ marginBottom: '40px' }}>What I specialize in</h2>
          <div className="expertise-grid">
            {expertise.map((e) => (
              <div key={e.title} className="card" style={{ padding: '36px', display: 'flex', gap: '20px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(20,184,166,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`fas ${e.icon}`} style={{ color: '#14b8a6', fontSize: '18px' }}></i>
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: '#fff' }}>{e.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '100px' }}>
          <h2 className="section-title reveal" style={{ marginBottom: '40px' }}>Experience</h2>
          <div style={{ maxWidth: '600px' }}>
            {[
              { period: 'Mar 2026 – Present', title: 'Software Developer Intern — Adanas Technology', desc: 'Restructured server queries and integrated caching, reducing average page load time by 40%. Shipped 10 REST API endpoints serving 500 requests/day with CI/CD pipelines.' },
              { period: 'Nov 2025 – Jan 2026', title: 'Generative AI Intern — Infosys Springboard', desc: 'Engineered a deep learning pipeline on 5,000 labeled circuit board images, reaching 98.7% validation accuracy. Implemented image augmentation techniques that lifted recall by 15%.' },
            ].map((item) => (
              <div key={item.period} className="timeline-item reveal">
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#14b8a6', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{item.period}</span>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', margin: '8px 0 6px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '100px' }}>
          <h2 className="section-title reveal" style={{ marginBottom: '40px' }}>Education</h2>
          <div className="card reveal" style={{ padding: '36px', maxWidth: '600px' }}>
            <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>Bachelor of Technology in Information Technology</h4>
            <p style={{ fontSize: '14px', color: '#14b8a6', fontWeight: 600, marginBottom: '4px' }}>Aug 2023 – Apr 2027</p>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>Raj Kumar Goel Institute of Technology, Abdul Kalam Technical University</p>
          </div>
        </div>

        {/* Research */}
        <div style={{ marginBottom: '100px' }}>
          <h2 className="section-title reveal" style={{ marginBottom: '40px' }}>Research</h2>
          <div className="card reveal" style={{ padding: '36px', maxWidth: '600px' }}>
            <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>Multimodal Approach for Depression Prediction</h4>
            <p style={{ fontSize: '14px', color: '#14b8a6', fontWeight: 600, marginBottom: '4px' }}>IEEE Published Paper</p>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>DOI: 10.1109/AECE67531.2025.11386544</p>
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: '100px' }}>
          <h2 className="section-title reveal" style={{ marginBottom: '40px' }}>Certifications</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', maxWidth: '600px' }}>
            {[
              'Deep Learning for Developers — Infosys Springboard',
              'Artificial Intelligence Primer — Infosys Springboard',
              'Prompt Engineering — Infosys Springboard',
              'Data Analyst — One Roadmap',
              'Full Stack Certification — One Roadmap',
              'Internet of Things, Cloud Computing — NPTEL',
            ].map((cert) => (
              <div key={cert} className="card reveal" style={{ padding: '16px 24px', width: '100%' }}>
                <p style={{ fontWeight: 600, fontSize: '14px', color: '#94a3b8' }}>{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h2 className="section-title reveal" style={{ marginBottom: '40px' }}>Languages Spoken</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['English', 'Hindi', 'German'].map((lang) => (
              <div key={lang} className="card" style={{ padding: '24px 44px', textAlign: 'center' }}>
                <p style={{ fontWeight: 700, fontSize: '16px', color: '#fff' }}>{lang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
