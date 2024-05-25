import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth'; 

const ProtectedRoute = ({ roles, children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/unauthorized" />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/splash" />; 
  }

  return children;
};

export default ProtectedRoute;
