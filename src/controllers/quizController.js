const { useDebugValue } = require("react");
var quizModel = require("../models/quizModel");

function registrarPontuacao(req, res) {

    // resposta.pontuacao / 10 * 100

    quizModel.registrarPontuacao(pontuacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao tentar registrar a pontuação! Erro: ",
                    erro.sqlMessagem
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}

module.exports = {
    registrarPontuacao
}