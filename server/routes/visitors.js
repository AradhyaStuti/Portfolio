const express = require('express');
const router = express.Router();
const store = require('../config/store');

const COL = 'visitors';

// POST /api/visitors/track
router.post('/track', (req, res) => {
  const { page } = req.body;
  store.create(COL, {
    page: page || '/',
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    referrer: req.headers.referer || '',
  });
  res.json({ message: 'Tracked' });
});

module.exports = router;
