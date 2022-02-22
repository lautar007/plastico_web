const express = require('express');
const app = express();
const server = require('express').Router();
const {Publicaciones} = require('../db');

app.use(express.json());


server.post('', async(req, res) => {
    let {
        titulo,
        fecha,
        contenido,
        imagen,
        categoria,
        galeria,
        subtitulo
    } = req.body;
    await Publicaciones.findOrCreate({
        where: { titulo: titulo },
  defaults: {
    titulo: titulo,
    fecha: fecha,
    contenido: contenido,
    imagen: imagen,
    categoria: categoria,
    galeria: galeria,
    subtitulo: subtitulo
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

server.get('/:id', async(req, res) =>{
    const {id} = req.params;
    Publicaciones.findOne({where:{id: id}})
    .then(publicacion =>{
            res.status(200).json(publicacion)
    })
})

server.delete('', async(req, res, next)=>{
    let {titulo} = req.body;
    await Publicaciones.destroy({where:{titulo: titulo}})   
    .then((publicacion)=>{
        res.send('publicación eliminada');
        res.json(publicacion)
    })
    .catch(err => console.log(err))
})

module.exports = server