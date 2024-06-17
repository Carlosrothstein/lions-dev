let notas = []
let prova1
let prova2

console.log("Coloque a primeira nota.")
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log("Coloque a segunda nota.")

    process.stdin.once('data', function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
    })
})

function processamento(prova1, prova2) {
    notas.push(prova1, prova2)
    let média = (notas[0] + notas[1]) / 2 
    console.log(`A sua média é ${média}. `)
}
