import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  if (!user) {
    // User not logged in, redirect to login
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    // User does not have the required role, redirect to a 'not authorized' page or home
    // For now, let's redirect to home
    return <Navigate to="/" />;
  }

  return children;
}
