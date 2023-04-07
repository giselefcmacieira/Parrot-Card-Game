let qtdDeCartas = prompt('Com quantas cartas deseja jogar?');
let numDeJogadas = 0;
let numDeClicks = 0;
let versoPrimeiraCarta = "";
let versoSegundaCarta = "";
let frentePrimeiraCarta = "";
let frenteSegundaCarta = "";
let numDaCarta = [1,2]
let contador = 0;
let i = 0;
let cartas = [];
let paresDeCartas = ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif","metalparrot.gif","metalparrot.gif","revertitparrot.gif","revertitparrot.gif","tripletsparrot.gif","tripletsparrot.gif","unicornparrot.gif","unicornparrot.gif"]
//Perguntando a quantidade de cartas novamente caso o valor inserido anteriormente não seja par ou maior que 4 ou menor que 16
while (qtdDeCartas<4 || qtdDeCartas>14 || qtdDeCartas%2 !== 0){
    qtdDeCartas = prompt('Com quantas cartas deseja jogar?');
}
//funçao usada para embaralhar as cartas
function comparador() { 
	return Math.random() - 0.5; 
}
//adicionando a quantidade certa de cartas na array que será embaralhada (quando a quantidade de cartas selecionada é valida)
if (qtdDeCartas>=4 && qtdDeCartas<=14 && qtdDeCartas%2 == 0){
    while(i<qtdDeCartas){
        cartas.push(paresDeCartas[i]);
        i++;
    }
}
//embaralhando as cartas
    cartas.sort(comparador);
    console.log(cartas);
//adicionando as cartas no HTML na quantidade certa e com as imagens de verso emaralhadas
while (contador < qtdDeCartas){
    let elemento = document.querySelector(".conteudo");
    elemento.innerHTML = elemento.innerHTML + `<div onclick= "flip (this)" class="carta"><div class="frente face"><img class="img-verso" src="./Imagens/back.png"/></div><div class="verso face"><img class="img-verso" src="./Imagens/${cartas[contador]}"/></div></div>`
    contador = contador + 1;
}
//função para desvirar a carta
function unflip (){
    versoPrimeiraCarta.classList.remove("carta1");
    versoPrimeiraCarta.classList.remove("verso-ativa");
    frentePrimeiraCarta.classList.remove("carta1");
    frentePrimeiraCarta.classList.remove("frente-desativa");
    versoSegundaCarta.classList.remove("carta2");
    versoSegundaCarta.classList.remove("verso-ativa");
    frenteSegundaCarta.classList.remove("carta2");
    frenteSegundaCarta.classList.remove("frente-desativa");
}

//virando a carta quando ela é clicada
function flip (cartaSelecionada){
    const carta = cartaSelecionada.querySelectorAll("div")
    const frente = carta[0];
    const verso = carta[1];
    frente.classList.add("frente-desativa");
    frente.classList.add(`carta${numDaCarta[numDeClicks]}`);
    verso.classList.add("verso-ativa");
    verso.classList.add(`carta${numDaCarta[numDeClicks]}`);
    versoPrimeiraCarta = document.querySelector(".verso-ativa.carta1");
    versoSegundaCarta = document.querySelector(".verso-ativa.carta2");
    frentePrimeiraCarta = document.querySelector(".frente-desativa.carta1");
    frenteSegundaCarta = document.querySelector(".frente-desativa.carta2");
    console.log(versoPrimeiraCarta);
    console.log(versoSegundaCarta);
    console.log(frentePrimeiraCarta);
    console.log(frenteSegundaCarta);
    numDeJogadas++;
    numDeClicks++;
    console.log(numDeClicks);
    //se já tiver virado duas carta a contagem de clicks recomeça
    if(numDeClicks%2 === 0){
        numDeClicks = 0;
        if(versoPrimeiraCarta.innerHTML === versoSegundaCarta.innerHTML){
            versoPrimeiraCarta.classList.remove("carta1");
            frentePrimeiraCarta.classList.remove("carta1");
            versoSegundaCarta.classList.remove("carta2");
            frenteSegundaCarta.classList.remove("carta2");
        }else{
            setTimeout(unflip, 1000);
        }
    }
}
