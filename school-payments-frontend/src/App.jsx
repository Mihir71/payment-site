import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import TransactionsOverview from "./pages/TransactionsOverview";
import StatusCheck from "./pages/StatusCheck";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-800">
                  School Payments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/auth/login" replace />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/transactions" element={<TransactionsOverview />} />
            <Route path="/status-check" element={<StatusCheck />} />
          </Routes>
        </AuthProvider>
      </main>
    </div>
  );
}

export default App;
