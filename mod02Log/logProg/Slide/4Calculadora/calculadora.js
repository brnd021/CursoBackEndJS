function calcular(num,num2){
    if (isNaN(num) || isNaN(num2)){
    alert("Digite numero validos")
    }else{ 
        let operacao = parseInt(prompt("Qual operacao deseja realizar? add(1) sub (2) mult(3) divi(4)"))
        if (isNaN(operacao)){
            alert("Erro de operacao")
        }
        else{
            switch (operacao){
            case 1:
                return num + num2;
            case 2: 
                return num - num2;
            case 3:
                return num * num2;
            case 4:
                if(num2 == 0) alert("Divisao por zero") 
                else return num / num2;
            
            default:
                return alert("Opcao invalida")
            }
        }
    }
};
const resultado = document.getElementById('resultado');
const num = parseFloat(prompt("Digite um numero"));
const num2 = parseFloat(prompt("Digite mais um numero"));

const conta = calcular(num,num2);
resultado.innerHTML = `${conta}`;