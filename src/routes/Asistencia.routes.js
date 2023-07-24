const Asistencia = require('express').Router();
// controlles llamar ; requiere ;

const { marcacionDocente  } =require('../controller/asistencia.controller')

Asistencia.post('/marcacion/:id',marcacionDocente)



module.exports = Asistencia
