const inverno = ['junho', 'julho', 'agosto'];
const primavera = ['setembro', 'outubro', 'novembro'];
const verao = ['dezembro', 'fevereiro', 'janeiro'];
const outono = ['março', 'abril', 'maio'];
const mes = (document.getElementById("mes")).toLowerCase();
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function estacao(mes){
    if(mes == "junho" || mes == "julho" || mes == "agosto") return "Inverno"
    if(mes == "setembro" || mes == "outubro" || mes == "novembro") return "Primavera"
    if(mes == "dezembro" || mes == "janeiro" || mes == "fevereiro") return "Verão"
    if(mes == "março" || mes =="abril" || mes == "maio") return "Outuno"
    alert("Não foi inserido mês válido") 
}