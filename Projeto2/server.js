const { default: mongoose } = require("mongoose");
const app = require("./app");



require('dotenv').config({path: 'variables.env'});
/*
//conexão banco de dados
mongoose.connect(process.env.DATABASE, {useNewUrlParser : true, useUnifiedTopology : true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
    console.error("ERROR: "+ error.message);
});
mongoose.set('strictQuery', false);*/

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get("port"),()=>{
    console.log("Servidor Rodando na porta: " + server.address().port);
});