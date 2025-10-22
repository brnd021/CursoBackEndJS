const resultado = document.getElementById("resultado");
const array = [];
let entrada;
let maior = 0;

while(true){
    entrada=prompt("Digite um numero inteiro:(Clique em cancelar para parar)");
    if (entrada == null) break;
    let numero = parseInt(entrada);
    if (!isNaN(numero)){
        array.push(numero);
    }   
}

for(i=0;i < array.length;i++) if(array[i]>maior) maior = array[i];

resultado.innerHTML = `O maior valor informado foi: ${maior}`