const Docente = require('express').Router();
const { getDocentes, getDocente, posDocente , updaDocente ,deleteDocente,IniciarSeccion}= require('../controller/docente.controller')


Docente.get('/docentes',getDocentes)
Docente.get('/docente/:id',getDocente)
Docente.post('/docentes',posDocente)
Docente.put('/docente/:id',updaDocente)
Docente.delete('/docente/:id',deleteDocente)

Docente.post('/iniciarseccion',IniciarSeccion)

module.exports= Docente