const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const publicaciones = require('./publicaciones');
const tareas = require('./tareas');
const candidatos = require('./candidatos');
const portada = require('./portada');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/publicaciones', publicaciones);
router.use('/tareas', tareas);
router.use('/candidatos', candidatos);
router.use('/portada', portada);



module.exports = router;