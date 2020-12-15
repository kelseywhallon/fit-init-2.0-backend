const db = require('../models')

//create a new workout wiht exercises associated
const newWorkout = (req, res) => {
    const { workoutType, workoutName } = req.body
    console.log(workoutType, workoutName)
    db.workout.create({
        workoutType, 
        workoutName
    }).then(foundWorkout => {
        // console.log(req.body.exercises[0].exerciseName)
        // console.log("req.body", req.body.exercises[i])
        for (let i = 0; i < req.body.exercises.length; i++) {
            db.exercise.create({ 
                exerciseName: req.body.exercises[i].exerciseName,
                // exerciseReps: req.body.exerciseReps[i],
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
                    console.log(`${data.exerciseName} was added to the workout: ${foundWorkout.name}`);
                });
            });
        }
            res.json({ 
                workoutId: foundWorkout.id
            });
    });
};

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
                    if (!foundAllWorkouts)
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