const express = require("express");
const app = express.Router();

const controller = require('../../controllers/test');

app.get('/get', controller.get);

module.exports = app;