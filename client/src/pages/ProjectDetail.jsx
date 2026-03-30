import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const allProjects = [
  { _id: '1', title: 'Depression Risk Predictor', category: 'ml', description: 'PyTorch neural network for student mental health prediction. F1: 87.15%, AUC: 92.2%.', longDescription: 'A comprehensive ML system that predicts student depression risk using behavioral data from 28,000+ records.\n\n• PyTorch neural network validated against XGBoost, Random Forest, Stacking Ensemble\n• SHAP-based model explainability\n• 5-fold cross-validation\n• Gender and age fairness analysis\n• FastAPI REST API for real-time predictions\n• 189 passing tests', techStack: ['PyTorch', 'XGBoost', 'SHAP', 'FastAPI', 'Scikit-learn', 'Pandas'], githubUrl: 'https://github.com/AradhyaStuti/Machine-Learning-Based-Student-Depression-Risk-Prediction-System.git', highlights: ['F1: 87.15%, AUC: 92.2%', 'SHAP explainability', 'Fairness analysis', '189 tests'] },
  { _id: '2', title: 'InferaMind AI', category: 'ai', description: 'ML tutoring system with RAG pipelines, FAISS search, and real-time streaming via Ollama.', longDescription: 'A scalable ML tutoring system using Retrieval-Augmented Generation.\n\n• LangGraph-orchestrated RAG pipeline\n• Embeddings-based query classification\n• FAISS vector search for fast retrieval\n• Real-time Server-Sent Events streaming\n• RAGAS evaluation pipeline\n• Docker-ready with GPU support\n• 40+ tests with CI/CD', techStack: ['LangChain', 'LangGraph', 'FAISS', 'React', 'Ollama', 'Docker', 'RAGAS'], githubUrl: 'https://github.com/AradhyaStuti/InferaMind-AI--Scalable-ML-Tutoring-System-with-LangGraph-Orchestrated-RAG.git', highlights: ['Fully local — no APIs', 'LangGraph orchestration', 'RAGAS evaluation', 'GPU Docker support'] },
  { _id: '3', title: 'MeetSync', category: 'web', description: 'Video conferencing with P2P/SFU architecture, encrypted chat, and waiting rooms. 247 tests.', longDescription: 'MeetSync is a production-grade video conferencing platform. It supports dual P2P and SFU architecture — P2P for small calls, mediasoup-based SFU for larger rooms with simulcast encoding across 3 spatial layers.\n\n• AES-256-GCM encrypted real-time chat\n• Waiting room with host-controlled promotion\n• Auto-restart SFU workers for fault tolerance\n• Redis write-through caching with Socket.IO adapter\n• Automatic reconnection recovery on network drops\n• 247 unit tests + 6 Playwright end-to-end tests', techStack: ['React', 'Node.js', 'WebRTC', 'mediasoup', 'Socket.IO', 'Redis', 'Playwright'], githubUrl: 'https://github.com/AradhyaStuti/MeetSync-Full-Stack-WebRTC-Video-Conferencing-Platform.git', highlights: ['Dual P2P/SFU architecture', 'AES-256-GCM encryption', '247 unit + 6 E2E tests', 'Auto-reconnection'] },
  { _id: '4', title: 'GitForge', category: 'web', description: 'Code hosting platform with custom VCS, CI/CD pipelines, and Kanban boards. 129 tests.', longDescription: 'A full-featured code hosting and collaboration platform built from scratch.\n\n• Custom file-based version control system\n• Real CI/CD pipeline execution\n• Static code review with Myers diff algorithm\n• Kanban boards for project management\n• Hybrid GraphQL + REST API\n• Redis caching, JWT + API key authentication\n• Audit logging and webhook integrations', techStack: ['React 18', 'Node.js', 'MongoDB', 'GraphQL', 'Redis', 'Socket.IO', 'Docker'], githubUrl: 'https://github.com/AradhyaStuti/GitForge-Distributed-Version-Control-Automation-Platform.git', highlights: ['Custom VCS engine', 'Real CI/CD pipelines', 'GraphQL + REST API', '129 tests'] },
  { _id: '5', title: 'PCB Defect Detection', category: 'ai', description: 'Computer vision system using ResNet-50 for automated PCB defect classification.', longDescription: 'End-to-end AI system for detecting PCB defects using deep learning and classical computer vision.\n\n• PyTorch ResNet-50 for defect classification\n• SSIM-based anomaly detection\n• Perceptual hashing for template matching\n• Non-Maximum Suppression for localization\n• Streamlit UI for interactive analysis\n• FastAPI backend for API access\n• Dockerized deployment with CI/CD', techStack: ['PyTorch', 'ResNet-50', 'FastAPI', 'Streamlit', 'Docker', 'OpenCV'], githubUrl: 'https://github.com/AradhyaStuti/AI_PCB_Defect_Detection_Classification_System/tree/my-branch', highlights: ['ResNet-50 backbone', 'SSIM + pHash detection', 'Streamlit UI', 'Docker CI/CD'] },
];

const catLabel = { ai: 'Artificial Intelligence', ml: 'Machine Learning', web: 'Web Development' };
const badgeClass = { ai: 'badge badge-ai', ml: 'badge badge-ml', web: 'badge badge-web' };

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((r) => r.ok ? r.json() : null)
      .then((d) => setProject(d))
      .catch(() => setProject(allProjects.find((p) => p._id === id) || null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 24, height: 24, border: '2px solid #1c2030', borderTopColor: '#14b8a6', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div></div>;

  if (!project) return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>Project not found</p>
      <Link to="/projects" style={{ color: '#14b8a6', textDecoration: 'none', fontSize: '14px' }}>&larr; Back to Projects</Link>
    </div>
  );

  return (
    <div className="page">
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <Link to="/projects" style={{ color: '#14b8a6', textDecoration: 'none', fontSize: '13px', fontWeight: 600, display: 'inline-block', marginBottom: '40px' }}>
          <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>All Projects
        </Link>

        <span className={badgeClass[project.category] || 'badge'} style={{ display: 'inline-block', marginBottom: '20px' }}>
          {catLabel[project.category] || project.category}
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px', color: '#fff' }}>
          {project.title}
        </h1>
        <p style={{ color: '#71717a', fontSize: '18px', lineHeight: 1.7, maxWidth: '600px', marginBottom: '40px' }}>
          {project.description}
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '60px' }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#fff', color: '#000' }}>
              <i className="fab fa-github"></i> View Source Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
        </div>

        {/* Info grid */}
        <div className="detail-grid" style={{ marginBottom: '48px' }}>
          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontWeight: 700, fontSize: '13px', color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Highlights</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {(project.highlights || []).map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '14px', color: '#94a3b8' }}>
                  <i className="fas fa-check" style={{ color: '#14b8a6', fontSize: '11px', marginTop: '4px' }}></i>{h}
                </li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontWeight: 700, fontSize: '13px', color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Tech Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techStack?.map((t) => <span key={t} className="pill">{t}</span>)}
            </div>
          </div>
        </div>

        {/* Description */}
        {project.longDescription && (
          <div className="card" style={{ padding: '48px' }}>
            <h3 style={{ fontWeight: 700, fontSize: '20px', marginBottom: '24px', color: '#fff' }}>About this project</h3>
            <div style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.9, whiteSpace: 'pre-line' }}>
              {project.longDescription}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
