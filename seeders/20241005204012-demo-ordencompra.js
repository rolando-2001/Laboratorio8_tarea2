'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar registros en la tabla 'OrdenCompra'
    await queryInterface.bulkInsert('OrdenCompras', [
      {
        fechaEmision: new Date('2024-10-05'),
        Situacion: 'Pendiente',
        Total: 250.50,
        CodLab: 1,
        NrofacturaProv: 'FAC12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fechaEmision: new Date('2024-09-15'),
        Situacion: 'Completada',
        Total: 150.75,
        CodLab: 2,
        NrofacturaProv: 'FAC12346',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Eliminar todos los registros de la tabla 'OrdenCompra'
    await queryInterface.bulkDelete('OrdenCompras', null, {});
  }
};
