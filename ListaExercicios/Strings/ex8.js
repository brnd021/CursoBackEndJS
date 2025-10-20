const frase = prompt("Digite uma frase:");
const resultado = document.getElementById("resultado");
let numeroVogais = 0;

for (let i = 0; i < frase.length; i++) {
    const letra = frase[i].toLowerCase();
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ) {
        numeroVogais++;
    }
}

resultado.innerHTML= `A frase possui ${numeroVogais} vogais.`;