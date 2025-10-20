const resultado = document.getElementById('resultado');
const num1 = parseFloat(prompt('Digite o primeiro número:'));
const num2 = parseFloat(prompt('Digite o segundo número:'));
const num3 = parseFloat(prompt('Digite o terceiro número:'));

const soma = num1 + num2 + num3;

if(soma > 0) {
    resultado.innerHTML = `O resultado da soma é positivo: ${soma}`;
} else if(soma < 0) {
    resultado.innerHTML = `O resultado da soma é negativo: ${soma}`;
} else {
    resultado.innerHTML = `O resultado da soma é zero: ${soma}`;
}