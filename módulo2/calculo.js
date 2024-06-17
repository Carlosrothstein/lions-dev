function calcular(valor1, valor2, resultado){
    if(resultado == "+"){
        return  valor1 + valor2
    } else if(resultado == "-"){
        return valor1 - valor2
    }else if(resultado == "*"){
        return valor1 * valor2
    }else if(resultado == "/"){
        return valor1 / valor2
    }
}
console.log(calcular(8, 9, "+"));
console.log(calcular(8, 9, "-"));
console.log(calcular(8, 9, "*"));
console.log(calcular(8, 9, "/"));

/*variação:

let resultado = calcular*/