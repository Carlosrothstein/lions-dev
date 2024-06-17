let dado

console.log('Qual o número de lados do dado?')

process.stdin.once('data', function(data){
    dado = parseInt(data.toString().trim())
    processamento(dado)
    /*dado = Math.floor(Math.random() * dado) +1
    console.log(dado)
    process.exit() (jeito mais facil)*/
    process.exit()
})
function processamento(dado){
    dado = Math.floor(Math.random() * dado) + 1
    console.log(dado)
}