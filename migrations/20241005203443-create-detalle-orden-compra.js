'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DetalleOrdenCompras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NroOrdenC: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'OrdenCompras',   // Nombre de la tabla de referencia
          key: 'id'                // Clave primaria de OrdenCompra
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'         // Qué hacer al eliminar una OrdenCompra
      },
      CodMedicamento: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.FLOAT
      },
      montouni: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DetalleOrdenCompras');
  }
};
