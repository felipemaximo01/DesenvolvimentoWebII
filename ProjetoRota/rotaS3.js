var http = require('http');
var url = require('url');

var callback = function (request, response){
    response.writeHead(200, {"Content-type" : "application/json; charset=utf-8"});

    var parts = url.parse(request.url);

    if(parts.path == "/rota1"){
        response.end("Rota 1")
    }else if(parts.path == "/rota2"){
        response.end("Rota 2")
    }else if(parts.path == "/rota3"){
        response.end("Rota 3")
    }else{
        response.end("Rota Inválida")
    }

};

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado....")