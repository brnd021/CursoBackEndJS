const frase = prompt("Digite uma frase:");
const resultado = document.getElementById("resultado");

const tamanhoFrase = frase.length;
const fraseAlt=frase.replaceAll(" ","");
const tamanhoSemEspacos = fraseAlt.length;
const qntdEspacos = tamanhoFrase - tamanhoSemEspacos;

resultado.innerHTML = `A frase digitada possui ${qntdEspacos} caracteres em branco.<br>`

