let numero

console.log("Coloque um número. ")
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})

function processamento(numero){
    if(numero % 5 == 0){
        console.log(`O número ${numero} é divisível por 5. `)
    }else {
        console.log(`O número ${numero} não é divisível por 5. `)
    }
}