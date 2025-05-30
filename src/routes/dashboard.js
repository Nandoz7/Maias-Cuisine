var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.get("/topUsuarios", function (req, res) {
    dashboardController.getTotalReceitasPorUsuario(req, res);
});

router.get("/receitasPorHora", function (req, res) {
    dashboardController.getTotalReceitasPorHora(req, res);
});

module.exports = router;
