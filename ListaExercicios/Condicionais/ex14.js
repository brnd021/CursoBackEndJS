const resultadoDiv = document.getElementById('resultado');
const dia = prompt('Digite um nome de dia da semana:').toLowerCase();

if (dia === 'domingo' || dia === 'sábado' || dia === 'sabado') {
    resultadoDiv.innerText = 'É dia de fim de semana !';
} else {
    resultadoDiv.innerText = 'É  dia útil !';
}