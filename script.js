let qtdDeCartas = prompt('Com quantas cartas deseja jogar?');
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
//adicionando a quantidade certa de cartas na array que será embaralhada
if (qtdDeCartas>4 && qtdDeCartas<14 && qtdDeCartas%2 == 0){
    while(i<qtdDeCartas){
        cartas.push(paresDeCartas[i]);
        i++;
    }
}
//embaralhando as cartas
    cartas.sort(comparador);
    console.log(cartas);

while (contador < qtdDeCartas){
    let elemento = document.querySelector(".conteudo");
    elemento.innerHTML = elemento.innerHTML + `<div onclick= "flip (this)" class="carta"><div class="frente face"><img class="img-verso" src="./Imagens/back.png"/></div><div class="verso face"><img class="img-verso" src="./Imagens/${cartas[contador]}"/></div></div>`
    contador = contador + 1;
}
function flip (cartaSelecionada){
    const carta = cartaSelecionada.querySelectorAll("div")
    const frente = carta[0];
    const verso = carta[1];
    frente.classList.toggle("frente-ativa");
    verso.classList.toggle("verso-ativa");
}