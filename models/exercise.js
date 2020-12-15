'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.exercise.belongsToMany(models.workout, {
          through: "workout_exercise"
      })
    }
  };
  exercise.init({
    exerciseName: DataTypes.STRING,
    exerciseReps: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'exercise',
  });
  return exercise;
};