document.addEventListener('DOMContentLoaded', function () {
    const cancelar = document.getElementById("cancelar");
    const iniciar = document.getElementById("iniciar");
    const timer = document.getElementById("timer");
    let ativo = true;
    let contador = 0;
    let rodar = true;
    iniciar.addEventListener("click",function(e){
        e.preventDefault;
        sensor = setInterval(() => {
            if(ativo) {
                contador += 2;
                timer.textContent = `Verificando ambiente... (${contador}s)`
            }
        }, 2000);

        alerta = setTimeout(() => {
            if(ativo)timer.textContent = "Alerta!Movimento detectado"
        }, 10000);
    })

    cancelar.addEventListener("click", function (e) {
        e.preventDefault;
        ativo = false;
        timer.textContent = `Alerta cancelado pelo operador aos ${contador}s`;
        clearInterval(sensor);
        clearTimeout(alerta);
    });
})