const express = require('express');
const app = express();
const server = require('express').Router();
const {Publicaciones} = require('../db');

app.use(express.json());

server.post('', async(req, res) => {
    let {
        titulo,
        fecha,
        contenido
    } = req.body;
    await Publicaciones.findOrCreate({
        where: { titulo: titulo },
  defaults: {
    titulo: titulo,
    fecha: fecha,
    contenido: contenido
  }
    })
.then((publicacion) => {
    res.json(publicacion)
})
.catch(err => console.log(err))
});



server.get('', (req, res, next)=>{
    Publicaciones.findAll()
    .then(publicaciones =>{
        if(publicaciones.length > 0){
            res.status(200).json(publicaciones)
        }
        else{
            res.status(404).send('No hay publicaciones')
        }
    })
})

module.exports = server