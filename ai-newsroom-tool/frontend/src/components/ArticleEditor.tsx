import { useState } from 'react';
import { createArticle } from '../api/articles';
import { useNavigate } from 'react-router-dom';

const ArticleEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [brief, setBrief] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not authenticated');
      return;
    }
    try {
      await createArticle({ title, content, brief }, token);
      setSuccess('Article created!');
      setTimeout(() => navigate('/dashboard'), 1200);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create article');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Article</h3>
      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: 8 }}>{success}</div>}
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Brief (for AI input)</label>
        <textarea value={brief} onChange={e => setBrief(e.target.value)} rows={2} />
      </div>
      <div>
        <label>Content</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} rows={6} required />
      </div>
      <button type="submit">Create Article</button>
    </form>
  );
};

export default ArticleEditor; 