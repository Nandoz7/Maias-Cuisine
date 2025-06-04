CREATE DATABASE MaiasCuisine;
USE MaiasCuisine;
DROP DATABASE MaiasCuisine;

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  senha VARCHAR(15) NOT NULL,
  dtCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL
);

INSERT INTO quiz (nome) VALUES ('QUIZ - COMIDAS BRASILEIRAS');

CREATE TABLE resultado_quiz(
idResultadoQuiz INT AUTO_INCREMENT,
pkUsuario INT,
fkQuiz INT,
pontuacao INT NOT NULL,
dtQuiz DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkUsuQuiz FOREIGN KEY (pkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT fkQuizUsu FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

SELECT (pontuacao)as pontuacao FROM resultado_quiz
WHERE fkQuiz = 1 AND pkUsuario = ${idUsuario}
ORDER BY dtQuiz DESC
LIMIT 1;

CREATE TABLE receita(
idReceita INT AUTO_INCREMENT,
fkUsuario INT,
titulo VARCHAR(100) NOT NULL,
pqGosta TEXT,
comoFazer TEXT,
dtPostagem DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkRecUsu FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT pkComposta PRIMARY KEY (idReceita, fkUsuario)
);

select count(idReceita) from receita where fkUsuario = 1;

CREATE TABLE curtida(
idCurtida INT AUTO_INCREMENT,
idUsuario INT,
idReceita INT,
fkUsuario INT,
dtCurtida DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkCurt FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT fkCurtidas FOREIGN KEY (idReceita, fkUsuario) REFERENCES receita(idReceita, fkUsuario),
CONSTRAINT pkComp PRIMARY KEY (idCurtida, idUsuario, idReceita, fkUsuario)
);

CREATE TABLE comentario(
idComentario INT AUTO_INCREMENT,
idUsuario INT,
idReceita INT,
fkUsuario INT,
texto TEXT,
dtComentario DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkCurtUsu FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT fkCurtRec FOREIGN KEY (idReceita, fkUsuario) REFERENCES receita(idReceita, fkUsuario),
CONSTRAINT pkComp PRIMARY KEY (idComentario, idUsuario, idReceita, fkUsuario)
);

select * from usuario;
select * from receita;
select * from curtida;
select * from comentario;
select * from quiz;
select * from usuario_quiz;