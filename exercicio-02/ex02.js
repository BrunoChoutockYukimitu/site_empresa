let numero1 = prompt("Digite o primeiro número")
let numero2 = prompt("Digite se segundo número")
let equacao = prompt("Escolha a equação: \n - \n + \n * \n / ")

if (equacao == "-") {
    alert(numero1 - numero2)
}
else if (equacao == "+") {
    alert(numero1 + numero2)
}
else if (equacao == "*") {
    alert(numero1 * numero2)
}
else if (equacao == "/") {
    alert(numero1 / numero2)
}

else {
    alert ("digite um número ou equação válida")
}