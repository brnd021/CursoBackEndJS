const num1= parseFloat(prompt("Digite o primeiro numero:"));
const num2 = parseFloat(prompt("Digite o segundo numero:"));
const num3 = parseFloat(prompt("Digite o terceiro numero:"));
const resultado = document.getElementById("resultado");

const media = Math.pow(num1 * num2 * num3, 1/3);

resultado.innerHTML = `A média geométrica entre ${num1}, ${num2} e ${num3} é igual a ${media.toFixed(2)}`;