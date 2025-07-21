import { useEffect, useState } from 'react';
import { fetchArticles } from '../api/articles';

interface Article {
  id: number;
  title: string;
  status: string;
  created_at: string;
}

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not authenticated');
      setLoading(false);
      return;
    }
    fetchArticles(token)
      .then(setArticles)
      .catch(() => setError('Failed to fetch articles'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h3>Articles</h3>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <strong>{article.title}</strong> <em>({article.status})</em> <span style={{ color: '#888' }}>{new Date(article.created_at).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticleList; 