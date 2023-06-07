'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asistencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asistencia.belongsTo(models.Docente,{
        foreignKey:'id_docente',
        targetKey:'id'
      })
    }
  }
  Asistencia.init({
    id_docente: DataTypes.STRING,
    dia: DataTypes.STRING,
    h_entr: DataTypes.STRING,
    h_sali: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Asistencia',
  });
  return Asistencia;
};