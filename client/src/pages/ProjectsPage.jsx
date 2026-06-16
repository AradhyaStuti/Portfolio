import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import usePageTitle from '../hooks/usePageTitle';
import { SkeletonProjectCard } from '../components/Skeleton';

const projectIcons = {
  'Seelenruh': 'fa-comments',
  'AI PCB Defect Detection': 'fa-microchip',
  'Student Depression Risk Predictor': 'fa-brain',
  'RouteLM': 'fa-robot',
  'NexusMeet': 'fa-video',
  'GitlessForge': 'fa-code-branch',
};
const visualClass = { ai: 'project-visual-ai', ml: 'project-visual-ml', web: 'project-visual-web' };

const fallbackProjects = [
  { _id: 'e5f60718293a4b5c6d7e8f90', title: 'Seelenruh', category: 'ai', description: 'Multi-persona Generative AI assistant routing across 4 life-aid domains — mental health, legal rights, government schemes, personal safety — on Groq LLaMA-3 with FAISS RAG and EN/HI/DE multilingual answers.', techStack: ['LangGraph', 'FAISS', 'Groq', 'FastAPI', 'React', 'MongoDB'], metric: '4-domain · EN/HI/DE · 100+ sources', liveUrl: 'https://aradhyastuti-seelenruh.hf.space/' },
  { _id: '0718293a4b5c6d7e8f900112', title: 'AI PCB Defect Detection', category: 'ai', description: 'Computer vision system using SSIM-based anomaly detection and ResNet-50 for automated PCB defect classification across 6 defect types.', techStack: ['PyTorch', 'ResNet-50', 'scikit-image', 'FastAPI', 'Streamlit', 'Docker'], metric: '6 defect types · DeepPCB' },
  { _id: 'f60718293a4b5c6d7e8f9001', title: 'Student Depression Risk Predictor', category: 'ml', description: 'PyTorch neural network with a logistic regression baseline for student mental health prediction. Accuracy 85%, F1 0.87, ROC-AUC 0.92.', techStack: ['PyTorch', 'Scikit-learn', 'customtkinter', 'FastAPI', 'SQLite', 'Docker'], metric: '85% acc · F1 0.87 · 0.92 AUC', liveUrl: 'https://aradhyastuti-student-depression-prediction.hf.space/' },
  { _id: 'c3d4e5f60718293a4b5c6d7e', title: 'RouteLM', category: 'ai', description: 'LLM course tutor with pre-retrieval query classification — routes between RAG, LLM-only, and refusal with sub-500ms off-topic refusals.', techStack: ['LangGraph', 'FAISS', 'Groq', 'Ollama', 'FastAPI', 'React'], metric: '18/18 classifier · 43 tests', liveUrl: 'https://aradhyastuti-routelm.hf.space/' },
  { _id: 'a1b2c3d4e5f60718293a4b5c', title: 'NexusMeet', category: 'web', description: 'Encrypted real-time communication platform with WebRTC, mediasoup SFU routing, AES-GCM end-to-end chat, and automatic P2P fallback.', techStack: ['React', 'Node.js', 'WebRTC', 'mediasoup', 'Socket.io', 'MongoDB'], metric: 'AES-GCM E2E · mediasoup SFU' },
  { _id: 'b2c3d4e5f60718293a4b5c6d', title: 'GitlessForge', category: 'web', description: 'Distributed version control system built from scratch — branches, merges, blame, stash, reflog — wrapped with a GitHub-style platform (PRs, code review, CI, Kanban).', techStack: ['Node.js', 'Express', 'MongoDB', 'React', 'Vite', 'Docker'], metric: 'VCS from scratch · no Git' },
];

const badgeClass = { ai: 'badge badge-ai', ml: 'badge badge-ml', web: 'badge badge-web' };
const filters = ['all', 'web', 'ai', 'ml'];

const ProjectsPage = () => {
  useReveal();
  usePageTitle('Projects');
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/projects?category=${filter}`)
      .then((r) => r.json())
      .then(setProjects)
      .catch(() => {
        setProjects(filter === 'all' ? fallbackProjects : fallbackProjects.filter((p) => p.category === filter));
      })
      .finally(() => setLoading(false));
  }, [filter]);

  return (
    <div className="page">
      <div className="container">
        <span className="section-label">Portfolio · Index</span>
        <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.6rem)', marginTop: '8px', marginBottom: '12px' }}>Projects</h1>
        <p style={{ color: '#71717a', marginBottom: '48px', maxWidth: '560px', fontSize: '15px', lineHeight: 1.7 }}>
          A curated list of AI/ML systems and full-stack applications. Each one shipped end-to-end with tests and CI.
        </p>

        {/* category filters */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '48px', borderBottom: '1px solid #262626' }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '12px 20px', fontSize: '12px', fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer',
                transition: 'color 0.2s, border-color 0.2s',
                border: 'none',
                borderBottom: filter === f ? '1px solid #f3ecdb' : '1px solid transparent',
                marginBottom: '-1px',
                background: 'transparent',
                color: filter === f ? '#f3ecdb' : '#71717a',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* project grid */}
        <div className="projects-grid">
          {loading && Array.from({ length: 6 }).map((_, n) => (
            <SkeletonProjectCard key={n} />
          ))}
          {!loading && projects.map((p, i) => {
            const metric = p.metric || p.highlights?.[0];
            const delayClass = `reveal-delay-${Math.min((i % 4) + 1, 4)}`;
            return (
              <div key={p._id} className={`reveal ${delayClass}`} style={{ position: 'relative' }}>
                <Link to={`/projects/${p._id}`} className="card" style={{ padding: '0', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
                  <div className={`project-visual ${visualClass[p.category] || ''}`}>
                    <i className={`fas ${projectIcons[p.title] || 'fa-code'}`} style={{ color: 'rgba(255,255,255,0.12)', position: 'relative', zIndex: 1 }}></i>
                  </div>
                  <div style={{ padding: '22px 24px 26px' }}>
                    <span className={badgeClass[p.category] || 'badge'} style={{ width: 'fit-content', marginBottom: '14px' }}>{p.category}</span>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px', color: '#f3ecdb', letterSpacing: '-0.01em' }}>{p.title}</h3>
                    {metric && (
                      <p style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '11px', color: '#a1a1aa', marginBottom: '12px', letterSpacing: '0.01em' }}>
                        {metric}
                      </p>
                    )}
                    <p style={{ color: '#a1a1aa', fontSize: '13px', lineHeight: 1.7, marginBottom: '18px' }}>{p.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                      {p.techStack?.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                    <span style={{ color: '#f3ecdb', fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em' }}>
                      Read more →
                    </span>
                  </div>
                </Link>
                <div style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 2, display: 'flex', gap: '6px' }}>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open live demo"
                      title="Live demo"
                      className="card-gh"
                    >
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source on GitHub"
                      title="GitHub"
                      className="card-gh"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
