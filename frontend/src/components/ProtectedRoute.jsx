import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const user = useSelector((state) => state.user.user);  // Get user state from Redux

  if (!user) {
    // If no user is logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the protected component
  return <Component />;
};

export default ProtectedRoute;
