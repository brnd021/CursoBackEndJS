const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));
const resultado = document.getElementById("resultado");

const media = (nota1 + nota2 + nota3) / 3;

resultado.innerHTML = `A média das notas é ${media.toFixed(2)}`;

