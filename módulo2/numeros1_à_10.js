let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let impares = []

for(var i = 0; i < numero.length; i++) {
    if (numero[i] % 2 ==1) {
        impares.push(numero[i])
    }
}
console.log(impares)