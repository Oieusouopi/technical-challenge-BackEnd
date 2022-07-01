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
    ('manutenção','Pendente', 'realizar manutenção na maquina'),
    ('limpeza','Em Andamaneto', 'desentupir os canos'),
    ('atendimento','Sucesso', 'atender os clientes de empresa x'),
    ('atendimento', 'Sucesso', 'organizar as mesas');