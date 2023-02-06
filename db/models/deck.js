"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Deck.belongsTo(models.Round, { foreignKey: "deck_id" });
      Deck.hasMany(models.Card, { foreignKey: "deck_id" });
    }
  }
  Deck.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Deck",
    },
  );
  return Deck;
};
