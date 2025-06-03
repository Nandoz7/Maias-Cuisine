var dashboardModel = require("../models/dashboardModel");

function totalReceitasPorUsuario(req, res) {
    dashboardModel.totalReceitasPorUsuario()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log("Erro ao buscar dados por usuário:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function totalReceitasPorHora(req, res) {
    dashboardModel.totalReceitasPorHora()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log("Erro ao buscar dados por hora:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function qtdPostagensPorUsuario(req, res) {
    var idUser = req.params.idUsuario
    dashboardModel.qtdPostagensPorUsuario(idUser)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log("Erro ao buscar dados por usuário:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    totalReceitasPorUsuario,
    totalReceitasPorHora,
    qtdPostagensPorUsuario
}