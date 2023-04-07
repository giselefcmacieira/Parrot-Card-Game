let qtdDeCartas = prompt('Com quantas cartas deseja jogar?');
let contador = 1;
while (qtdDeCartas<4 || qtdDeCartas>14 || qtdDeCartas%2 !== 0){
    qtdDeCartas = prompt('Com quantas cartas deseja jogar?');
}
while (contador <= qtdDeCartas){
    let elemento = document.querySelector(".conteudo");
    elemento.innerHTML = elemento.innerHTML + "<div onclick= 'flip (this)' class='carta'><div class='frente face'><img class='img-verso' src='./Imagens/back.png'/></div><div class='verso face'><img class='img-verso' src='./Imagens/bobrossparrot.gif'/></div></div>"
    contador = contador + 1;
}
function flip (cartaSelecionada){
    const carta = cartaSelecionada.querySelectorAll("div")
    const frente = carta[0];
    const verso = carta[1];
    frente.classList.toggle("frente-ativa");
    verso.classList.toggle("verso-ativa");
    console.log(face);
}