'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar registros en la tabla 'DetalleOrdenCompra'
    await queryInterface.bulkInsert('DetalleOrdenCompras', [
      {
        NroOrdenC: 1,
        CodMedicamento: 101,
        descripcion: 'Paracetamol 500mg',
        cantidad: 10,
        precio: 5.00,
        montouni: 50.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NroOrdenC: 1,
        CodMedicamento: 102,
        descripcion: 'Ibuprofeno 200mg',
        cantidad: 5,
        precio: 3.00,
        montouni: 15.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NroOrdenC: 2,
        CodMedicamento: 103,
        descripcion: 'Amoxicilina 500mg',
        cantidad: 8,
        precio: 7.00,
        montouni: 56.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Eliminar todos los registros de la tabla 'DetalleOrdenCompra'
    await queryInterface.bulkDelete('DetalleOrdenCompras', null, {});
  }
};
