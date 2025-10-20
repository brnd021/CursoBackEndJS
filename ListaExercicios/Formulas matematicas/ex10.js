const lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
const lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
const lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));
const resultado = document.getElementById("resultado");

const semiperimetro = (lado1 + lado2 + lado3) / 2;
const area = Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));

resultado.innerHTML = `O perimetro do triângulo é: ${2 * semiperimetro}  A área do triângulo é: ${area.toFixed(2)}`;
