/*function pegaArquivo(caminhoArquivo){
    const encoding = "utf-8";
    fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}*/

/*function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(texto))
    .catch((erro) => trataErro(erro))
}*/

/*async function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.blueBright(texto));
}*/

/*function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultado = [];

    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayResultado.push({[temp[1]] : [temp[2]]});
    }
    //const linksExtraidos = texto.match(regex);
    //const linksExtraidos = regex.exec(texto);
    //console.log(linksExtraidos);
    return arrayResultado
}*/