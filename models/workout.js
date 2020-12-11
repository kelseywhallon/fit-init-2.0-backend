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
    }
  };
  workout.init({
    exerciseCategory: DataTypes.STRING,
    exerciseName: DataTypes.STRING,
    exerciseReps: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'workout',
  });
  return workout;
};