'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Multiplayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Multiplayer.init({
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    console:{
       type: DataTypes.STRING
    },
    poster:{
     type: DataTypes.STRING,
     allowNull: false
    }, }, {
    sequelize,
    modelName: 'Multiplayer',
    tableName: 'multiplayers',
    timestamps: false
  });
  return Multiplayer;
};