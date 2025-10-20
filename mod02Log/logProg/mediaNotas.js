document.addEventListener('DOMContentLoaded', function() {
    const nota1 = document.getElementById('nota1');
    const nota2 = document.getElementById('nota2');
    const nota3 = document.getElementById('nota3');
    const nota4 = document.getElementById('nota4');
    const botao = document.getElementById('enviar');
    const resultado = document.getElementById('resultado');

    botao.addEventListener('click', function() {
        let n1 = nota1.value;
        let n2 = nota2.value;
        let n3 = nota3.value;
        let n4 = nota4.value;
        let media =(parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;

        if (isNaN(media)){
            resultado.textContent = 'Por favor, insira todas as notas corretamente.';            
        }else if (media >= 7) {
            resultado.textContent = `Média: ${media.toFixed(2)} - Aprovado`;
        } else if (media >= 5 ){
            resultado.textContent = `Média: ${media.toFixed(2)} - Recuperação`;
        } else {
            resultado.textContent = `Média: ${media.toFixed(2)} - Reprovado`;
        }
    });
});