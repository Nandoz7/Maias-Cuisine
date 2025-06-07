var quizModel = require("../models/quizModel");

function registrarPontuacao(req, res) {
    var pontuacao = req.body.pontuacao;
    var idUsuario = req.body.idUsuario;

    if (pontuacao === undefined || idUsuario === undefined) {
        res.status(400).send("Pontuação ou ID do usuário está indefinido!");
        return;
    }

    quizModel.registrarPontuacao(pontuacao, idUsuario)
        .then(resultado => {
            res.status(200).json({ mensagem: "Pontuação registrada com sucesso!" });
        })
        .catch(erro => {
            console.error("Erro ao registrar pontuação:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    registrarPontuacao
}