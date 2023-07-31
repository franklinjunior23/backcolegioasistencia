const axios = require('axios')

 async function obtenerFechaYHoraDeLima() {
  try {
    const response = await axios.get("http://worldtimeapi.org/api/timezone/America/Lima");
    const data = response.data;
    
    const fechaHoraLima = {
      fecha: data.datetime.slice(0, 10), // Obtener los primeros 10 caracteres (la fecha en formato "YYYY-MM-DD")
      hora: data.datetime.slice(11, 19), // Obtener los caracteres del 11 al 19 (la hora en formato "HH:MM:SS")
    };
    return fechaHoraLima;
  } catch (error) {
    
  }
}

module.exports=obtenerFechaYHoraDeLima