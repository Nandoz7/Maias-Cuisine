var database = require("../database/config");

function totalReceitasPorUsuario() {
    var instrucaoSql = `
        SELECT u.nome, COUNT(r.idReceita) AS totalReceitas
        FROM usuario u
        LEFT JOIN receita r ON u.idUsuario = r.fkUsuario
        GROUP BY u.idUsuario
        ORDER BY totalReceitas DESC
        LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalReceitasPorHora() {
    var instrucaoSql = `
        SELECT HOUR(r.dataHora) AS hora, COUNT(*) AS totalReceitas
        FROM receita r
        GROUP BY hora
        ORDER BY hora;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    totalReceitasPorUsuario,
    totalReceitasPorHora
}
