'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cliente.init({
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: DataTypes.STRING,
  cpf: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'cliente',
  tableName: 'cliente',
  timestamps: false,
});
  return cliente;
};