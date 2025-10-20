const resultadoDiv = document.getElementById('resultado');
const idade = parseInt(prompt('Digite a sua idade:'));

if (idade < 16) {
    resultadoDiv.innerHTML = 'Voce nao pode votar ';
}else if ( (idade >=16 && idade <18) || (idade >=70)) {
    resultadoDiv.innerHTML = 'O voto e opcional para voce';
}else {
    resultadoDiv.innerHTML = 'O voto e obrigatorio para voce';
}   