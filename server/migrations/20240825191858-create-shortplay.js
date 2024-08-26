'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shortplays', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      console: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING,
        allowNull: false
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shortplays');
  }
};