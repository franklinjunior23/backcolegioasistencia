const Asistencia = require('express').Router();

const AuthLog = require('../app/middlewares/Auth');
// controlles llamar ; requiere ;

const { marcacionDocente, VerificarAsistencia ,MarcacionesDocentes } =require('../controller/asistencia.controller')

Asistencia.post('/marcacion',AuthLog,marcacionDocente)
Asistencia.get('/asistencias',AuthLog,MarcacionesDocentes)
Asistencia.post('/docente',AuthLog,VerificarAsistencia)


module.exports = Asistencia
