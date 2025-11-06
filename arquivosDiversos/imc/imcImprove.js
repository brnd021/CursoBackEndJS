import imcSpecs from './imcSpecs.js'

function calculaIMC(peso,h){
    return peso / Math.pow(h,2)
}

function classificaIMC(idade,sexo,peso,h){
    let imc = calculaIMC(peso,h);
    let idadeReal = idade < 10 ? 5 : idade < 15 ? 10 : 15;
    let tabela;

    if (idade < 18) {
        if (sexo === "M") tabela = imcSpecs.menino.idade[idadeReal];
        else tabela = imcSpecs.menina.idade[idadeReal];
    } 
    else if (idade < 60) {
        tabela = imcSpecs.adulto;
    } 
    else {
        tabela = imcSpecs.idoso;
    }

    const alvo = tabela.find(e => imc <= e.imc);
    return alvo ? alvo.classifica : tabela[tabela.length - 1].classifica;
}

document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('enviar');
    const resultado = document.getElementById('resultado');

    
    botao.addEventListener('click', function() {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const idade = parseInt(document.getElementById('idade').value);
        const sexo = document.querySelector('input[name="sexo"]:checked').value.toUpperCase();
        let IMC = calculaIMC(peso,altura);
        let classificacao = classificaIMC(idade,sexo,peso,altura);
        resultado.textContent = `Seu IMC é ${IMC.toFixed(2)} e voce esta com ${classificacao}`
    });
});