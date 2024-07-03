'use strict';
const csv = require('csvtojson');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const csvFilePath = 'src/db/data/dish-types-v2 - dish-types.csv';

    await queryInterface.bulkInsert(
      'dish-types'
      , await csv().fromFile(csvFilePath)
      , {}
    );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('dish-types', null, {});
  }
};
