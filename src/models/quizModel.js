var database = require("../database/config")

function registrarPontuacao(pontuacao) {
    console.log("Acessei o quiz model")
    var instrucaoSql = `
    SELECT pontuacao AS pontuacao FROM resultado_quiz WHERE fkQuiz = 1 AND pkUsuario = ${idUsuario};`

    return database.executar(instrucaoSql);
}

module.exports = {
    registrarPontuacao
};