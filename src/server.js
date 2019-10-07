if (process.env.NODE_ENV == 'production') require('dotenv').config({ path: './src/.env' });

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_HOST = process.env.SERVER_HOST || "127.0.0.1";
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/myapp_test"

const express = require("express");
const mongoose = require("mongoose");
const http = require('http');
const cors = require("cors");

const app = express();
const router = require("./app/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", router);

http.createServer(app).listen(SERVER_PORT, SERVER_HOST, () => {
    console.log("Server is now running in " + process.env.NODE_ENV);
});

mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
    if (error) console.log(error);
    console.log("mongodb connected!");
});