
import React, { useState } from 'react';
import axios from 'axios';

const FormTask = () => {
  const [title, setTitle] = useState('');            // Input Titulo
  const [description, setDescription] = useState(''); // Input Desc.
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description };

    axios.post('http://localhost:5000/api/tasks', newTask)
      .then((response) => {
        console.log(response.data);
        //
        setTitle('');
        setDescription('');
      })
      .catch((error) => console.error("Error: ", error));
  };

  return (
    <div>
      <h2>Agrega Nuevas Tareas</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Titulo:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
                    <label>Descripcion:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Agregar Tarea</button>
        </div>
      </form>
    </div>
  );
};

export default FormTask;
