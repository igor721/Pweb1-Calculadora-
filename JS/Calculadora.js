
function somar(num1, num2){
    return num1 + num2
}

function subtrair(num1, num2){
    return num1 - num2
}

let multi = (num1, num2) => (num1 * num2)

let dividir = (num1, num2) => (num1 / num2)

function imprimir(){
    return document.getElementById('resultado').innerHTML = result
}

var result
function calcular(){
    var oper = document.getElementById('operador').value
    var num1 = Number(document.getElementById('valor1').value)
    var num2 = Number(document.getElementById('valor2').value)
    switch (oper){
        case '+':
            result = somar(num1, num2)
            break
        case '-':
            result = subtrair(num1, num2)
            break
        case '*':
            result = multi(num1, num2)
            break
        case '/':
            result = dividir(num1, num2)
            break
        default:
            result = "Informe o operador!"
            break
    }
    return imprimir()
}
