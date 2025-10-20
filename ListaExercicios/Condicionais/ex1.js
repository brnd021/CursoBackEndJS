const idade = parseFloat(prompt("Digite sua idade:"));
const resultado = document.getElementById("resultado");

if (idade >= 18) {
    resultado.innerHTML = "Você é maior de idade.";
} else {
    resultado.innerHTML = "Você é menor de idade.";
}