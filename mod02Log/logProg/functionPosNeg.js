function classificaNumero(numero) {
    if (numero > 0) {
        return 'Positivo';
    } else if (numero < 0) {
        return 'Negativo';
    } else {
        return 'Zero';
    }
}

const numero = 2;
console.log(`O número ${numero} é ${classificaNumero(numero)}.`);