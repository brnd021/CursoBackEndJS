const resultado = document.getElementById('resultado');
const num1 = parseFloat(prompt('Digite o primeiro número:'));
const num2 = parseFloat(prompt('Digite o segundo número:'));
const num3 = parseFloat(prompt('Digite o terceiro número:'));

if ((num1 + num2 + num3) % 5 === 0) {
    resultado.innerHTML = `A soma dos números é divisível por 5. Soma: ${num1 + num2 + num3}`;
} else {
    resultado.innerHTML = `A soma dos números não é divisível por 5. Soma: ${num1 + num2 + num3}`;
}