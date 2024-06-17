let coresFavoritas = ["preto" , "azul" , "verde"]
let coresEspeciais = []
let corDoUsuario

console.log("Qual sua cor favorita?")
process.stdin.once('data', function(data){
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()
})

function processamento(corDoUsuario){
    if (coresFavoritas.includes(corDoUsuario)) {
        console.log("A sua cor é uma das favoritas da turma!")
    }else {
        console.log("A sua cor favorita é diferente, vamos adicionar à lista!")
        coresEspeciais.push(corDoUsuario)
    }

    console.log(`Essas são as cores favoritas ${coresFavoritas} , e essas são as cores especiais: ${coresEspeciais},e a quantidade de elementos é: ${coresFavoritas.length}`)
}