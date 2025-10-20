const nome = prompt("Digite seu nome completo:");
const resultado = document.getElementById("resultado");

const index= nome.indexOf(" ");
const firstName = nome.substring(0, index);

resultado.innerHTML = `O primeiro nome é: ${firstName}`;