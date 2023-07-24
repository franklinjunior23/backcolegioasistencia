const express = require("express");
const cors = require('cors');
require('dotenv').config()
const PORT = process.env.PORT || 5000

const newLocal = "./routes/Docente.routes.js";
// traer rutas
const docente = require(newLocal);
const asistencia = require("./routes/Asistencia.routes");


// middleware configuracion 

app = express();
app.use(cors({
    origin:'*'
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// use rutas 
app.use('/api/',docente)
app.use('/api/',asistencia)




app.listen(PORT,()=>{
    console.log(`listening on port ${PORT} / http://localhost:${PORT}`)
})