DROP DATABASE IF EXISTS TodoList;

CREATE DATABASE TodoList;

USE TodoList;

CREATE TABLE tasks (
    id INT NOT NULL auto_increment,
    responsible_user VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    status VARCHAR(30) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
    description VARCHAR(500) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO TodoList.tasks (title,responsible_user, status, description) VALUES
    ('manutenção', 'Rafael Carvalho','Pendente', 'realizar manutenção na maquina'),
    ('limpeza', 'Angela Santos','Em Andamaneto', 'desentupir os canos'),
    ('atendimento', 'Larissa Flora','Sucesso', 'atender os clientes de empresa x'),
    ('atendimento', 'Helen Rodrigues','Sucesso', 'organizar as mesas');