/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      user_id: {

        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
      },
      deck_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Decks', key: 'id' },
      },
      firstAnswer: {
        type: Sequelize.INTEGER,
      },
      allAnswers: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rounds');
  },
};
