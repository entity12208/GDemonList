import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children, adminOnly = false }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && !user.isAdmin) return <Navigate to="/" replace />;

  return children;
}
