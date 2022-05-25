SELECT * FROM usuarios WHERE idade = 8;

DELETE FROM  usuarios WHERE nome = "Lucas Ribeiro";

UPDATE usuarios SET nome = "Ribeiro Lucas" WHERE nome = "Lucas Ribeiro";

INSERT INTO usuarios (nome, email, idade) VALUES ("Lucas Ribeiro", 
"lucas@gmail.com", 38);

UPDATE usuarios SET idade = 38 WHERE nome ="RIbeiro Lucas";