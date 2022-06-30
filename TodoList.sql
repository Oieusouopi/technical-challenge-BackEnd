DROP DATABASE IF EXISTS TodoList;

CREATE DATABASE TodoList;

USE TodoList;

CREATE TABLE tasks (
    id INT NOT NULL auto_increment,
    title varchar(30) NOT NULL,
    status VARCHAR(30) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
    description VARCHAR(500) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO TodoList.tasks (title, status, description) VALUES
    ('manutenção','pendente', 'realizar manutenção na maquina'),
    ('limpeza','andamaneto', 'desentupir os canos'),
    ('atendimento','pronto', 'atender os clientes de empresa x'),
    ('atendimento', 'pronto', 'organizar as mesas');