import React, { useState } from 'react';
import { register } from '../services/authService';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register({ email, password, role });
    if (response.success) {
      alert('Usuario registrado exitosamente');
      window.location.href = '/login';
    } else {
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div className="register">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Seleccionar Rol</option>
          <option value="admin">Administrador</option>
          <option value="profe">Profesor</option>
          <option value="stady">Estudiante</option>
        </select>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
