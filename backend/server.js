//Importando las Librerias de Express y Cors
const express = require('express');
const cors = require('cors');

const app = express();

//Servidor en: http://localhost:5000. 
const port = 5000;

//Middleware usando Cors
app.use(cors());
app.use(express.json());

//Inicializa Servidor
app.listen(port, () => {
    console.log(`Servidor en: http://localhost:${port}`);
});

//Array
let data = [
    { id: 1, title: 'Tarea #1', description: 'Esta es la Tarea #1' },
    { id: 2, title: 'Tarea #2', description: 'Esta es la Tarea #2' },
  ];
  
//Rutas de API

// [GET] Obtiene Todas las Tareas; Reenvia en formato JSON
app.get('/api/tasks', (req, res) => {
    res.json(data);

});

// [GET] Obtiene Tarea 
app.get('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = data.find((item) => item.id === id);
    // if (task) {
    //     response.json(task);
    // } else {
    //     res.status(404).json({ message: 'Tarea no Encontrada'})
    // }
});

// [POST] Agrega una Tarea
app.post('/api/tasks', (req, res) => {
    const { title, description } = req.body;
    const newTask = { id: data.length + 1, title, description };
  
    data.push(newTask);
    res.status(201).json(newTask);
});

//[PUT] Actualiza una Tarea 
app.put('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    const task = data.find((item) => item.id === id);

    // if (task) {
    //     task.title = title || task.title;
    //     task.description = description || task.description;
    //     res.json(task);
    //   } else {
    //     res.status(404).json({ message: 'Tarea no Encontrada' });
    //   }
});

//[DELETE] Borra una Tarea 
app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    data = data.filter((item) => item.id !== id);
    res.sendStatus(204);
  });
  
