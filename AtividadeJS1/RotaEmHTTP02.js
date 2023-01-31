var fs = require('fs');
var http = require('http');
var url = require('url');

function readFile(response,file){
    fs.readFile(file, function(err, data){
        response.end(data);
    });
}

var callback = function (request, response){
    response.writeHead(200, {"Content-type" : "application/json; charset=utf-8"});

    var parts = url.parse(request.url);
    var path = parts.path;

    if(parts.path == "/rota1/cadastro"){
        readFile(response, "cadastro.json")
    }else if(parts.path == "/rota1/catalogo"){
        readFile(response, "catalogo.json")
    }else if(parts.path == "/rota1/dados"){
        readFile(response, "dados.json")
    }else{
        response.end("Rota Invalida: " + parts.path);
    }

};

var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado....")