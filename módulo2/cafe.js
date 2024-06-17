
let gostaDeCafe

console.log("Você gosta de café?")
process.stdin.once('data', function(data) {
    gostaDeCafe = data.toString().trim()
    processamento(gostaDeCafe)
    process.exit()
})

function processamento(gostaDeCafe) {
    if(gostaDeCafe == 'sim') {
        gostaDeCafe = true
    }else {
        gostaDeCafe = false
    }
    if(gostaDeCafe == true) {
        console.log("Somos dois então.")
    }else {
        console.log("Que pena.")
    }
}