"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Decks",
      [
        {
          name: "Методы массивов",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Города России",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Автомобили",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "История России",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Кино",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Decks", null, {});
  },
};
