require("dotenv").config();
const db = require("../models");
const axios = require("axios");

const exerciseApi = 'https://wger.de/api/v2/exercise/?language=2&limit=228'

const getExercises = (req, res) => {
    axios
        .get(exerciseApi)
        .then(response => res.json(response.data.results))
        .catch(error => console.error(error));
}

module.exports = { getExercises }