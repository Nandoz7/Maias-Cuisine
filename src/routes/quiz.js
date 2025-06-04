var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/registrarPontuacao", function (req, res) {
    quizController.registrarPontuacao(req, res);
});

module.exports = router;