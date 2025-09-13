//src/components/Admin/AdminRoute.jsx
import { Navigate } from 'react-router-dom';
import userService from '../../services/UserService';

export default function AdminRoute({ children }) {
  const currentUser = userService.getCurrentUser();
  const isAdmin = ['YOUR_PHONE_NUMBER'].includes(currentUser?.phone);
  
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}