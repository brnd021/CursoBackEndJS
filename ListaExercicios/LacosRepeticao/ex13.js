const resultado = document.getElementById("resultado");
const frase = prompt("Digite uma frase:");
let numeroVogais = 0;

for (let i = 0; i < frase.length; i++) {
    const letra = frase[i].toLowerCase();
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ) numeroVogais++;
}

resultado.innerHTML = `O numero de vogais na frase e: ${numeroVogais}`;