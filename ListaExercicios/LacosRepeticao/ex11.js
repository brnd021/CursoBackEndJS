const resultado = document.getElementById("resultado");
let soma = 0;
let count = 0;
let numero;


for ( numero = 1; numero != 0;){
    numero = parseFloat(prompt("Digite um numero"));
    soma = soma + numero;
    count++;
} 
    
media = (soma) / (count - 1);
resultado.innerHTML = `A média dos números digitados é ${media}.`;
console.log(media);
console.log(soma);
console.log(count);