CREATE DATABASE MaiasCooking;
USE MaiasCooking;
DROP DATABASE MaiasCooking;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
senha VARCHAR(15) NOT NULL,
dtCadastro DATETIME
);
INSERT INTO usuario (nome, email, senha, dtCadastro) VALUES
('Luis Fernando Maia Augusto', 'luisfernando@gmail.com', 'luis2005', '2025-09-18 18:00:00'),
('Memphis Depay', 'memphisdepay@gmail.com', 'depay1910', '2024-08-10 22:50:33'),
('Hugo Souza', 'neneca@gmail.com', 'nenecaGoleiro', '2024-05-02 12:35:40'),
('Dorival Junior', 'dorivaltecnico@gmail.com', 'tecDorival1910', '2025-04-25 09:50:55');
SELECT * FROM usuario;

CREATE TABLE receita(
idReceita INT AUTO_INCREMENT,
fkUsuario INT,
titulo VARCHAR(100) NOT NULL,
pqGosta TEXT,
ingredientes TEXT,
modoPreparo TEXT,
dtPostagem DATETIME,
CONSTRAINT fkRecUsu FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT pkComposta PRIMARY KEY (idReceita, fkUsuario)
);
INSERT INTO receita(fkUsuario, titulo, pqGosta, ingredientes, modoPreparo, dtPostagem) VALUES
('1', 'Pudim de Maracujá', 'É meu doce favorito pois criei uma amor enorme vendo minha mãe fazer, fazia me senitr vivo quando via ela fazendo com amor', 'Você vai precisar de uma lata de leite condensado, a mesma medida (uma lata) de suco concentrado de maracujá, uma lata de leite integral (pode usar a própria lata de leite condensado como medida), três ovos inteiros e, para a calda, uma xícara de açúcar e meia xícara de água.', 'Comece preparando a calda: em uma panela em fogo baixo, derreta o açúcar até ele virar um caramelo dourado, depois adicione com cuidado a água (vai borbulhar bastante) e mexa até tudo se dissolver, formando uma calda brilhante. Despeje essa calda no fundo de uma forma para pudim, espalhando bem nas laterais e reserve. No liquidificador, coloque o leite condensado, o suco de maracujá, o leite e os ovos. Bata tudo por cerca de dois a três minutos até ficar bem homogêneo. Despeje essa mistura na forma já caramelizada, cubra com papel-alumínio e leve ao forno preaquecido a 180 °C, em banho-maria, por cerca de uma hora e vinte minutos, ou até o pudim firmar (você pode testar com um palito: se sair limpo, está pronto). Espere esfriar, leve à geladeira por pelo menos quatro horas e desenforme com cuidado. Sirva gelado.', '2025-09-18 18:50:30');
SELECT * FROM receita;

SELECT u.nome as 'Nome do Cozinheiro',
u.dtCadastro as 'Quando fez o cadastro no site',
r.titulo as 'Nome da receita que postou',
r.dtPostagem as 'Quando postou a receita'
FROM usuario as u join receita as r on u.idUsuario = r.fkUsuario;

CREATE TABLE curtida(
idCurtida INT,
idUsuario INT,
idReceita INT,
fkUsuario INT,
dtCurtida DATETIME,
CONSTRAINT fkCurt FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT fkCurtidas FOREIGN KEY (idReceita, fkUsuario) REFERENCES receita(idReceita, fkUsuario),
CONSTRAINT pkComp PRIMARY KEY (idCurtida, idUsuario, idReceita, fkUsuario)
);

CREATE TABLE comentario(
idComentario INT,
idUsuario INT,
idReceita INT,
fkUsuario INT,
texto TEXT,
dtComentario DATETIME,
CONSTRAINT fkCurtUsu FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT fkCurtRec FOREIGN KEY (idReceita, fkUsuario) REFERENCES receita(idReceita, fkUsuario),
CONSTRAINT pkComp PRIMARY KEY (idComentario, idUsuario, idReceita, fkUsuario)
);