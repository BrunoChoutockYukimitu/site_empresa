function fnSaudaCao() {
    let nomeCompleto = prompt("informe seu nome completo")
    alert("Seja bem vindo(a) " + nomeCompleto + " ao meu site!")
}
function fnTrocarDeCorDeFundo() {
    let cor = prompt("Informe uma cor:\n 1 azul \n 2 vermelno \n 3 preto")
    let corDeFundo = null
    if (cor == "1") {
        corDeFundo = "blue"
    }
    else if (cor == "2") {
        corDeFundo = "red"
    }
    else if (cor == "3") {
        corDeFundo = "black"
    }
    else {
        corDeFundo = "yellow"
    }

    document.body.style.backgroundColor = corDeFundo
}

function fnMostraHoraAtual() {
    let dataHoraCompleta = new Date()
    let horas = dataHoraCompleta.getHours()
    let minutos = dataHoraCompleta.getMinutes()
    let HoraAtual = horas + ":" + minutos
    alert("Hora Atual :" + HoraAtual)
}

function fnTrocarTitulo() {
    document.getElementById("titulo").innertext = "Titulo novo do meu site"
}

function fnIndiomaPortugues(){
    document.getElementById("menu1").inertText = "INICIAL-"
    document.getElementById("menu2").inertText = "SERVIÇOS-"
     document.getElementById("menu3").inertText = "CONTATO"
}

function fnIndiomaIngues(){
    document.getElementById("menu1").inertText = "HOME-"
    document.getElementById("menu2").inertText = "SERVICES-"
     document.getElementById("menu3").inertText = "CONTACT"
}

function fnBanner1(){
    document.getElementById("banner").src=""
}

function fnBanner2(){
    document.getElementById("banner").src="imagens/baner2.jpg"
}

function fnBanner3(){
    document.getElementById("banner").src="imagens/baner3.jpg"
}

function fnDestaque1Trocar(){
    document.getElementById("destaque1").src="imagens/destaque01.jpg"
}

function fnDestaque1Original(){

}

function fnDestaque2Trocar(){
    document.getElementById("destaque2").src="imagens/destaque02.jpg"
}

function fnDestaque2Original(){

}

function fnDestaque3Trocar(){
    document.getElementById("destaque3").src="imagens/destaque03.jpg" 
}

function fnDestaque3Original(){

}