'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class diets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  diets.init({
    name: { type: DataTypes.STRING }
  }, {
    sequelize,
    modelName: 'diets',
    timestamps: false
  });
  return diets;
};