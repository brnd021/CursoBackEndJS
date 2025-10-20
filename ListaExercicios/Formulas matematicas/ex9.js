const lado1 = parseFloat(prompt("Digite o comprimento de um lado do retangulo:"));
const lado2 = parseFloat(prompt("Digite o comprimento do outro lado do retangulo:"));
const resultado = document.getElementById("resultado");

const perimetro = 2 *(lado1 + lado2);
const area = lado1 * lado2;

resultado.innerHTML = `O perímetro do retângulo é: ${perimetro.toFixed(2)} <br> A área do retângulo é: ${area.toFixed(2)}`;