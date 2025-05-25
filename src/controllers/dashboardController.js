const dashboardModel = require("../models/dashboardModel");

function listarPostagensPorUsuario(req, res) {
    dashboardModel.postagensPorUsuario()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro);
        });
}

function listarPostagensPorMes(req, res) {
    dashboardModel.postagensPorMes()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro);
        });
}

function listarTopUsuarios(req, res) {
    dashboardModel.topUsuarios()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    listarPostagensPorUsuario,
    listarPostagensPorMes,
    listarTopUsuarios
};
