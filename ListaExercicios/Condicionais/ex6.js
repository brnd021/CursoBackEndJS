const resultado = document.getElementById('resultado');
const nota1 = parseFloat(prompt('Digite a primeira nota:'));
const nota2 = parseFloat(prompt('Digite a segunda nota:'));

if (nota1 >= 6) {
    resultado.innerHTML = `Aprovado na primeira prova com a nota ${nota1}</br>`;
}else {
    resultado.innerHTML = `Reprovado na primeira prova com a nota ${nota1}</br>`;
}
if (nota2 >= 6) {
    resultado.innerHTML += `Aprovado na segunda prova com a nota ${nota2}</br>`;
}else {
    resultado.innerHTML += `Reprovado na segunda prova com a nota ${nota2}</br>`;
}