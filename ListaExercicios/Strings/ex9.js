const nome = prompt("Digite seu nome completo:");
const resultado = document.getElementById("resultado");

const tamanho  = nome.length;
const posLastName = nome.lastIndexOf(" ");
const lastName = nome.slice((posLastName + 1),tamanho);

resultado.innerHTML= `${lastName}, ${nome.slice(0, posLastName)}`;
