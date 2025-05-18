CREATE DATABASE MaiasCuisine;
USE MaiasCuisine;

CREATE TABLE usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  senha VARCHAR(15) NOT NULL,
  dtCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE receita(
idReceita INT AUTO_INCREMENT,
fkUsuario INT,
titulo VARCHAR(100) NOT NULL,
pqGosta TEXT,
comoFazer TEXT,
dtPostagem DATETIME,
CONSTRAINT fkRecUsu FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT pkComposta PRIMARY KEY (idReceita, fkUsuario)
);

CREATE TABLE curtida(
idCurtida INT,
idUsuario INT,
idReceita INT,
fkUsuario INT,
dtCurtida DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
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
dtComentario DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
CONSTRAINT fkCurtUsu FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT fkCurtRec FOREIGN KEY (idReceita, fkUsuario) REFERENCES receita(idReceita, fkUsuario),
CONSTRAINT pkComp PRIMARY KEY (idComentario, idUsuario, idReceita, fkUsuario)
);

select * from usuario;