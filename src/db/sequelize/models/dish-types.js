'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dishTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dishTypes.init({
    name: { type: DataTypes.STRING }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'dish-types',
  });
  return dish - types;
};