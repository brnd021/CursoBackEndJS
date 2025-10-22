const resultado = document.getElementById("resultado");
const array = [];
let entrada;

while(true){
    entrada=prompt("Digite um numero inteiro:(Clique em cancelar para parar)");
    if (entrada == null) break;
    let numero = parseInt(entrada);
    if (!isNaN(numero)) array.push(numero);  
}

const soma = array.reduce((acumulador,valor)=> acumulador + valor,0);

const media = soma/array.length;

resultado.innerHTML=`A media dos numeros informados vale: ${media}`;
