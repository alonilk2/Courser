'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tasks.belongsTo(models.course)
    }
  }
  tasks.init({
    name: DataTypes.STRING,
    filename: DataTypes.STRING,
    filesolutions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tasks',
  });
  return tasks;
};