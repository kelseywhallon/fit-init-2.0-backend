const db = require('../models')

const newWorkout = (req, res) => {
    const { exerciseCategory, exerciseName, exerciseReps } = req.body
    
    db.workout.create({
        exerciseCategory,
        exerciseName,
        exerciseReps
    }).then(newWorkout => {
        console.log('New workout added!')
        res.json(newWorkout)
    })
}

module.exports = { newWorkout }