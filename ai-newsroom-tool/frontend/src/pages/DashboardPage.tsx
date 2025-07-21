import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import ArticleList from '../components/ArticleList';
import ArticleEditor from '../components/ArticleEditor';

const DashboardPage = () => {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/new" element={<ArticleEditor />} />
      </Routes>
    </Dashboard>
  );
};

export default DashboardPage; 