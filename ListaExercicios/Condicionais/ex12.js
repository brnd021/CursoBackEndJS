const resultadoDiv = document.getElementById('resultado');
const anoNascimento = prompt('Digite o ano em que voce nasceu:');
const anoAtual = new Date().getFullYear();

if (anoAtual-anoNascimento < 16) {
    resultadoDiv.innerHTML = 'Voce nao pode votar ';
}else {
    resultadoDiv.innerHTML = 'Voce pode votar';
}