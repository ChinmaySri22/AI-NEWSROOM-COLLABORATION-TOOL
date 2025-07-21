const express = require('express');
const { getAllArticles, createArticle } = require('../models/articleModel');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// GET /api/articles - list all articles (protected)
router.get('/', protect, async (req, res) => {
  try {
    const articles = await getAllArticles();
    res.json({ success: true, data: articles });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch articles' });
  }
});

// POST /api/articles - create new article (protected)
router.post('/', protect, async (req, res) => {
  try {
    const { title, content, brief } = req.body;
    if (!title || !content) {
      return res.status(400).json({ success: false, message: 'Title and content are required' });
    }
    const author_id = req.user.id;
    const article = await createArticle({ title, content, brief, author_id });
    res.status(201).json({ success: true, data: article });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create article' });
  }
});

module.exports = router; 