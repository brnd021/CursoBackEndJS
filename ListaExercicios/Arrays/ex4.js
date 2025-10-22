const resultado = document.getElementById("resultado");
const array = [];
let entrada;

while(true){
    entrada=prompt("Digite um numero inteiro:(Clique em cancelar para parar)");
    if (entrada == null) break;
    let numero = parseInt(entrada);
    if (!isNaN(numero)) array.push(numero);
}

const array2 = array.reverse();

resultado.innerHTML = `A lista dos  números inteiros na ordem inversa e ${array2}`;
