'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.workout.belongsToMany(models.user, {
        through: "user_workout"
      });
      models.workout.belongsToMany(models.exercise, {
        through: "workout_exercise"
      });
    }
  };
  workout.init({
    workoutType: DataTypes.STRING,
    workoutName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'workout',
  });
  return workout;
};