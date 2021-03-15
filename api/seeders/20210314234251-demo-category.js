'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Categories', [
      {
        nome: 'Brinquedos',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Vestimentas',
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Alimentos',
        ativo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Bebidas',
        ativo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Categories', null, {});

  }
};
