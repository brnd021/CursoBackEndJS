function Verificando(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    }   else {
        return 'Impar';
    }
}

const numero = 3;
console.log(`O número ${numero} é ${Verificando(numero)}.`);