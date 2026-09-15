'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
    servico.init({
  id_servico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: DataTypes.DATE,
  descricao_problema: DataTypes.STRING,
  valor: DataTypes.FLOAT,
}, {
  sequelize,
  modelName: 'servico',
  tableName: 'servico',
  timestamps: false,
});
  return servico;
};