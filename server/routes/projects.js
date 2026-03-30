const express = require('express');
const router = express.Router();
const store = require('../config/store');

const COL = 'projects';

// GET /api/projects
router.get('/', (req, res) => {
  const { category } = req.query;
  const filter = category && category !== 'all' ? { category } : {};
  const projects = store.find(COL, filter).sort((a, b) => (a.order || 0) - (b.order || 0));
  res.json(projects);
});

// GET /api/projects/:id
router.get('/:id', (req, res) => {
  const project = store.findById(COL, req.params.id);
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json(project);
});

module.exports = router;
