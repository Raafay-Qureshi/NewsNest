const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// Add a new video
router.post('/add', async (req, res) => {
  const { title, description, file_path } = req.body;
  try {
    const video = await Video.create({ title, description, file_path });
    res.status(201).json(video);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;