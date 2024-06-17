let nota
let resultado = ''

console.log("Qual a sua nota?")
process.stdin.once('data', function(data){
    nota = parseInt(data.toString().trim())
    calcular(nota, resultado)
    switch (true) {
        case (calcular(nota, resultado) == "A"):
            console.log('você foi aprovado com a nota A. ')
            break;

        case (calcular(nota, resultado) == "B"):
            console.log('você foi aprovado com a nota B. ')
            break;

        case (calcular(nota, resultado) == "C"):
            console.log('você foi aprovado com a nota C. ')
            break;
            
        case (calcular(nota, resultado) == "D"):
            console.log('você foi reprovado com a nota D. ')
            break;

        case (calcular(nota, resultado) == "F"):
            console.log('você foi reprovado com a nota F. ')
            break;
    }
    process.exit()
})
function calcular(nota, resultado){
    switch (true) {
        case (nota >= 90 && nota <= 100):
            return "A"
            
        case (nota >= 80 && nota <= 89):
            return "B"

        case (nota >= 70 && nota <= 79):
            return "C"

        case (nota >= 60 && nota <= 69):
            return "D"

        case (nota >= 0 && nota <= 59):
            return "F"

        default:
            return "Nota inválida"
    }
}
