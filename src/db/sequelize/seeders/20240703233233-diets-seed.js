'use strict';
const csv = require('csvtojson');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const csvFilePath = 'src/db/data/diets-v2 - diets.csv';

    await queryInterface.bulkInsert(
      'diets'
      , await csv().fromFile(csvFilePath)
      , {}
    );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('diets', null, {});
  }
};
