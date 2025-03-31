let nomeCompleto = prompt ("informe seu nome completo")
console.log(nomeCompleto)
/*alert("Seja bem vindo(a)" + nomeCompleto)*/

/*document.write("Seja bem vindo(a)" + nomeCompleto)*/
let cor = prompt ("Informe uma cor:\n 1 azul \n 2 vermelno \n 3 preto")
let corDeFundo = null
if ( cor =="1"){
    corDeFundo = "blue"
}
else if (cor == "2"){
    corDeFundo = "red"
}
else if (cor == "3"){
    corDeFundop ="black"
}
else {
    corDeFundo = "yellow"
}

document.body.style.backgroundColor = corDeFundo
