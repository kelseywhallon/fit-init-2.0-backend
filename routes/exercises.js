const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/exercises/", ctrl.exercises.getExercises);

module.exports = router;