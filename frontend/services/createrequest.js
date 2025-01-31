import React, { useState } from 'react';
import { createRequest } from '../services/requestService'; 

const CreateRequest = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !description || !status) {
      alert('Por favor, llena todos los campos');
      return;
    }

    setIsSubmitting(true);

    const requestData = {
      title,
      description,
      status,
    };

    const response = await createRequest(requestData);

    setIsSubmitting(false);

    if (response.success) {
      alert('Solicitud creada con éxito');
      setTitle('');
      setDescription('');
      setStatus('');
    } else {
      alert('Hubo un error al crear la solicitud');
    }
  };

  return (
    <div className="create-request">
      <h2>Crear Solicitud</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título de la solicitud"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción detallada"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Seleccionar Estado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En Proceso">En Proceso</option>
            <option value="Completada">Completada</option>
          </select>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creando...' : 'Crear Solicitud'}
        </button>
      </form>
    </div>
  );
};

export default CreateRequest;
