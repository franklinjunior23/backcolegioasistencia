const Asistencia = require('express').Router();
// controlles llamar ; requiere ;

const { marcacionDocente , iniciarSeccion } =require('../controller/asistencia.controller')

Asistencia.post('/seccion',iniciarSeccion)
Asistencia.post('/marcacion/:id',marcacionDocente)



module.exports = Asistencia
