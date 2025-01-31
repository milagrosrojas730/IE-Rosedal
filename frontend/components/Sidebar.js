import React from 'react';

const Sidebar = ({ userType }) => {
  const menuItems = {
    admin: ['Dashboard', 'Institución', 'Solicitudes', 'Documentos', 'Usuarios', 'Reportes', 'Notificaciones'],
    profe: ['Dashboard', 'Solicitudes', 'Documentos', 'Reportes', 'Notificaciones'],
    stady: ['Dashboard', 'Solicitudes', 'Documentos', 'Notificaciones']
  };

  return (
    <div className="sidebar">
      <ul>
        {menuItems[userType].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
