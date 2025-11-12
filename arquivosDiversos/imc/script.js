import * as formulas from './functions.js';

document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('enviar');
    const botao2 = document.getElementById('enviar2');
    const resultado = document.getElementById('resultado');
    const resultado2 = document.getElementById('resultado2');
    const tiposDiv = document.getElementById('tipos');
    const calculo = document.getElementById('calculo');

    botao.addEventListener('click', function (e) {
        e.preventDefault();
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const idade = parseInt(document.getElementById('idade').value);
        const sexo = document.querySelector('input[name="sexo"]:checked').value.toUpperCase();
        let IMC = formulas.calculaIMC(peso, altura);
        let classificacao = formulas.classificaIMC(idade, sexo, peso, altura);
        resultado.textContent = `Seu IMC é ${IMC.toFixed(2)} e voce esta com ${classificacao}`
    });

    const metodo = document.querySelectorAll('input[name="metodo"]');

    metodo.forEach(m => {
        m.addEventListener('change', function () {
            tiposDiv.innerHTML = '';
            const sexo = document.querySelector('input[name="sexo"]:checked').value?.toUpperCase();
            if(!sexo){
                tiposDiv.innerHTML='<p> Selecione o sexo antes de escolher o metodo. </p>'
                return;
            }
            const valorMetodo = m.value.toUpperCase();
            const tipos = formulas.dobras(valorMetodo, sexo);
            tipos.forEach(tipo => {
                const container = document.createElement('div');
                container.classList.add('campo-tipo');

                const label = document.createElement('label');
                label.setAttribute('for', tipo)
                label.textContent = tipo;

                const input = document.createElement('input');
                input.type = 'number';
                input.id = tipo;
                input.classList.add('input');
                container.appendChild(label);
                container.appendChild(input);
                tiposDiv.appendChild(container);
            });
            calculo.style.display="block";
        });
        botao2.addEventListener('click',function(e){
            e.preventDefault();
            const sexo = document.querySelector('input[name="sexo"]:checked').value?.toUpperCase();
            const formula = calculo.querySelectorAll('input[name="formula"]').value;
            const inputs = tiposDiv.querySelectorAll('input[type="number"]');
            const idade = parseInt(document.getElementById('idade').value);
            const valorMetodo = m.value.toUpperCase();
            const valoresDobras = {};
            let arrayDobras =[];
            let densidadeCorporal;
            let percentual;
            console.log(inputs);
            inputs.forEach(m=> {valoresDobras[m.id] = parseFloat(m.value) || 0});
            arrayDobras = Object.values(valoresDobras)
            console.log(valoresDobras);
            switch(valorMetodo){
                case 'JP3': 
                    densidadeCorporal = sexo === 'M' ? formulas.pollock3M(idade,...arrayDobras) : formulas.pollock3F(idade,...arrayDobras);
                    break;
                case 'JP4':
                    densidadeCorporal = formulas.pollock4(...arrayDobras);
                    break;
                case 'JP7':
                    densidadeCorporal = sexo === 'M' ? formulas.pollock7M(idade,...arrayDobras) : formulas.pollock7F(idade,...arrayDobras);
                    break;
                case 'DW':
                    densidadeCorporal = sexo === 'M' ? formulas.DurninWomersleyM(idade,...arrayDobras) : formulas.DurninWomersleyF(idade,...arrayDobras);
                    break;
                case 'F':
                    densidadeCorporal = formulas.Faulkner(...arrayDobras);
                    break;
                case 'S':
                    densidadeCorporal = sexo === 'M' ? formulas.SloanM(idade,...arrayDobras) : formulas.SloanF(idade,...arrayDobras);
                    break;
                case 'G':
                    densidadeCorporal = sexo === 'M' ? formulas.GuedesM(idade,...arrayDobras) : formulas.GuedesF(idade,...arrayDobras);
                    break;
            }
            percentual = formula === 'SIRI' ? formulas.Siri(densidadeCorporal) : formulas.Brozek(densidadeCorporal);
            resultado2.textContent = `Seu percentual de gordura : ${percentual}%`;
        })
    });
});