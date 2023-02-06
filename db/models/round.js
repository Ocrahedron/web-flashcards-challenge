"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Round.belongsTo(models.User, { foreignKey: "user_id" });
      Round.hasOne(models.Deck, { foreignKey: "deck_id" });
    }
  }
  Round.init(
    {
      date: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      deck_id: DataTypes.INTEGER,
      firstAnswer: DataTypes.INTEGER,
      allAnswers: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Round",
    },
  );
  return Round;
};
