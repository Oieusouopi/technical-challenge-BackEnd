DROP DATABASE IF EXISTS TodoList;

CREATE DATABASE TodoList;

USE TodoList;

CREATE TABLE tasks (
    id INT NOT NULL auto_increment,
    status VARCHAR(30) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(500),
    PRIMARY KEY(id)
);

INSERT INTO TodoList.tasks (status, created_at, description) VALUES
    ('pendente', NOW(), 'realizar manutenção na maquina'),
    ('andamaneto', NOW(), 'desentupir os canos'),
    ('pronto', NOW(), 'atender os clientes de empresa x');