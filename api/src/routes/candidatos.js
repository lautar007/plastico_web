const express = require('express');
const app = express();
const server = require('express').Router();
const {Candidatos} = require('../db');

app.use(express.json());

server.post('', async(req, res) => {
    let {
        nombre,
        edad,
        mail,
        telefono,
        newsletter,
        pasantia
    } = req.body;
    await Candidatos.findOrCreate({
        where: { nombre: nombre },
  defaults: {
    nombre: nombre,
    edad: edad,
    mail: mail,
    telefono: telefono,
    newsletter: newsletter,
    pasantia: pasantia
  }
    })
.then((candidato) => {
    res.json(candidato)
})
.catch(err => console.log(err))
});


server.get('', (req, res, next)=>{
    Candidatos.findAll()
    .then(candidatos =>{
        if(candidatos.length > 0){
            res.status(200).json(candidatos)
        }
        else{
            res.status(404).send('No hay candidatos/as')
        }
    })
})

server.delete('', async(req, res, next)=>{
    let {nombre} = req.body;
    await Candidatos.destroy({where:{nombre: nombre}})   
    .then(
        res.send('candidato/a eliminado/a')
    )
    .catch(err => console.log(err))
})

module.exports = server