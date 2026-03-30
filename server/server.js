const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const seedData = require('./config/seed');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Auto-seed data on startup
seedData();

// Resume download
app.get('/api/resume', (req, res) => {
  const filePath = path.join(__dirname, '../resume.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Aradhya_Stuti_Resume.pdf"');
  res.sendFile(path.resolve(filePath));
});

// API Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/visitors', require('./routes/visitors'));

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
