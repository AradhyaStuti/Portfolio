import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const fallback = [
  { _id: '1', title: 'Depression Risk Predictor', category: 'ml', description: 'PyTorch model for student mental health prediction. F1: 87.15%, AUC: 92.2%.', techStack: ['PyTorch', 'SHAP', 'FastAPI'] },
  { _id: '2', title: 'InferaMind AI', category: 'ai', description: 'ML tutoring system with RAG pipelines, FAISS search, and real-time streaming.', techStack: ['LangChain', 'LangGraph', 'FAISS', 'Ollama'] },
  { _id: '3', title: 'MeetSync', category: 'web', description: 'Video conferencing with P2P/SFU architecture, encrypted chat, and waiting rooms.', techStack: ['React', 'Node.js', 'WebRTC', 'Redis'] },
];

const badgeClass = { ai: 'badge badge-ai', ml: 'badge badge-ml', web: 'badge badge-web' };

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((d) => setProjects(d.slice(0, 3)))
      .catch(() => setProjects(fallback));
  }, []);

  return (
    <div className="section section-bordered">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px' }}>
          <div>
            <span className="section-label">Work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <Link to="/projects" style={{ color: '#14b8a6', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}>
            View All <i className="fas fa-arrow-right" style={{ marginLeft: '6px' }}></i>
          </Link>
        </div>

        <div className="featured-grid">
          {projects.map((p) => (
            <Link to={`/projects/${p._id}`} key={p._id} className="card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
              <span className={badgeClass[p.category] || 'badge'} style={{ width: 'fit-content', marginBottom: '20px' }}>{p.category}</span>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>{p.title}</h3>
              <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>{p.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {p.techStack?.slice(0, 4).map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <span style={{ color: '#14b8a6', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                View Details <i className="fas fa-arrow-right" style={{ marginLeft: '6px' }}></i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
