const express = require('express');
const app = express();
const server = require('express').Router();
const {Tareas} = require('../db');

app.use(express.json());

server.post('', async(req, res) => {
    let {
        fecha,
        hora,
        tarea,
        estado
    } = req.body;
    await Tareas.findOrCreate({
        where: { tarea: tarea },
  defaults: {
    tarea: tarea,
    fecha: fecha,
    hora: hora,
    estado: estado
  }
    })
.then((tarea) => {
    res.json(tarea)
})
.catch(err => console.log(err))
});


server.get('', (req, res, next)=>{
    Tareas.findAll()
    .then(tareas =>{
        if(tareas.length > 0){
            res.status(200).json(tareas)
        }
        else{
            res.status(404).send('No hay tareas')
        }
    })
})

module.exports = server