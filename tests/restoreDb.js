require('dotenv').config();
const Importer = require('mysql-import/mysql-import');
const path = require('path');

const restoreDb = async () => {
  const importer = new Importer({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  await importer.import(path.join(__dirname, '..', 'TodoList.sql'));

  await importer.disconnect();
};

restoreDb();

module.exports = restoreDb;
