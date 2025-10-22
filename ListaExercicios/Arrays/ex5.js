const resultado = document.getElementById("resultado");
const array = [];
let entrada;
const numEspecifico = parseInt(prompt("Digite um numero específico"))

while(true){
    entrada=prompt("Digite um numero inteiro:(Clique em cancelar para parar)");
    if (entrada == null) break;
    let numero = parseInt(entrada);
    if (!isNaN(numero)) array.push(numero);
}

const cont = array.filter(num=>num == numEspecifico)

resultado.innerHTML =` O numero de  vezes que o numero ${numEspecifico} aparece na lista e ${cont.length}`;