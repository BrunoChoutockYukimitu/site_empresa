function fnSaudaCao(){
let nomeCompleto = prompt ("informe seu nome completo")
alert("Seja bem vindo(a) " + nomeCompleto + " ao meu site!")
}
function fnTrocarDeCorDeFundo(){
let cor = prompt ("Informe uma cor:\n 1 azul \n 2 vermelno \n 3 preto")
let corDeFundo = null
if ( cor =="1"){
    corDeFundo = "blue"
}
else if (cor == "2"){
    corDeFundo = "red"
}
else if (cor == "3"){
    corDeFundo ="black"
}
else {
    corDeFundo = "yellow"
}

document.body.style.backgroundColor = corDeFundo
}
