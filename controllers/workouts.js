const db = require('../models')

//create a new workout wiht exercises associated
const newWorkout = (req, res) => {
    const { workoutType, workoutName } = req.body
    console.log(workoutType, workoutName)
    db.workout.create({
        workoutType,
        workoutName
    }).then(foundWorkout => {
        for (let i = 0; i < req.body.exercises.length; i++) {
            db.exercise.create({
                exerciseName: req.body.exercises[i].exerciseName,
                exerciseReps: req.body.exercises[i].exerciseReps
            })
                .then((data) => {
                    console.log("hellooooo")
                    console.log("hellooooo")
                    console.log("hellooooo")
                    console.log("hellooooo")
                    console.log("hellooooo")
                    console.log("hellooooo")
                    console.log("hellooooo")
                    console.log("hellooooo")
                    console.log("hellooooo")
                    console.log("hellooooo")
                    console.log(data)
                    foundWorkout.addExercise(data).then(relationInfo => {
                        console.log(`${data.exerciseName} was added to the workout: ${foundWorkout.workoutName}`);
                    });
                });
        }
        res.json({
            workoutId: foundWorkout.id
        });
    });
};

const findAllWorkouts = (req, res) => {
    db.workout.findAll({ include: [db.exercise] })
        .then(foundAllWorkouts => {
            if (!foundAllWorkouts)
                return res.json({
                    message: "No workouts found"
                });
            res.json({ AllWorkouts: foundAllWorkouts });
        })
        .catch(err => console.log(" error at findAllWorkouts", err));
}

const findWorkout = (req, res) => {
    db.workout.findByPk(1, { include: [db.exercise] })
        .then(function(workout) {
            workout.exercises.forEach(function(exercise) {
                console.log(exercise.exerciseName)
            })
        })
};


module.exports = {
    newWorkout,
    findAllWorkouts,
    findWorkout
}