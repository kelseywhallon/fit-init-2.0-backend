const db = require('../models')

const newWorkout = (req, res) => {
    const { exerciseName, exerciseCategory, exerciseReps } = req.body
    
    db.workout.create({
        exerciseName,
        exerciseCategory,
        exerciseReps
    }).then(newWorkout => {
        console.log('New workout added!')
        res.json(newWorkout)
    })
}

const findWorkout = (req, res) => {
    db.workout
        .findByPk(req.params.id)
        .then(foundWorkout => {
            if (!foundWorkout)
                return res.json({
                    message: "Workout with provided ID not found."
                });
            res.json({ workout: foundWorkout });
        })
        .catch(err => console.log("Error at workout#index", err));
}

const findAllWorkouts = (req, res) => {
    db.workout.findAll()
        .then(foundAllWorkouts => {
            if(!foundAllWorkouts)
                return res.json({
                    message: "No workouts found"
                });
            res.json({ AllWorkouts: foundAllWorkouts });
        })
        .catch(err => console.log(" error at findAllWorkouts", err));
}



module.exports = { 
    newWorkout, 
    findAllWorkouts, 
    findWorkout 
}