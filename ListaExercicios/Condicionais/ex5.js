const resultado = document.getElementById('resultado');
const numero = parseFloat(prompt('Digite um número:'));

if (numero > 0) {
    resultado.innerHTML = `O número ${numero} é positivo.`;
} else if (numero < 0) {
    resultado.innerHTML = `O número ${numero} é negativo.`;
} else {
    resultado.innerHTML = 'O número é zero.';
}