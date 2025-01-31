const API_URL = 'http://localhost:5000/api'; // Reemplaza con tu API base

export const createRequest = async (requestData) => {
  try {
    const response = await fetch(`${API_URL}/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error al crear la solicitud');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error al crear la solicitud:', error);
    return { success: false, message: error.message };
  }
};
