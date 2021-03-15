'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        nome: 'Bola',
        preco: 10,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Blusa',
        preco: 20,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Batata',
        preco: 10,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Whisk',
        preco: 100,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Vodka',
        preco: 100,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});

  }
};
