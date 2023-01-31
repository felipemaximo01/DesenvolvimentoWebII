//fazendo importação do require
const express = require("express");
const router = require('./routes/index');
const mustache = require('mustache-express');

//configurações basicas do aplicativo
const app = express();

//foi passado 1 rota pois criamos apenas 1
app.use("/", router);

app.use(express.json());

app.engine('mst', mustache(__dirname +'/views/partials','.mst'));
app.set('view engine', 'mst');

app.set('views', __dirname + '/views', '.mst');

//exportamos o app
module.exports = app;