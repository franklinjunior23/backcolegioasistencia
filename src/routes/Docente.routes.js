

const docente = require('express').Router();
const { getDocentes, getDocente, posDocente, updaDocente, deleteDocente, IniciarSeccion }= require('../controller/docente.controller');


docente.get('/docentes',getDocentes)
docente.get('/docentes/:id',getDocente)
docente.post('/docentes',posDocente)
docente.put('/docentes/:id',updaDocente)
docente.delete('/docentes/:id',deleteDocente)

docente.post('/SignIn',IniciarSeccion)

module.exports = docente