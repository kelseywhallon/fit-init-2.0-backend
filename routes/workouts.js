const router = require("express").Router();
const ctrl = require("../controllers");

router.post("/workouts", ctrl.workouts.newWorkout);

module.exports = router;