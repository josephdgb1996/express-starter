const express = require("express");
const app = express.Router();

const test = require('./api/test');

app.use('/test', test);

module.exports = app;