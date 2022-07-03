'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class grades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      grades.belongsTo(models.students)
      grades.belongsTo(models.course)
    }
  }
  grades.init({
    grade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'grades',
  });
  return grades;
};