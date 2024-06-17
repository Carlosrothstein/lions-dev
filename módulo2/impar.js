let número

console.log('coloque um número.')
process.stdin.once('data', function(data){
    número = data.toString().trim()
    processamento(número)
    process.exit()
})

function processamento(número){
    if(número == 0){
        console.log("O número que você colocou é 0.")
    } else if (número % 2 == 0){
        console.log("O número que você colocou é par.")
    }else {
        console.log("O número que você colocou é ímpar.")
    }
}
