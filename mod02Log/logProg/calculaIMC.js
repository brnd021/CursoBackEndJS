document.addEventListener('DOMContentLoaded', function() {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const botao = document.getElementById('enviar');
    const resultado = document.getElementById('resultado');
    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }
    botao.addEventListener('click', function() {
        let peso = parseFloat(pesoInput.value);
        let altura = parseFloat(alturaInput.value);
        let imc = calcularIMC(peso, altura);
        if (isNaN(imc)){
            resultado.textContent = 'Por favor, insira peso e altura corretamente.';            
        } else if (imc < 18.5) {
            resultado.textContent = `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
        } else if (imc < 24.9) {
            resultado.textContent = `IMC: ${imc.toFixed(2)} - Peso normal`;
        } else if (imc < 29.9) {
            resultado.textContent = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
        } else {
            resultado.textContent = `IMC: ${imc.toFixed(2)} - Obesidade`;
        }
    });
});