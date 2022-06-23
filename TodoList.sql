DROP DATABASE IF EXISTS TodoList;

CREATE DATABASE TodoList;

USE TodoList;

CREATE TABLE tasks (
    id INT NOT NULL auto_increment,
    title varchar(30) NOT NULL,
    status VARCHAR(30) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(500),
    PRIMARY KEY(id)
);

INSERT INTO TodoList.tasks (title, status, created_at, description) VALUES
    ('manutenção','pendente', NOW(), 'realizar manutenção na maquina'),
    ('limpeza','andamaneto', NOW(), 'desentupir os canos'),
    ('atendimento','pronto', NOW(), 'atender os clientes de empresa x');