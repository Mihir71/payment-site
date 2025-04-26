import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import TransactionsOverview from './pages/TransactionsOverview';
import StatusCheck from "./pages/StatusCheck";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/transactions" element={<TransactionsOverview />} />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
        <Route path="/transaction-status" element={<StatusCheck />} />
      </Routes>
    </AuthProvider>
  );
}
