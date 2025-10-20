const num1 = parseFloat(prompt("Digite o primeiro numero:"));
const num2 = parseFloat(prompt("Digite o segundo numero:"));
const resultado = document.getElementById('resultado');

const soma = num1 + num2;
const subtracao = num1 - num2;
const multi = num1 * num2;
let divi;
if (num2 == 0) {
    alert("Divisão por zero não é permitida.");
}else{
    divi = num1 / num2;
}

resultado.innerHTML = `A soma entre ${num1} e ${num2} é igual a ${soma} <br>
A subtração entre ${num1} e ${num2} é igual a ${subtracao} <br>
A multiplicação entre ${num1} e ${num2} é igual a ${multi} <br>
A divisão entre ${num1} e ${num2} é igual a ${divi} <br>`;