import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import ProfeDashboard from './pages/Profe/dash';
import StadyDashboard from './pages/Stady/dashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dash/profe" element={<ProfeDashboard />} />
        <Route path="/dashboard/stady" element={<StadyDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
