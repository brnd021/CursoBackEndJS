const resultado = document.getElementById("resultado");
const numero = parseInt(prompt("Digite um numero:"));
let divisores= [];

for(let i=1;i<=numero;i++) if(numero%i==0) divisores.push(i);

resultado.innerHTML = `Os divisores do numero ${numero} sao ${divisores}`;