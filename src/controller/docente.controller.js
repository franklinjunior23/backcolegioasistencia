const { Docente, Asistencia } = require("../app/models/index");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const getDocentes = async (req, res) => {
  try {
    const result = await Docente.findAll();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};
const getDocente = async (req, res) => {
  const id = req.params.id;
  const result = await Docente.findAll({
    include: {
      model: Asistencia,
    },
    where: {
      id: id,
    },
  });

  res.json(result);
};
const posDocente = async (req, res) => {

  try {
    const { nombre, password, curso } = req.body;
    const contraseña = bcrypt.hashSync(password, 4);
  
    const result = await Docente.create({
      id: faker.database.mongodbObjectId(),
      nombre,
      password: contraseña,
      curso,
    });
    res.json({ msg: "Usuario Creado exitosamente" });
  } catch (error) {
    res.json(error)
  }
 
};

const updaDocente = async (req, res) => {
  const id = req.params.id;
  const { nombre, curso } = req.body;
  const result = Docente.update(
    {
      nombre,
      curso,
    },
    {
      where: {
        id,
      },
    }
  );
  res.json({ msg: "Se actualizo de manera correcta" });
};

const deleteDocente = async (req, res) => {
  const id = req.params.id;
  const result = await Docente.destroy({
    where: {
      id,
    },
  });
  res.json({ msg: "Docente borrado correctamente" });
};

const IniciarSeccion = async (req, res) => {
  const { usuario, contraseña } = req.body;
  const data = await Docente.findAll({
    where: {
      usuario,
    },
  });
  if (data.length == 0) {
    res.status(201).json({ msg: "Ingrese de manera correcta sus datos" });
  } else {
    const { password, id, nombre } = data[0].dataValues;
    const verify = await bcrypt.compare(contraseña, password);
    if (verify == true) {
      res
        .status(200)
        .json({ msg: "Datos Correctos", persona: id, nombre: nombre });
        console.log("usuario correcto .")
    } else {
      res.status(201).json({ msg: "Ingrese de manera correcta su contraseña" });
    }
  }
};

module.exports = {
  getDocentes,
  posDocente,
  getDocente,
  updaDocente,
  deleteDocente,
  IniciarSeccion,
};
