'use strict';
const csv = require('csvtojson');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const csvFilePath = 'src/db/data/cities-v2 - cities.csv';

    await queryInterface.bulkInsert(
      'cities'
      , await csv().fromFile(csvFilePath)
      , {}
    );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('cities', null, {});
  }
};
