function verificaPrimo (numero){
    let contador = 0;
    for (let i = 1; i <= numero; i++) if (numero % i === 0)  contador++;
    if (contador == 2) return "O numero e primo"
    else return "O numero nao e primo"
}