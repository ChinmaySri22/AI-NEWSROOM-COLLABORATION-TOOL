import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

interface AuthPageProps {
  mode: 'login' | 'register';
}

const AuthPage = ({ mode }: AuthPageProps) => {
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '2rem', border: '1px solid #eee', borderRadius: 8 }}>
      {mode === 'login' ? <Login /> : <Register />}
    </div>
  );
};

export default AuthPage; 