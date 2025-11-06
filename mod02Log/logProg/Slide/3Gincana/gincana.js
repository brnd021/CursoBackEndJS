const numero = (Math.random() * 100).toFixed(0);
const Verificando = true;
while(Verificando){
    let palpite = parseFloat(prompt('Digite um numero entre 0 e 100:'));
    if (palpite == numero){
        alert(`Parabens! Voce acertou o numero ${numero}`);
        break;
    } else if (palpite < numero){
        alert('Tente um numero maior!');
    } else if (palpite > numero){
        alert('Tente um numero menor!');
    }
}
resultado.innerHTML = `O numero sorteado foi: ${numero}`;