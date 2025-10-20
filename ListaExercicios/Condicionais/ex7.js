const resultado = document.getElementById('resultado');
const nota1 = parseFloat(prompt('Digite a primeira nota:'));
const nota2 = parseFloat(prompt('Digite a segunda nota:'));

const media = (nota1 + nota2) / 2;

if (media >= 6) {
    resultado.innerHTML = `Média: ${media.toFixed(2)} - Aprovado`;
} else {
    resultado.innerHTML = `Média: ${media.toFixed(2)} - Reprovado`;
}