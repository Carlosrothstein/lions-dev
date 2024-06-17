function calcular(valor1, valor2, resultado){
    switch (resultado) {
        case '+':
            return valor1 + valor2

            case '-':
            return valor1 - valor2

            case '*':
            return valor1 * valor2

            case '/':
            return valor1 / valor2
    }
}
console.log(calcular(8, 9, "+"));
console.log(calcular(8, 9, "-"));
console.log(calcular(8, 9, "*"));
console.log(calcular(8, 9, "/"));