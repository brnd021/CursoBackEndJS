const nome = prompt("Digite seu nome :");
const resultado = document.getElementById("resultado");

const verifica = nome.startsWith('A');
resultado.innerHTML = `Seu nome começa com a letra A? ${verifica}`;