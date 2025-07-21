const pool = require('../config/db');

// Get all articles
const getAllArticles = async () => {
  const result = await pool.query(
    'SELECT id, title, status, created_at FROM articles ORDER BY created_at DESC'
  );
  return result.rows;
};

// Create a new article
const createArticle = async ({ title, content, brief, author_id }) => {
  const result = await pool.query(
    `INSERT INTO articles (title, content, brief, author_id) VALUES ($1, $2, $3, $4) RETURNING id, title, status, created_at`,
    [title, content, brief, author_id]
  );
  return result.rows[0];
};

module.exports = {
  getAllArticles,
  createArticle,
}; 