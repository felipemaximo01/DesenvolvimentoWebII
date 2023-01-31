//carrega o modulo htttp
const http = require('http');

//cria servidor http no qual envia uma msg
var server = http.createServer(function (request, response){
    //define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type" : "text/plan"});

    //mensagem de retorno
    response.end("Ola mundo node!\n");
});

//porta de servidor vai escutar
server.listen(3000);

//mensagem ao inicar o servidor
console.log("Servidor iniciado em http://localhost:3000/");