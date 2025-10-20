const palavra1 = prompt("Digite a primeira palavra:");
const palavra2 = prompt("Digite a segunda palavra:");
const resultado = document.getElementById("resultado");

const concatenacao = palavra1 + palavra2;

resultado.innerHTML = `${concatenacao}`;