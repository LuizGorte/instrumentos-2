console.log("Você toca algum instrumento musical?")

let resposta;

process.stdin.on("data", function (data){
    let entrada = data.toString().trim();
    if (!resposta){
        resposta = entrada;
        if (resposta == "sim" || resposta == "s"){
            console.log("Que ótimo")
        }else if (resposta == "n" || resposta == "nao" || resposta == "não"){
            console.log("Que pena!")
            process.exit()
        }
    }
    else{
        console.log("Escreva uma resposta válida: sim(s) ou não(n)")
        resposta = undefined;
    }
})