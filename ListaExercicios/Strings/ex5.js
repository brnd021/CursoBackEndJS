const palavra = prompt("Digite uma palavra: ").toLowerCase();
const palavra2 = prompt("Digite outra palavra: ").toLowerCase();
const resultado = document.getElementById("resultado");

const array1 = palavra.split("");
array1.sort();
const array2 = palavra2.split("");
array2.sort();

if (array1.join("") === array2.join("")) {
    resultado.innerHTML = `As palavras "${palavra}" e "${palavra2}" são anagramas.`;
} else {
    resultado.innerHTML = `As palavras "${palavra}" e "${palavra2}" não são anagramas.`;
}

