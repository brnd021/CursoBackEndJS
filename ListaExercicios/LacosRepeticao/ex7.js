const numero = parseFloat(prompt("Digite um número:"));
const resultado = document.getElementById("resultado");
let soma = 0;

for (let i = 1; i <= numero; i++) soma = soma + i; 
      
resultado.innerHTML = `A soma dos números de 1 até ${numero} é ${soma}`;