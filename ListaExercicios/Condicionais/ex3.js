const resultado = document.getElementById('resultado');
const numero = parseFloat(prompt('Digite um número:'));
const numero2 = parseFloat(prompt('Digite outro número:'));
const numero3 = parseFloat(prompt('Digite mais um número:'));

if (numero >= numero2 && numero >= numero3) {
    resultado.innerText = `O maior número é: ${numero}`;
} else if (numero2 >= numero && numero2 >= numero3) {
    resultado.innerText = `O maior número é: ${numero2}`;
} else {
    resultado.innerText = `O maior número é: ${numero3}`;
}