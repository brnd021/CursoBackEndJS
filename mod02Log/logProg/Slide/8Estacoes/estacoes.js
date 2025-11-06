function verificaEstacao(mes){
    if(mes === "junho" || mes === "julho" || mes === "agosto") return "Inverno"
    if(mes === "setembro" || mes === "outubro" || mes === "novembro") return "Primavera"
    if(mes === "dezembro" || mes === "janeiro" || mes === "fevereiro") return "Verão"
    if(mes === "março" || mes === "marco" || mes === "abril" || mes === "maio") return "Outono"
    alert ("Valor inválido")
}
document.addEventListener('DOMContentLoaded',function(){
    const mes = document.getElementById("mes");
    const botao = document.getElementById("botao");
    const resultado = document.getElementById("resultado");
    
    botao.addEventListener('click', function(event){
        event.preventDefault()
        const inputMes = mes.value.toLowerCase().trim()
        const estacao = verificaEstacao(inputMes)
        resultado.textContent = `A estação do ano é ${estacao}`
    })
})
