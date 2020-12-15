const db = require('../models')

const createExercise = (req, res) => {
    const { exerciseName, exerciseReps } = req.body
    
    db.exercise.create({
        exerciseName,
        exerciseReps
    }).then(newExercise => {
        console.log("New exercise was added!")
        res.json(newExercise)
    })
    
}
// const showAllExercises
const findAllExercises = (req, res) => {
    db.exercise.findAll().then(foundAll => {
        if(!foundAll)
            return res.json({
                message: "No exercises found"
            });
        res.json({AllExercises: foundAll });
    })
    .catch(err => console.log("Error at findAllExercises", err))
}

// show one exercise at id 
const showOneExercise = (req, res) => {
    db.exercise
        .findByPk(req.params.id)
        .then(foundExercise => {
            if(!foundExercise)
            return res.json({ 
                message: "Exercise at ID not found."
            });
            res.json({ exercise: foundExercise });
        })
        .catch(err => console.log("Error at exercise#index", err));
}


module.exports = { 
    createExercise, 
    findAllExercises,
    showOneExercise
}