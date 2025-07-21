import { useNavigate } from 'react-router-dom';

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #eee' }}>
        <div>
          <a href="/dashboard" style={{ marginRight: 16 }}>Articles</a>
          <a href="/dashboard/new">New Article</a>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <main style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
};

export default Dashboard; 