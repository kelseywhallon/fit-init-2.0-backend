const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.workouts.findAllWorkouts)
router.get("/:workoutId", ctrl.workouts.findWorkout)
router.post("/", ctrl.workouts.newWorkout);

module.exports = router;