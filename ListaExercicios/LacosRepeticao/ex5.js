const numero = parseFloat(prompt("Digite um número para calcular sua tabuada:"));
const resultado = document.getElementById("resultado");

for (let i = 1; i <= 10; i++) {
    const produto = numero * i;
    resultado.innerHTML += `${numero} x ${i} = ${produto}<br>`;
}