const db = require('../models')

const createExercise = (req, res) => {
    const { exerciseId, exerciseName } = req.body
    
    db.exercise.create({
        exerciseId,
        exerciseName
    }).then(newExercise => {
        console.log("New exercise was added!")
        res.json(newExercise)
    })
    
}
// const showAllExercises

// const showExercise

module.exports = { createExercise }