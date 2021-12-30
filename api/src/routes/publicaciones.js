const express = require('express');
const app = express();
const server = require('express').Router();
const {Publicaciones} = require('../db');
const publicaciones = require('../models/publicaciones');

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
    res.status(200).send('Publicación creada con éxito')
})

server.get('', (req, res, next)=>{
    Publicaciones.findAll()
    .then(publicaciones =>{
        if(publicaciones.length > 0){
            res.status(200).json(activities)
        }
        else{
            res.status(404).send('No hay publicaciones')
        }
    })
})

module.exports = server