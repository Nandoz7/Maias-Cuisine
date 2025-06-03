var database = require("../database/config");

// Consulta: Quantidade de postagens por usuário
function totalReceitasPorUsuario() {
    var instrucaoSql = `
        SELECT 
            u.nome AS nome, 
            COUNT(r.idReceita) AS total
        FROM 
            usuario u
        JOIN 
            receita r ON u.idUsuario = r.fkUsuario
        GROUP BY 
            u.nome
        ORDER BY 
            total DESC
            LIMIT 5;
    `;
    return database.executar(instrucaoSql);
}

// Consulta: Quantidade de postagens por hora
function totalReceitasPorHora() {
    var instrucaoSql = `
        SELECT 
            HOUR(r.dtPostagem) AS hora, 
            COUNT(*) AS total
        FROM 
            receita r
        GROUP BY 
            hora
        ORDER BY 
            hora;
    `;
    return database.executar(instrucaoSql);
}

function qtdPostagensPorUsuario(idUsuario) {
    var instrucaoSql = `
    SELECT COUNT(idReceita) as quantidadeDePostagem FROM receita WHERE fkUsuario =  ${idUsuario};`

    return database.executar(instrucaoSql);
}

module.exports = {
    totalReceitasPorUsuario,
    totalReceitasPorHora,
    qtdPostagensPorUsuario
};
