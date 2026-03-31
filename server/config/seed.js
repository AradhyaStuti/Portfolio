const store = require('./store');

const seedData = () => {
  const existing = store.find('projects');
  if (existing.length > 0) return;

  console.log('Seeding initial data...');

  store.insertMany('projects', [
    {
      title: 'Depression Risk Predictor',
      description: 'PyTorch neural network for student mental health prediction. F1: 87.15%, AUC: 92.2%.',
      longDescription: 'A comprehensive ML system that predicts student depression risk using behavioral data from 28,000+ records.\n\n• PyTorch neural network validated against XGBoost, Random Forest, Stacking Ensemble\n• SHAP-based model explainability\n• 5-fold cross-validation\n• Gender and age fairness analysis\n• FastAPI REST API for real-time predictions\n• 189 passing tests',
      category: 'ml',
      techStack: ['PyTorch', 'XGBoost', 'SHAP', 'FastAPI', 'Scikit-learn', 'Pandas'],
      githubUrl: 'https://github.com/AradhyaStuti/Machine-Learning-Based-Student-Depression-Risk-Prediction-System.git',
      highlights: ['F1: 87.15%, AUC: 92.2%', 'SHAP explainability', 'Fairness analysis', '189 tests'],
      order: 1,
    },
    {
      title: 'InferaMind AI',
      description: 'ML tutoring system with RAG pipelines, FAISS search, and real-time streaming via Ollama.',
      longDescription: 'A scalable ML tutoring system using Retrieval-Augmented Generation.\n\n• LangGraph-orchestrated RAG pipeline\n• Embeddings-based query classification\n• FAISS vector search for fast retrieval\n• Real-time Server-Sent Events streaming\n• RAGAS evaluation pipeline\n• Docker-ready with GPU support\n• 40+ tests with CI/CD',
      category: 'ai',
      techStack: ['LangChain', 'LangGraph', 'FAISS', 'React', 'Ollama', 'Docker', 'RAGAS'],
      githubUrl: 'https://github.com/AradhyaStuti/InferaMind-AI--Scalable-ML-Tutoring-System-with-LangGraph-Orchestrated-RAG.git',
      highlights: ['Fully local — no APIs', 'LangGraph orchestration', 'RAGAS evaluation', 'GPU Docker support'],
      order: 2,
    },
    {
      title: 'MeetSync',
      description: 'Video conferencing with P2P/SFU architecture, encrypted chat, and waiting rooms. 247 tests.',
      longDescription: 'MeetSync is a production-grade video conferencing platform. It supports dual P2P and SFU architecture — P2P for small calls, mediasoup-based SFU for larger rooms with simulcast encoding across 3 spatial layers.\n\n• AES-256-GCM encrypted real-time chat\n• Waiting room with host-controlled promotion\n• Auto-restart SFU workers for fault tolerance\n• Redis write-through caching with Socket.IO adapter\n• Automatic reconnection recovery on network drops\n• 247 unit tests + 6 Playwright end-to-end tests',
      category: 'web',
      techStack: ['React', 'Node.js', 'WebRTC', 'mediasoup', 'Socket.IO', 'Redis', 'Playwright'],
      githubUrl: 'https://github.com/AradhyaStuti/MeetSync-Full-Stack-WebRTC-Video-Conferencing-Platform.git',
      highlights: ['Dual P2P/SFU architecture', 'AES-256-GCM encryption', '247 unit + 6 E2E tests', 'Auto-reconnection'],
      order: 3,
    },
    {
      title: 'GitlessForge',
      description: 'Distributed version control and DevOps platform with custom VCS, CI/CD pipelines, and a 24-command CLI.',
      longDescription: 'A distributed version control and DevOps platform built from scratch with no Git dependency.\n\n• Custom file-based version control system storing commits as JSON snapshots\n• Branching, merging, and a 24-command terminal interface\n• CI/CD pipelines executing real shell commands with exit codes, timeouts, and injection prevention\n• Static code review using Myers diff algorithm\n• Child process spawning for build automation',
      category: 'web',
      techStack: ['Node.js', 'JavaScript', 'JSON', 'Myers Diff', 'Shell', 'CI/CD'],
      githubUrl: 'https://github.com/AradhyaStuti/GitlessForge-Distributed-Version-Control-Automation-Platform.git',
      highlights: ['Custom VCS engine', 'No Git dependency', '24-command CLI', 'Myers diff code review'],
      order: 4,
    },
    {
      title: 'PCB Defect Detection',
      description: 'Computer vision system using ResNet-50 for automated PCB defect classification.',
      longDescription: 'End-to-end AI system for detecting PCB defects using deep learning and classical computer vision.\n\n• PyTorch ResNet-50 for defect classification\n• SSIM-based anomaly detection\n• Perceptual hashing for template matching\n• Non-Maximum Suppression for localization\n• Streamlit UI for interactive analysis\n• FastAPI backend for API access\n• Dockerized deployment with CI/CD',
      category: 'ai',
      techStack: ['PyTorch', 'ResNet-50', 'FastAPI', 'Streamlit', 'Docker', 'OpenCV'],
      githubUrl: 'https://github.com/AradhyaStuti/AI_PCB_Defect_Detection_Classification_System/tree/my-branch',
      highlights: ['ResNet-50 backbone', 'SSIM + pHash detection', 'Streamlit UI', 'Docker CI/CD'],
      order: 5,
    },
  ]);

  console.log('Data seeded successfully!');
};

module.exports = seedData;
