const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));
const resultado = document.getElementById("resultado");
let soma = 0;

for (let i = num1; i <= num2; i++) {
    soma = soma + i;
}

resultado.innerHTML = `A soma dos números entre ${num1} e ${num2} é ${soma}.`;