'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdenCompra extends Model {
    static associate(models) {
      
      OrdenCompra.hasMany(models.DetalleOrdenCompra, {
        foreignKey: 'NroOrdenC',   
        as: 'detalles'             
      });
    }
  }
  OrdenCompra.init({
    fechaEmision: DataTypes.DATE,
    Situacion: DataTypes.STRING,
    Total: DataTypes.FLOAT,
    CodLab: DataTypes.INTEGER,
    NrofacturaProv: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrdenCompra',
  });
  return OrdenCompra;
};
