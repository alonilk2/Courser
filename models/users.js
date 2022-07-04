'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        users.hasMany(models.course)
        users.hasOne(models.students)
    }
  };
  users.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    active: DataTypes.INTEGER,
    token: DataTypes.STRING,
    newemail: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};