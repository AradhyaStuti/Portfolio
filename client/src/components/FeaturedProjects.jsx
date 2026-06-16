import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SkeletonFeaturedCard } from './Skeleton';

// fallback used only when the /api/projects request fails — keeps the home page
// alive on the deploy preview even if the serverless fn cold-starts or 500s.
const fallback = [
  { _id: 'e5f60718293a4b5c6d7e8f90', title: 'Seelenruh', category: 'ai', description: 'Multi-persona GenAI assistant routing across 4 life-aid domains on Groq LLaMA-3 with FAISS RAG, cross-encoder reranking, and EN/HI/DE multilingual answers.', techStack: ['LangGraph', 'FAISS', 'Groq', 'FastAPI', 'React', 'MongoDB'], metric: '4-domain · EN/HI/DE · 100+ sources', liveUrl: 'https://aradhyastuti-seelenruh.hf.space/' },
  { _id: '0718293a4b5c6d7e8f900112', title: 'AI PCB Defect Detection', category: 'ai', description: 'Computer vision system using SSIM-based anomaly detection and ResNet-50 for PCB defect classification.', techStack: ['PyTorch', 'ResNet-50', 'FastAPI'], metric: '6 defect types · DeepPCB' },
  { _id: 'f60718293a4b5c6d7e8f9001', title: 'Student Depression Risk Predictor', category: 'ml', description: 'PyTorch neural network with logistic regression baseline. Accuracy 85%, F1 0.87, ROC-AUC 0.92.', techStack: ['PyTorch', 'Scikit-learn', 'FastAPI', 'Docker'], metric: '85% acc · F1 0.87 · 0.92 AUC', liveUrl: 'https://aradhyastuti-student-depression-prediction.hf.space/' },
];

const badgeClass = { ai: 'badge badge-ai', ml: 'badge badge-ml', web: 'badge badge-web' };

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((d) => setProjects(d.slice(0, 3)))
      .catch(() => setProjects(fallback))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="section section-bordered">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px' }}>
          <div>
            <span className="section-label">Selected work</span>
            <h2 className="section-title" style={{ marginTop: '8px' }}>Recent projects</h2>
          </div>
          <Link to="/projects" style={{ color: '#a1a1aa', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
            View all →
          </Link>
        </div>

        <div className="featured-grid">
          {loading && (
            <>
              <SkeletonFeaturedCard tall />
              <SkeletonFeaturedCard />
              <SkeletonFeaturedCard />
            </>
          )}
          {!loading && projects.map((p, i) => {
            const metric = p.metric || p.highlights?.[0];
            const isFlagship = i === 0;
            const delayClass = `reveal-delay-${Math.min(i + 1, 4)}`;
            return (
              <div key={p._id} className={`reveal ${delayClass}`} style={{ position: 'relative' }}>
                <Link to={`/projects/${p._id}`} className="card" style={{ padding: isFlagship ? '40px 44px' : '32px', display: 'flex', flexDirection: isFlagship ? 'row' : 'column', gap: isFlagship ? '40px' : '0', textDecoration: 'none', color: 'inherit', alignItems: isFlagship ? 'center' : 'stretch' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span className={badgeClass[p.category] || 'badge'} style={{ width: 'fit-content', marginBottom: isFlagship ? '16px' : '20px' }}>{p.category}</span>
                    <h3 style={{ fontSize: isFlagship ? '28px' : '20px', fontWeight: 600, marginBottom: '6px', color: '#f3ecdb', letterSpacing: '-0.015em', lineHeight: 1.15 }}>{p.title}</h3>
                    {metric && (
                      <p style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '11px', color: '#a1a1aa', marginBottom: '14px', letterSpacing: '0.01em' }}>
                        {metric}
                      </p>
                    )}
                    <p style={{ color: '#a1a1aa', fontSize: isFlagship ? '15px' : '14px', lineHeight: 1.7, marginBottom: '22px', flex: 1, maxWidth: isFlagship ? '560px' : 'none' }}>{p.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {p.techStack?.slice(0, isFlagship ? 6 : 4).map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                    <span style={{ color: '#f3ecdb', fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em' }}>
                      Read case study →
                    </span>
                  </div>
                </Link>
                <div style={{ position: 'absolute', top: isFlagship ? '32px' : '24px', right: isFlagship ? '36px' : '24px', zIndex: 2, display: 'flex', gap: '6px' }}>
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

export default FeaturedProjects;
