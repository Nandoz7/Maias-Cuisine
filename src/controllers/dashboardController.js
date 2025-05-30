var dashboardModel = require("../models/dashboardModel");

function getTotalReceitasPorUsuario(req, res) {
    dashboardModel.totalReceitasPorUsuario()
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(erro => {
            console.log(erro);
            console.log("Erro ao buscar total de receitas por usuário: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function getTotalReceitasPorHora(req, res) {
    dashboardModel.totalReceitasPorHora()
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(erro => {
            console.log(erro);
            console.log("Erro ao buscar total de receitas por hora: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    getTotalReceitasPorUsuario,
    getTotalReceitasPorHora
}
