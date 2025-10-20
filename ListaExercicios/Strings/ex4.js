const palavra = prompt("Digite uma palavra: ");
const resultado = document.getElementById("resultado");

const array = palavra.split("");
array.reverse();
const palavraInvertida = array.join("");

if (palavra === palavraInvertida) {
    resultado.innerHTML = `A palavra "${palavra}" é um palíndromo.`;
} else {
    resultado.innerHTML = `A palavra "${palavra}" não é um palíndromo.`;
}
