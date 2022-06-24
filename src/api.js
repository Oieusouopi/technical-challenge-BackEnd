const express = require('express');
const router = require('../router/router');

const app = express();

app.use(express.json());

app.use(router);

app.use((error, __req, res, __next) => {
  if (error.code) res.status(error.code).json({message: error.message});
  res.status(500).json({message: error.message});
});

module.exports = app;
