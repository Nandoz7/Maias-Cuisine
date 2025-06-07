var database = require("../database/config")

function registrarPontuacao(pontuacao, idUsuario) {
    console.log("Acessando quizModel")
    var instrucaoSql = `
    INSERT INTO resultado_quiz (pkUsuario, fkQuiz, pontuacao) VALUES
    (${idUsuario}, 1, ${pontuacao});`

    return database.executar(instrucaoSql);
}

module.exports = {
    registrarPontuacao
};