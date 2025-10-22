const resultado = document.getElementById("resultado");
const array = [];
let entrada;
let soma = 0;

while(true){
    entrada=prompt("Digite um numero inteiro:(Clique em cancelar para parar)");
    if (entrada == null) break;
    let numero = parseInt(entrada);
    if (!isNaN(numero)) array.push(numero);
}

for(i=0;i < array.length;i++) soma = soma + array[i];

resultado.innerHTML = `A soma dos numeros ${array} vale ${soma}`;
