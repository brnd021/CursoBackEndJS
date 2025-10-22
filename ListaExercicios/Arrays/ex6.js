const resultado = document.getElementById("resultado");
const array = [];
let entrada;
let cont = 0;

while(true){
    entrada=prompt("Digite um numero inteiro:(Clique em cancelar para parar)");
    if (entrada == null) break;
    let numero = parseInt(entrada);
    if (!isNaN(numero)) array.push(numero);
}

array.forEach((element) => {if(element % 2 != 0) cont++})

if (cont == 0) resultado.innerHTML = "Todos os elementos são pares."
else resultado.innerHTML = "Pelo menos um elemento não e par. "