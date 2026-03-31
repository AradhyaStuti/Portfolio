import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

const projectIcons = { 'Depression Risk Predictor': 'fa-brain', 'InferaMind AI': 'fa-robot', 'MeetSync': 'fa-video', 'GitlessForge': 'fa-code-branch', 'PCB Defect Detection': 'fa-microchip' };
const visualClass = { ai: 'project-visual-ai', ml: 'project-visual-ml', web: 'project-visual-web' };

const fallbackProjects = [
  { _id: '1', title: 'Depression Risk Predictor', category: 'ml', description: 'PyTorch neural network for student mental health prediction. F1: 87.15%, AUC: 92.2%.', techStack: ['PyTorch', 'XGBoost', 'SHAP', 'FastAPI', 'Scikit-learn'] },
  { _id: '2', title: 'InferaMind AI', category: 'ai', description: 'ML tutoring system with RAG pipelines, FAISS search, and real-time streaming via Ollama.', techStack: ['LangChain', 'LangGraph', 'FAISS', 'React', 'Ollama', 'Docker'] },
  { _id: '3', title: 'MeetSync', category: 'web', description: 'Video conferencing with P2P/SFU architecture, encrypted chat, and waiting rooms. 247 tests.', techStack: ['React', 'Node.js', 'WebRTC', 'mediasoup', 'Socket.IO', 'Redis'] },
  { _id: '4', title: 'GitlessForge', category: 'web', description: 'Distributed version control and DevOps platform with custom VCS, CI/CD pipelines, and a 24-command CLI.', techStack: ['Node.js', 'JavaScript', 'JSON', 'Myers Diff', 'Shell', 'CI/CD'] },
  { _id: '5', title: 'PCB Defect Detection', category: 'ai', description: 'Computer vision system using ResNet-50 for automated PCB defect classification.', techStack: ['PyTorch', 'ResNet-50', 'FastAPI', 'Streamlit', 'Docker', 'OpenCV'] },
];

const badgeClass = { ai: 'badge badge-ai', ml: 'badge badge-ml', web: 'badge badge-web' };
const filters = ['all', 'web', 'ai', 'ml'];

const ProjectsPage = () => {
  useReveal();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch(`/api/projects?category=${filter}`)
      .then((r) => r.json())
      .then(setProjects)
      .catch(() => {
        setProjects(filter === 'all' ? fallbackProjects : fallbackProjects.filter((p) => p.category === filter));
      });
  }, [filter]);

  return (
    <div className="page">
      <div className="container">
        <span className="section-label">Portfolio</span>
        <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '16px' }}>Projects</h1>
        <p style={{ color: '#52525b', marginBottom: '40px', maxWidth: '520px', fontSize: '15px', lineHeight: 1.6 }}>
          AI/ML systems and full-stack applications — each built with production-grade architecture, testing, and CI/CD.
        </p>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '8px 18px', borderRadius: '999px', fontSize: '11px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer',
                transition: 'all 0.2s', border: filter === f ? 'none' : '1px solid #1c2030',
                background: filter === f ? '#14b8a6' : '#111318',
                color: filter === f ? '#000' : '#52525b',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <Link to={`/projects/${p._id}`} key={p._id} className="card" style={{ padding: '0', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', overflow: 'hidden' }}>
              <div className={`project-visual ${visualClass[p.category] || ''}`}>
                <i className={`fas ${projectIcons[p.title] || 'fa-code'}`} style={{ color: 'rgba(20,184,166,0.2)', position: 'relative', zIndex: 1 }}></i>
              </div>
              <div style={{ padding: '20px 24px 28px' }}>
                <span className={badgeClass[p.category] || 'badge'} style={{ width: 'fit-content', marginBottom: '12px' }}>{p.category}</span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>{p.title}</h3>
                <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.7, marginBottom: '16px' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                  {p.techStack?.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <span style={{ color: '#14b8a6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  View Details <i className="fas fa-arrow-right" style={{ marginLeft: '4px' }}></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
