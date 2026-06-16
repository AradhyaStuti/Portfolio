import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const allProjects = [
  { _id: 'e5f60718293a4b5c6d7e8f90', title: 'Seelenruh', category: 'ai', description: 'Multi-persona Generative AI assistant routing across 4 life-aid domains — mental health, legal rights, government schemes, personal safety — on Groq LLaMA-3 with FAISS RAG and EN/HI/DE multilingual answers.', longDescription: 'A multi-persona GenAI assistant that routes user questions across four life-aid domains and answers in three languages.\n\n• 4-domain LLM routing — mental health, legal rights, government schemes, personal safety\n• LangGraph-driven intent classification before retrieval\n• Groq LLaMA-3 inference\n• FAISS-backed RAG with Sentence-Transformer embeddings and a cross-encoder reranker\n• Curated 100+ source knowledge base with citation grounding\n• Multilingual EN/HI/DE responses\n• FastAPI backend + React frontend\n• MongoDB Atlas, JWT auth, SSE-streamed responses\n• Dockerized deployment on Hugging Face Spaces', techStack: ['LangGraph', 'FAISS', 'Groq', 'FastAPI', 'React', 'MongoDB'], githubUrl: 'https://github.com/AradhyaStuti/Seelenruh-Generative-AI-Assistant-with-RAG-LangGraph-and-FAISS', liveUrl: 'https://aradhyastuti-seelenruh.hf.space/', highlights: ['4-domain LLM routing (mental health, legal, schemes, safety)', 'LangGraph + Groq LLaMA-3 + FAISS RAG', 'Cross-encoder reranking + 100+ source KB', 'EN/HI/DE multilingual, JWT auth, SSE streaming'] },
  { _id: '0718293a4b5c6d7e8f900112', title: 'AI PCB Defect Detection', category: 'ai', description: 'Computer vision system using SSIM-based anomaly detection and ResNet-50 for automated PCB defect classification across 6 defect types.', longDescription: 'End-to-end AI system for detecting and classifying defects on printed circuit boards.\n\n• Two-stage pipeline — SSIM-based anomaly detection followed by ResNet-50 classification\n• Perceptual hashing for golden-reference template matching\n• Non-Maximum Suppression for localization\n• 6 defect types — missing hole, mouse bite, open circuit, short, spur, spurious copper\n• Streamlit UI for interactive analysis\n• FastAPI backend for API access\n• Dockerized deployment with four-job GitHub Actions CI', techStack: ['PyTorch', 'ResNet-50', 'scikit-image', 'FastAPI', 'Streamlit', 'Docker'], githubUrl: 'https://github.com/AradhyaStuti/AI_PCB_Defect_Detection_Classification_System/tree/my-branch', highlights: ['SSIM + ResNet-50 two-stage pipeline', '6 DeepPCB defect types', 'pHash golden-reference matching', 'Streamlit UI + FastAPI + Docker + CI'] },
  { _id: 'f60718293a4b5c6d7e8f9001', title: 'Student Depression Risk Predictor', category: 'ml', description: 'PyTorch neural network with a logistic regression baseline for student mental health prediction. Accuracy 85%, F1 0.87, ROC-AUC 0.92.', longDescription: 'A machine learning system that predicts depression risk in students from 10 lifestyle inputs.\n\n• PyTorch neural network as the primary model\n• Logistic regression baseline for comparison\n• Trained on a ~28,000-row Kaggle dataset\n• Accuracy 85%, F1 0.87, ROC-AUC 0.92\n• Desktop GUI (customtkinter) showing probability, risk level, and advice\n• FastAPI REST service deployed via Docker\n• SQLite for prediction history persistence', techStack: ['PyTorch', 'Scikit-learn', 'customtkinter', 'FastAPI', 'SQLite', 'Docker'], githubUrl: 'https://github.com/AradhyaStuti/Machine-Learning-Based-Student-Depression-Risk-Prediction-System', liveUrl: 'https://aradhyastuti-student-depression-prediction.hf.space/', highlights: ['Accuracy 85%, F1 0.87, ROC-AUC 0.92', 'PyTorch NN + LR baseline', 'Desktop GUI + FastAPI + Docker', 'SQLite prediction history'] },
  { _id: 'c3d4e5f60718293a4b5c6d7e', title: 'RouteLM', category: 'ai', description: 'LLM course tutor with pre-retrieval query classification — routes between RAG, LLM-only, and refusal with sub-500ms off-topic refusals.', longDescription: "An LLM course assistant that routes a question through a three-path classifier before retrieval runs — RAG (grounded), LLM-only (general), or refusal (off-topic).\n\n• Per-course thresholds with max-anchor scoring instead of centroid averaging\n• 18/18 hand-picked queries correctly classified\n• On-topic latency ~1.1s, off-topic refusals under 500ms\n• 36 backend + 7 frontend tests\n• LangGraph orchestration, FAISS retrieval, Groq inference, Ollama bge-m3 embeddings\n• Circuit breaker, WebSocket/SSE streaming, SQLite auth\n• FastAPI backend + React frontend", techStack: ['LangGraph', 'FAISS', 'Groq', 'Ollama', 'FastAPI', 'React'], githubUrl: 'https://github.com/AradhyaStuti/RouteLM-ML-Tutor-LangGraph-RAG', liveUrl: 'https://aradhyastuti-routelm.hf.space/', highlights: ['Three-path query routing pre-retrieval', 'Sub-500ms refusals, ~1.1s on-topic', '18/18 classifier accuracy, 43 tests', 'LangGraph + FAISS + Groq + Ollama'] },
  { _id: 'a1b2c3d4e5f60718293a4b5c', title: 'NexusMeet', category: 'web', description: 'Encrypted real-time communication platform with WebRTC, mediasoup SFU routing, AES-GCM end-to-end chat, and automatic P2P fallback.', longDescription: 'An encrypted real-time communication platform built on WebRTC, mediasoup SFU routing, and browser-based AES-GCM end-to-end encryption.\n\n• AES-GCM end-to-end chat via Web Crypto API — chat key in URL hash, server only sees ciphertext\n• mediasoup-based SFU for scalable group calls\n• Automatic P2P fallback when SFU is unavailable\n• Waiting room with host approval\n• Screen sharing\n• Host promotion when organizer leaves\n• ~24-hour ephemeral room persistence\n• React 18 + Node/Express + MongoDB + Socket.io + Material-UI\n• Backend, frontend, and Playwright E2E tests', techStack: ['React', 'Node.js', 'WebRTC', 'mediasoup', 'Socket.io', 'MongoDB'], githubUrl: 'https://github.com/AradhyaStuti/NexusMeet-Encrypted-Real-Time-Communication-Platform', highlights: ['AES-GCM E2E encrypted chat', 'mediasoup SFU + P2P fallback', 'Waiting room + screen share', 'Jest + Playwright E2E tests'] },
  { _id: 'b2c3d4e5f60718293a4b5c6d', title: 'GitlessForge', category: 'web', description: 'Distributed version control system built from scratch — snapshots, branches, merges, diff, blame, stash, reflog — wrapped with a GitHub-style platform (PRs, code review, CI, Kanban).', longDescription: 'A from-scratch distributed version control system — not a Git wrapper, not a libgit2 binding.\n\n• File snapshots, branches, merges, diff, blame, stash, reflog — all implemented from scratch\n• GitHub-style platform on top — pull requests, code review, merge workflows\n• Static analysis flags hardcoded secrets and unsafe functions in PRs\n• CI/CD pipelines with multi-stage steps and logging\n• Drag-and-drop Kanban project boards\n• Auth, rate limiting, API keys\n• Node + Express + MongoDB backend\n• React + Vite frontend\n• Jest integration tests, Docker Compose deployment', techStack: ['Node.js', 'Express', 'MongoDB', 'React', 'Vite', 'Docker'], githubUrl: 'https://github.com/AradhyaStuti/GitlessForge-Distributed-Version-Control-Automation-Platform', highlights: ['VCS from scratch — no Git', 'Branches, merges, diff, blame, stash, reflog', 'PRs + code review + CI + static analysis', 'Kanban + auth + rate limiting'] },
];

const catLabel = { ai: 'Artificial Intelligence', ml: 'Machine Learning', web: 'Web Development' };
const badgeClass = { ai: 'badge badge-ai', ml: 'badge badge-ml', web: 'badge badge-web' };

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  usePageTitle(project?.title || 'Project');

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((r) => r.ok ? r.json() : null)
      .then((d) => setProject(d))
      .catch(() => setProject(allProjects.find((p) => p._id === id) || null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 24, height: 24, border: '2px solid #1c2030', borderTopColor: '#f3ecdb', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div></div>;

  if (!project) return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>Project not found</p>
      <Link to="/projects" style={{ color: '#f3ecdb', textDecoration: 'none', fontSize: '14px' }}>&larr; Back to Projects</Link>
    </div>
  );

  return (
    <div className="page">
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <Link to="/projects" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '13px', fontWeight: 500, display: 'inline-block', marginBottom: '40px', letterSpacing: '0.02em' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#f3ecdb'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
        >
          <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>All Projects
        </Link>

        <span className={badgeClass[project.category] || 'badge'} style={{ display: 'inline-block', marginBottom: '20px' }}>
          {catLabel[project.category] || project.category}
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '16px', color: '#f3ecdb', lineHeight: 1.1 }}>
          {project.title}
        </h1>
        <p style={{ color: '#a1a1aa', fontSize: '18px', lineHeight: 1.7, maxWidth: '640px', marginBottom: '40px' }}>
          {project.description}
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '60px' }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <i className="fab fa-github"></i> View Source Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
        </div>

        {/* Info grid */}
        <div className="detail-grid" style={{ marginBottom: '48px' }}>
          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontWeight: 600, fontSize: '11px', color: '#8a8a90', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '20px' }}>Highlights</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {(project.highlights || []).map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '14px', color: '#c4c4c8', lineHeight: 1.6 }}>
                  <i className="fas fa-check" style={{ color: '#f3ecdb', fontSize: '11px', marginTop: '5px' }}></i>{h}
                </li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontWeight: 600, fontSize: '11px', color: '#8a8a90', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '20px' }}>Tech Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techStack?.map((t) => <span key={t} className="pill">{t}</span>)}
            </div>
          </div>
        </div>

        {/* Description */}
        {project.longDescription && (
          <div className="card" style={{ padding: '48px' }}>
            <h3 style={{ fontWeight: 600, fontSize: '11px', color: '#8a8a90', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '24px' }}>About this project</h3>
            <div style={{ color: '#c4c4c8', fontSize: '15px', lineHeight: 1.9, whiteSpace: 'pre-line' }}>
              {project.longDescription}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
