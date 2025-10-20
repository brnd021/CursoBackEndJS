const resultadoDiv = document.getElementById('resultado');
const numero = parseFloat(prompt('Digite um número:'));

if (numero % 3 === 0 && numero % 5 === 0) {
    resultadoDiv.innerText = `${numero} é divisível por 3 e por 5.`;
}else {
    resultadoDiv.innerText = `${numero} não é divisível por 3 e por 5.`;
}