const resultadoDiv = document.getElementById('resultado');
const altura = parseFloat(prompt('Digite a altura em metros:'));
const peso = parseFloat(prompt('Digite o peso em kg:'));
const imc = peso / (altura * altura);

if (imc < 18.5) {
    resultadoDiv.innerText = `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
}else if (imc < 25) {
    resultadoDiv.innerText = `Seu IMC é ${imc.toFixed(2)}. Você está com o peso normal.`;
}else if (imc < 30) {
    resultadoDiv.innerText = `Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`;
}else if (imc < 35) {
    resultadoDiv.innerText = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade.`;
}else {
    resultadoDiv.innerText = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grave.`;
}