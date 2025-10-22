const resultado = document.getElementById("resultado");
let maior;
let menor;
let primeiroNumero = true;

while (primeiroNumero) {
    let numero = parseInt(prompt("Digite um número:"));
    if ( numero === 0 ) break;
    if ( primeiroNumero ) {
        maior = numero;
        menor = numero;
        primeiroNumero = false;
    }   else {
            if ( numero > maior ) maior = numero;
            if ( numero < menor) menor = numero;
    }
}
if (primeiroNumero === true) {
    resultado.innerHTML = `Nenhum número diferente de zero foi digitado.`;
} else {
    resultado.innerHTML = `O maior número digitado foi **${maior}** e o menor foi **${menor}**`;
}