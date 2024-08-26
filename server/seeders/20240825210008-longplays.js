'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('longplays', [
     {name: 'Lord of the Rings - Return of the King', console: 'GBA', poster: 'Steve'},
     {name: 'Final Fantasy X', console:'PS2', poster:'Steve'},
     {name:'Armored Core 3', console:"ps2", poster:"Steve"},
    
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('longplays', null, {})
  }

  
};

