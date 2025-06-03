var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

// Rota para gráfico: Quantidade de postagens por usuário
router.get("/quantidadePorUsuarios", function (req, res) {
    dashboardController.totalReceitasPorUsuario(req, res);
});

// Rota para gráfico: Quantidade de postagens por hora
router.get("/receitasPorHora", function (req, res) {
    dashboardController.totalReceitasPorHora(req, res);
});

router.get("/qtdPostagensPorUsuario/:idUsuario", function(req, res) {
    dashboardController.qtdPostagensPorUsuario(req, res);
});

module.exports = router;
