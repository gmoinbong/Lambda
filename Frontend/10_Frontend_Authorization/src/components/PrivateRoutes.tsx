import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, refreshToken } from '../auth/AuthService/AuthService';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  useEffect(() => {
    setInterval(async () => { refreshToken() }, 60000)

  }, [])
  useEffect(() => {
    refreshToken()
  }, [])

  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
