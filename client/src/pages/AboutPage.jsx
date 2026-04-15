const skills = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'SQL'], icon: 'fa-code' },
  { title: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'], icon: 'fa-palette' },
  { title: 'Backend', items: ['Node.js', 'Express', 'Django', 'Flask', 'REST APIs'], icon: 'fa-server' },
  { title: 'Databases & Infra', items: ['MongoDB', 'Redis', 'AWS EC2', 'Linux'], icon: 'fa-database' },
  { title: 'AI / ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'Ollama', 'NLP', 'Computer Vision', 'RAG', 'Generative AI', 'Prompt Engineering'], icon: 'fa-brain' },
  { title: 'Data & Tools', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit', 'Git', 'Docker', 'CI/CD', 'Postman', 'Jupyter Notebook'], icon: 'fa-terminal' },
];

const expertise = [
  { icon: 'fa-layer-group', title: 'Full Stack Development', desc: 'Building end-to-end web applications with React, Node.js, Express, and MongoDB. REST APIs handling daily user traffic with optimized caching and query performance.' },
  { icon: 'fa-brain', title: 'Machine Learning & Deep Learning', desc: 'Designing ML pipelines with TensorFlow, PyTorch, and Scikit-learn — achieving 92.2% AUC-ROC on classification systems with SHAP interpretability.' },
  { icon: 'fa-eye', title: 'Computer Vision', desc: 'Image classification and defect detection systems using deep learning architectures with template matching and perceptual hashing.' },
  { icon: 'fa-robot', title: 'Generative AI & RAG Systems', desc: 'Building intelligent systems with LangChain, LangGraph, and vector databases. Prompt engineering and LLM-powered applications.' },
  { icon: 'fa-chart-line', title: 'Data Analysis & NLP', desc: 'Classification systems on 28,000+ records, monitoring dashboards, and natural language processing pipelines.' },
  { icon: 'fa-rocket', title: 'Deployment & DevOps', desc: 'Containerization with Docker, CI/CD pipelines, server query optimization, and caching strategies that reduce page load latency by 15%.' },
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
          AI/ML Engineer and Full-Stack Developer with production experience in deep learning, computer vision, and distributed web systems. Delivered machine learning models with 92.2 percent classification accuracy, scalable REST APIs serving 100+ daily requests, and deployment workflows with 89.6 percent test coverage. Published IEEE research on multimodal depression prediction.
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
              { period: 'Mar 2026 – Present', title: 'Software Developer Intern — Adanas Technology', desc: 'Developed full-stack web applications using Django and React, delivering 10+ API routes serving daily user traffic in production. Optimized server-side queries and integrated Redis caching to reduce average page load latency by 15 percent.' },
              { period: 'Nov 2025 – Jan 2026', title: 'Generative AI Intern — Infosys Springboard', desc: 'Researched and evaluated deep learning approaches for industrial defect detection, selecting ResNet-50 transfer learning and SSIM-based anomaly detection as the core pipeline. Spearheaded a PCB defect classifier for six defect types with a Streamlit UI, FastAPI endpoint, Docker deployment, 24 unit tests, and a four-job GitHub Actions CI pipeline.' },
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
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>Raj Kumar Goel Institute of Technology, Abdul Kalam Technical University — CGPA: 8.32 / 10.0</p>
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
              'Internet of Things and Cloud Computing — NPTEL',
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
