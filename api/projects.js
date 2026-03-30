const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../server/data/projects.json'), 'utf-8'));
  const { category, id } = req.query;

  if (id) {
    const project = data.find((p) => p._id === id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    return res.json(project);
  }

  const filtered = category && category !== 'all'
    ? data.filter((p) => p.category === category)
    : data;

  res.json(filtered.sort((a, b) => (a.order || 0) - (b.order || 0)));
};
