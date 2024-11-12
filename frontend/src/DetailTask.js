//Importar Librerias de React & Axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskDetail = ({ taskId }) => {
  // Se guardan detalles de Tareas
  const [task, setTask] = useState(null);

  // Obtiene detalles de Tareas 
  useEffect(() => {
    axios.get(`http://localhost:5000/api/tasks/${taskId}`)
      .then((response) => setTask(response.data))
      .catch((error) => console.error("Error fetching task:", error));
  }, [taskId]);

  // If task data is not loaded yet, display loading message
  if (!task) {
    return <div>Cargando</div>;
  }

  // Muestra Detalles en Pantalla
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetail;
