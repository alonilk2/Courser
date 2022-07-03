'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      students.belongsToMany(models.course, {through: 'students-course'})
      students.belongsTo(models.users)
    }
  }
  students.init({
    name: DataTypes.STRING,
    idnumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};