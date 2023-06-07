'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Docente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Docente.hasMany(models.Asistencia,{
        foreignKey:'id_docente'
      })
    }
  }
  Docente.init({
    usuario:DataTypes.STRING,
    nombre: DataTypes.STRING,
    password: DataTypes.STRING,
    curso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Docente',
  });
  return Docente;
};