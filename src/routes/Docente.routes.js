const Docente = require('express').Router();
import { getDocentes, getDocente, posDocente, updaDocente, deleteDocente, IniciarSeccion } from '../controller/docente.controller';


Docente.get('/docentes',getDocentes)
Docente.get('/docente/:id',getDocente)git 
Docente.post('/docentes',posDocente)
Docente.put('/docente/:id',updaDocente)
Docente.delete('/docente/:id',deleteDocente)

Docente.post('/iniciarseccion',IniciarSeccion)

export default Docente