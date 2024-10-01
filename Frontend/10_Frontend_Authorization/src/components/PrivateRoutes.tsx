import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth/AuthService/AuthService';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
