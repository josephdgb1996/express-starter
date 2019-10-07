require('dotenv').config({ path: './src/.env' });

const express = require("express");
const mongoose = require("mongoose");
const http = require('http');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const Router = require("./app/routes");
new Router(app);

http.createServer(app).listen(3000, "127.0.0.1", () => {
    console.log("Server is now running in " + process.env.NODE_ENV);
});

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
    if (error) console.log(error);
    console.log("mongodb connected!");
});