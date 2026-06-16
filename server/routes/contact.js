const express = require('express');
const router = express.Router();
const store = require('../config/store');

const COL = 'contacts';

// POST /api/contact
router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const contact = store.create(COL, { name, email, subject, message, read: false });
  res.status(201).json({ message: 'Message sent successfully!', id: contact._id });
});

module.exports = router;
