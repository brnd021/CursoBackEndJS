const resutadoDiv = document.getElementById('resultado');
const num1 = parseFloat(prompt('Digite o primeiro número:'));
const num2 = parseFloat(prompt('Digite o segundo número:'));

if (num1 % num2 === 0) {
    resutadoDiv.innerText = `${num1} é divisível por ${num2}.`;
}else {
    resutadoDiv.innerText = `${num1} nao é divisível por ${num2}.`;
}