'use strict';
const csv = require('csvtojson');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const csvFilePath = 'src/db/data/brands-v2 - brands.csv';

    await queryInterface.bulkInsert(
      'brands'
      , await csv().fromFile(csvFilePath)
      , {}
    );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('brands', null, {});
  }
};
