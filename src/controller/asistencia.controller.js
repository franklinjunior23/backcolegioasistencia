const { hr } = require("@faker-js/faker");
const { Asistencia, Docente } = require("../app/models/index");

const fechadia = () => {
  //funcion para sacar el dia por ejemplo 31/05 / primero el dia y el otro el mes
  const date = new Date();
  // Obtener el día y asegurar que tenga 2 dígitos
  const day = String(date.getDate()).padStart(2, "0");
  // Obtener el mes y asegurar que tenga 2 dígitos
  const month = String(date.getMonth() + 1).padStart(2, "0");

  const fechadia = `${day}/${month}`;
  return fechadia;
};

const horadia = () => {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  // Convertir a formato de 12 horas
  hours = hours % 12;
  hours = hours ? hours : 12; // Si las horas son 0, establecerlas como 12

  // Asegurar que los minutos tengan 2 dígitos
  minutes = String(minutes).padStart(2, "0");
  const horadeldia = `${hours}:${minutes} ${ampm}`;
  return horadeldia;
};

const marcacionDocente = async (req, res) => {
  try {
    const fecha_hoy = fechadia();
    const hora_actual = horadia();
    const id = req.params.id;
    const busqueda = await Asistencia.findAll({
      where: {
        id_docente: id,
      },
    });
    const busqueda_actual = await Asistencia.findAll({
        where: {
          id_docente: id,
          dia: fecha_hoy,
        },
      });

    if (busqueda == "") {
      const result = await Asistencia.create({
        id_docente: id,
        dia: fecha_hoy,
        h_entr: hora_actual,
      });

      res.json({ msg: "Entrada Registrada correctamente" });
    } else {
     
      if (busqueda_actual == "") {
        const result = await Asistencia.create({
          id_docente: id,
          dia: fecha_hoy,
          h_entr: hora_actual,
        });
        res.json({ msg: "Entrada Registrada Correctamente" });
      } else {
        const hr_sali =busqueda_actual[0].dataValues.h_sali
        if ( hr_sali == undefined || hr_sali == "" ) {
            const result = await Asistencia.update(
                {
                  h_sali: hora_actual,
                },
                {
                  where: {
                    id_docente: id,
                    dia: fecha_hoy,
                  },
                }
              );
              res.json({ msg: "Salida resistrada Correctamente" });
            
          
        } else {
           
            res.json({ msg: "Ya registro su salida , espere para mañana" });
        }
      }
    }
  } catch (error) {
    res.json({
      error:
        "Error al registrar el ingreso comunique al personal si sigue fallando",
    });
  }
};


const iniciarSeccion = async(req, res) =>{
  const bad = req.body;
  res.status(202).json(bad)

}

module.exports = { marcacionDocente , iniciarSeccion};
