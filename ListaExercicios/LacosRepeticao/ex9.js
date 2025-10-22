const numero = parseInt(prompt("Digite um número:"));
const resultado = document.getElementById("resultado");
let contador = 0

for (let i = 1; i <= numero; i++) if (numero % i === 0)  contador++;

if (contador === 2) {
    resultado.innerHTML = `O número ${numero} é primo.`;
} else {
    resultado.innerHTML = `O número ${numero} não é primo.`;
}