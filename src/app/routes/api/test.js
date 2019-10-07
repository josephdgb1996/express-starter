const express = require("express");

const app = express.Router();

app.get('/get', function(req, res) {
    res.status(200).json({ ok: true });
});

module.exports = app;