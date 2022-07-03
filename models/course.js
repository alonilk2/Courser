'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      course.belongsToMany(models.students, {through: 'students-course'})
      course.belongsTo(models.users)
    }
  }
  course.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};