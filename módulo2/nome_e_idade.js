let nome 
let idade 
const ano = 2024

console.log("como é seu nome?")

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("qual a sua idade?")

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    let nascimento = ano - idade 
    console.log(`Olá ${nome}, você nasceu em ${nascimento}, se você não fez aniversário, você nasceu ${nascimento - 1}`)
}