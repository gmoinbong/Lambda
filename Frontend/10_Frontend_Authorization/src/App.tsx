import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './auth/Login/Login';
import SignUp from './auth/SignUp/SignUp';
import AccountPage from './pages/AccountPage';
import PrivateRoute from './components/PrivateRoutes';
import { Logout } from './auth/Logout/Logout';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/me" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

const App: React.FC = () => {
  return (
    <AppRoutes />
  );
};

export default App;
