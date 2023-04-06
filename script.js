let qtdDeCartas = prompt('Com quantas cartas deseja jogar?');
let contador = 1;
while (qtdDeCartas<4 || qtdDeCartas>14 || qtdDeCartas%2 !== 0){
    qtdDeCartas = prompt('Com quantas cartas deseja jogar?');
}
while (contador <= qtdDeCartas){
    let elemento = document.querySelector(".conteudo");
    elemento.innerHTML = elemento.innerHTML + "<div class='carta-verso'><img class='img-verso' src='./Imagens/back.png'/></div>"
    contador = contador + 1;
}