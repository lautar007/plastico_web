const express = require('express');
const app = express();
const server = require('express').Router();
const {Portada} = require('../db');

app.use(express.json());

server.post('', async(req, res)=>{
    let{
        imagenA,
        imagenB
    } = req.body;
    await Portada.findOrCreate({
        where: {imagenA: imagenA},
        defaults:{
            imagenA: imagenA,
            imagenB: imagenB
        }
    })
    .then((portada) => {
        res.json(portada)
    })
    .catch(err => console.log(err))
    });


    server.get('', (req, res, next)=>{
        Portada.findAll()
        .then(port =>{
            if(port.length > 0){
                res.status(200).json(port)
            }
            else{
                res.status(404).send('No hay imagenes de portada')
            }
        })
    })

    server.delete('', async(req, res, next)=>{
        await Portada.destroy({ truncate: true })  
        .then(
            res.send('portada eliminada')
        )
        .catch(err => console.log(err))
    })
    
    module.exports = server