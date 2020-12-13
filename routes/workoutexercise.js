const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.workoutexercise.findAllExercises)
router.get("/:exerciseId", ctrl.workoutexercise.showOneExercise)
router.post("/", ctrl.workoutexercise.createExercise);

module.exports = router;