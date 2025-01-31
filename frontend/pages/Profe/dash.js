import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar userType="profe" />
      <div className="content">
        <h2>Bienvenido Profesor</h2>
        <p>Resumen de acciones recientes.</p>
      </div>
    </div>
  );
};

export default Dashboard;
