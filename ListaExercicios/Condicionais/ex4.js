const resultado = document.getElementById('resultado');
const numero = parseFloat(prompt('Digite um número:'));

if(numero % 2==0){
    resultado.innerHTML = `O número ${numero} é par.`;
} else {
    resultado.innerHTML = `O número ${numero} é ímpar.`;
}