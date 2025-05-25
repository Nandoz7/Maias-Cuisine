const database = require("../database/config");

function postagensPorUsuario() {
    const instrucaoSql = `
        SELECT u.nome, COUNT(r.idReceita) AS total
        FROM usuario u
        LEFT JOIN receita r ON u.idUsuario = r.fkUsuario
        GROUP BY u.idUsuario;
    `;
    return database.executar(instrucaoSql);
}

function postagensPorMes() {
    const instrucaoSql = `
        SELECT DATE_FORMAT(dtPostagem, '%Y-%m') AS mes, COUNT(*) AS total
        FROM receita
        GROUP BY mes
        ORDER BY mes;
    `;
    return database.executar(instrucaoSql);
}

function topUsuarios() {
    const instrucaoSql = `
        SELECT u.nome, COUNT(r.idReceita) AS total
        FROM usuario u
        JOIN receita r ON u.idUsuario = r.fkUsuario
        GROUP BY u.idUsuario
        ORDER BY total DESC
        LIMIT 5;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    postagensPorUsuario,
    postagensPorMes,
    topUsuarios
};
