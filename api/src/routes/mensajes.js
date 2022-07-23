const express = require('express');
const app = express();
const server = require('express').Router();
const {Mensajes} = require('../db');

app.use(express.json());

server.post('', async(req, res) => {
    let {
        nombre,
        mail,
        telefono,
        mensaje
    } = req.body;
    await Mensajes.findOrCreate({
        where: { nombre: nombre },
  defaults: {
    nombre: nombre,
    mail: mail,
    telefono: telefono,
    mensaje: mensaje,
  }
    })
.then((mensaje) => {
    res.json(mensaje)
})
.catch(err => console.log(err))
});

server.get('', (req, res, next)=>{
    Mensajes.findAll()
    .then(mensaje =>{
        if(mensaje.length > 0){
            res.status(200).json(mensaje)
        }
        else{
            res.status(404).send('No hay mensajes')
        }
    })
})

module.exports = server