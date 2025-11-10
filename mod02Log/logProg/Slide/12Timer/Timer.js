document.addEventListener('DOMContentLoaded', function(){
    const resultado = document.getElementById("resultado");
    const botao = document.getElementById("botao")
    function tempoAtual(){
        const tempo = new Date();
        const hora = tempo.getHours();
        const minuto = tempo.getMinutes();
        const segundo = tempo.getSeconds();
        resultado.textContent =`${hora}:${minuto}:${segundo}`;
    }
    botao.addEventListener('click',function(e){
        e.preventDefault();
        tempoAtual();
        setInterval(tempoAtual,1000);
    })
})
