const { Docente, Asistencia } = require("../app/models/index");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
require("dotenv").config();
var jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
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
    const { nombre, usuario, password, curso } = req.body;
    const contraseña = bcrypt.hashSync(password, 4);

    const result = await Docente.create({
      id: faker.database.mongodbObjectId(),
      nombre,
      usuario: usuario,
      password: contraseña,
      curso,
    });
    res.json({ msg: "Usuario Creado exitosamente" });
  } catch (error) {
    res.json(error);
  }
};

const updaDocente = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, curso } = req.body;
    const result = await Docente.update(
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
  } catch (error) {
    res.status(404).json(error);
  }
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

const IniciarSesion = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;
    const data = await Docente.findOne({
      where: {
        usuario: { [Op.eq]: usuario },
      },
    });
    if (data) {
      const { password, id, nombre } = data;
      const verify = await bcrypt.compare(contraseña, password);
      if (verify == true) {
        const acess = jwt.sign({ data }, process.env.SECRET_KEY_JWT, {
          expiresIn: "2 days",
        });
        const user = {
          nombre,
          curso: data.curso,
        };
        return res.status(200).json({
          loged: true,
          token: acess,
          user,
        });
      }
    }
    return res.status(201).json({
      loged: false,
      msg: "Ingrese de manera sus datos",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error, msg: "Algo salio mal" });
  }
};

module.exports = {
  getDocentes,
  posDocente,
  getDocente,
  updaDocente,
  deleteDocente,
  IniciarSesion,
};
