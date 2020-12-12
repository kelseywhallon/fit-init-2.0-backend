const router = require("express").Router();
const ctrl = require("../controllers");

// router.get("/", ctrl.workoutexercise.showAllExercises)
// router.get("/:exerciseId", ctrl.workoutexercise.showExercise)
router.post("/", ctrl.workoutexercise.createExercise);

module.exports = router;