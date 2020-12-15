const { workoutexercise } = require('../routes');

module.exports = {
    auth: require('./auth'),
    users: require("./users"),
    exercises: require("./exercises"),
    workouts: require("./workouts"),
    // workoutexercise: require("./workoutexercise")
};
