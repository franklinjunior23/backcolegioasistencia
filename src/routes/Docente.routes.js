

const docente = require('express').Router();
const { getDocentes, getDocente, posDocente, updaDocente, deleteDocente, IniciarSeccion }= require('../controller/docente.controller');


docente.get('/docentes',getDocentes)
docente.get('/docente/:id',getDocente)
docente.post('/docentes',posDocente)
docente.put('/docente/:id',updaDocente)
docente.delete('/docente/:id',deleteDocente)

docente.post('/iniciarseccion',IniciarSeccion)

module.exports = docente