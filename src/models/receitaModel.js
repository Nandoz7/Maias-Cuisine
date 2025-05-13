var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            r.idReceita AS idReceita,
            r.titulo,
            r.pqGosta,
            r.comoFazer,
            r.fkUsuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM receita r
            INNER JOIN usuario u
                ON r.fkUsuario = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarReceita(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarReceita()");
    var instrucaoSql = `
        SELECT 
            r.idReceita AS idReceita,
            r.titulo,
            r.pqGosta,
            r.comoFazer,
            r.fkUsuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM receita r
            INNER JOIN usuario u
                ON r.fkUsuario = u.idUsuario
        WHERE r.titulo LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            r.idReceita AS idReceita,
            r.titulo,
            r.pqGosta,
            r.comoFazer,
            r.fkUsuario,
            u.idUsuario AS idUsuario,  
            u.nome,
            u.email,
            u.senha
        FROM receita r
            INNER JOIN usuario u
                ON r.fkUsuario = u.idUsuario
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, pqGosta, comoFazer, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, pqGosta, comoFazer, idUsuario);
    var instrucaoSql = `
        INSERT INTO aviso (titulo, pqGosta, comoFazer, fkUsuario) VALUES ('${titulo}', '${pqGosta}', '${comoFazer}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaReceita, idReceita) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaReceita, idReceita);
    var instrucaoSql = `
        UPDATE receita SET comoFazer = '${novaReceita}' WHERE id = ${idReceita};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idReceita) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idReceita);
    var instrucaoSql = `
        DELETE FROM receita WHERE idReceita = ${idReceita};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarReceita,
    publicar,
    editar,
    deletar
}
