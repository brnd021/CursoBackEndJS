const resultado = document.getElementById('resultado');
const num1 = parseFloat(prompt('Digite o primeiro número:'));
const num2 = parseFloat(prompt('Digite o segundo número:'));
const num3 = parseFloat(prompt('Digite o terceiro número:'));

if (num1 >= num2 && num1 >= num3) {
    resultado.innerHTML = `O maior número é: ${num1}<br>`;
}   else if (num2 >= num1 && num2 >= num3) {
    resultado.innerHTML = `O maior número é: ${num2} <br>`;
    }   else {
        resultado.innerHTML = `O maior número é: ${num3} <br>`;
    }

if (num1 <= num2 && num1 <= num3) {
    resultado.innerHTML += `O menor número é: ${num1}`;
}   else if (num2 <= num1 && num2 <= num3) { 
    resultado.innerHTML += `O menor número é: ${num2}`;
    }   else {
    resultado.innerHTML += `O menor número é: ${num3}`;
    }