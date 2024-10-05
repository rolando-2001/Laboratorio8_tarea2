'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleOrdenCompra extends Model {
    static associate(models) {
     
      DetalleOrdenCompra.belongsTo(models.OrdenCompra, {
        foreignKey: 'NroOrdenC',   
        as: 'orden'                
      });
    }
  }
  DetalleOrdenCompra.init({
    NroOrdenC: DataTypes.INTEGER,
    CodMedicamento: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    montouni: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'DetalleOrdenCompra',
  });
  return DetalleOrdenCompra;
};
