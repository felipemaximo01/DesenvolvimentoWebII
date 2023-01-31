function testeVar(){
    var a = 1;
    var b = 2;
    var soma = a + b;
    var nome;
    if(nome == undefined){
        console.log("Teste 1 - O nome não foi inicializado");
    }
    if(typeof(nome) == "undefined"){
        console.log("Teste 2 - O nome não foi inicializado");
    }
    console.log("O tipo do nome é: %s e o tipo da soma é: %s ", typeof(nome), typeof(soma));
    console.log("Ola %s, o resultado da soma é: %d", nome, soma);
}

function testeArray(){
    var numeros = [1,2,3];
    numeros.push(4);
    numeros.push(5);
    for(let i = 0; numeros.length > i; i++){
        console.log(numeros[i]);
    }
}

function testeArray2(){
    var numeros = [1,2,3];
    numeros.push(4);
    numeros.push(5);
    for(let i in numeros){
        console.log(numeros[i]);
    }
}

function testeArray3(){
    var numeros = [1,2,3];
    numeros.push(4);
    numeros.push(5);
    numeros.map(n => console.log(n));
}

function objeto1(){
    var pessoa = Object();
    pessoa.nome = "Felps";
    pessoa.hello = function(){
        return "Hello Pessoa"
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

function objeto2(){
    var pessoa = {
        nome : "João",
        hello : function(){
            return "Hello Pessoa"
        }
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

function Pessoa(){
    this.nome = "João";
    this.hello = function(){
        return "Hello Pessoa"
    }
}

function objeto3(){
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

class PessoaC{
    constructor(){
        this.nome = "João";
    }
    hello(){
        return "Hello Pessoa"
    }
}

function objeto4(){
    var pessoa = new PessoaC();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objeto4()
objeto3();
objeto2();
objeto1();
testeArray3();
testeArray2()
testeArray();
testeVar();