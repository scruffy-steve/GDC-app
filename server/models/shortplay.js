'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shortplay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shortplay.init({
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
    }, },{
    sequelize,
    modelName: 'Shortplay',
    tableName: 'shortplays',
    timestamps: false
  });
  return Shortplay;
};