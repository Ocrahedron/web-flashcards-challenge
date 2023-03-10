'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Card.belongsTo(models.Deck, { foreignKey: 'deck_id' });
    }
  }
  Card.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    deck_id: DataTypes.INTEGER,
    check: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};