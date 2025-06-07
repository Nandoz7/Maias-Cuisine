var receitaModel = require("../models/receitaModel");

function listar(req, res) {
    receitaModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as receitas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function publicar(req, res) {
    var titulo = req.body.titulo;
    var pqGosta = req.body.pqGosta;
    var comoFazer = req.body.comoFazer;
    var fkUsuario = req.params.idUsuario;
    

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (pqGosta == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (fkUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        receitaModel.publicar(titulo, pqGosta, comoFazer, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var titulo = req.body.titulo;
    var comoFazer = req.body.comoFazer;
    var pqGosta = req.body.pqGosta;
    var idReceita = req.params.idReceita;

    receitaModel.editar(titulo, pqGosta, comoFazer, idReceita)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var idReceita = req.params.idReceita;
    console.log('Vai corinthians' + idReceita)

    receitaModel.deletar(idReceita)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    publicar,
    editar,
    deletar
}