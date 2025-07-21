import axios from 'axios';

const API_URL = 'http://localhost:5000/api/articles';

export const fetchArticles = async (token: string) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data.data;
};

export const createArticle = async (article: { title: string; content: string; brief?: string }, token: string) => {
  const res = await axios.post(API_URL, article, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data.data;
}; 