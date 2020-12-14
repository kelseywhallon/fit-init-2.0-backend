'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workout_exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  workout_exercise.init({
    workoutId: DataTypes.INTEGER,
    exerciseId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'workout_exercise',
  });
  return workout_exercise;
};