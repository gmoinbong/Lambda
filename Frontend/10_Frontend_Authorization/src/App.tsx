import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './auth/Login/Login';
import SignUp from './auth/SignUp/SignUp';
import { Logout } from './auth/Logout/Logout';
import { AccountPage } from './pages/AccountPage';
import { AuthStatus } from './auth/authService';
import { AuthContext, AuthProvider } from './auth/AuthProvider/AuthProvider';
import "./App.css"

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

const AppRoutes: React.FC = () => {
  const { authStatus } = useContext(AuthContext);

  if (authStatus === AuthStatus.Loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/me" element={<AccountPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
