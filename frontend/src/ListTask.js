//Importar Librerias de React & Axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListTask = () => {
  // Guardar Tareas
  const [tasks, setTasks] = useState([]);

  // Obtiene Tareas de Server
  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')  // GET 
      .then((response) => setTasks(response.data)) // Actualiza con Tareas Nuevas
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>    {}
            <p>{task.description}</p>        {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
