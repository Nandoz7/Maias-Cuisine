var express = require("express");
var router = express.Router();

var receitaController = require("../controllers/receitaController");

router.get("/listar", function (req, res) {
    receitaController.listar(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    receitaController.publicar(req, res); 
});

router.put("/editar/:idReceita", function (req, res) {
    receitaController.editar(req, res);
});

router.delete("/deletar/:idReceita", function (req, res) {
    receitaController.deletar(req, res);
});

module.exports = router;