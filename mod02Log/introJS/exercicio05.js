const resultado = document.getElementById('resultado');
let numero1, numero2, a,b;
let entradaValida = true;
while(entradaValida){ 
    numero1 = parseFloat(prompt('Digite o numero 1:'));
    numero2 = parseFloat(prompt('Digite o numero 2:'));
    a = parseFloat(prompt('Digite o numero a:'));
    b = parseFloat(prompt('Digite o numero b:'));
    entradaValida = !isNaN(numero1) && !isNaN(numero2) && !isNaN(a) && !isNaN(b);
    if (entradaValida){
        let tipo1 = typeof numero1;
        let tipo2 = typeof numero2;
        let divi = numero1/numero2; 
        let raiz = Math.sqrt(-1);
        let soma = a + b;
        let fixed = (a+b).toFixed(2);
        let finito = isFinite(numero1/numero2);
        let nNumero = !isNaN(Math.sqrt(-1));
        let precision = (a+b).toPrecision(1);
        resultado.innerHTML = `Tipo da variavel numero 1: ${tipo1} <br>
        Tipo da variavel numero 2: ${tipo2} <br>
        Resultado da divisao do numero 1 pelo numero 2: ${divi} <br>
        O valor da raiz quadrada de -1: ${raiz} <br>
        O resultado da soma de a + b: ${soma} <br>
        Formatando o resultado da soma para 2 casas decimais: ${fixed} <br>
        Verificando se a divisao do numero 1 pelo numero 2 e finita: ${finito} <br>
        Verificando se a raiz quadrada de -1 e um numero: ${nNumero} <br>
        Formatando o resultado da soma de a e b para ter um digito valido: ${precision}`;
        entradaValida = false;        
    }else{
        alert('Insira numeros validos!')
        entradaValida = true;
    }   
}