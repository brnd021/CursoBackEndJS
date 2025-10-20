const resultado = document.getElementById('resultado');
const numero = parseFloat(prompt('Digite um número:'));
const numero2 = parseFloat(prompt('Digite outro número:'));

if (numero > numero2) {
    resultado.innerHTML = `O número ${numero} é maior que o número ${numero2}.`;
} else if (numero < numero2) {
    resultado.innerHTML = `O número ${numero2} é maior que o número ${numero}.`;
} else {
    resultado.innerHTML = `Os números ${numero} e ${numero2} são iguais.`;
}