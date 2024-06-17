let nome 
let idade 
const ano = 2024
let aniversário

console.log("como é seu nome?")

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("qual a sua idade?")

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        console.log("Você já fez aniversário esse ano?")

        process.stdin.once('data', function(data){
            aniversário = data.toString().trim()
            processamento(nome, idade, aniversário)
            process.exit()
        })        
    })
})

function processamento(nome, idade, aniversário) {
    let nascimento = ano - idade
    if(aniversário == 'sim') {
        nascimento = nascimento
    } else {
        nascimento --
    }
    console.log(`Olá ${nome}, você nasceu em ${nascimento}`)

}