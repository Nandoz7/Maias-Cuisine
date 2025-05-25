const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/postagens-por-usuario", dashboardController.listarPostagensPorUsuario);
router.get("/postagens-por-mes", dashboardController.listarPostagensPorMes);
router.get("/top-usuarios", dashboardController.listarTopUsuarios);

module.exports = router;