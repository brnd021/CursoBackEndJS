const frase = prompt("Digite uma frase:");
const resultado = document.getElementById("resultado");

const novaFrase = frase.replaceAll('a','e');
resultado.innerHTML = `${novaFrase}`;