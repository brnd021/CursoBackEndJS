const raio = prompt("Digite o raio do círculo:");
const resultado = document.getElementById("resultado"); 

const perimetro = 2 * Math.PI * raio;

resultado.innerHTML = `O perímetro do círculo é: ${perimetro.toFixed(2)}`;