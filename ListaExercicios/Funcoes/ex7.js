function contaCaractere (letra, palavra){
    let cont = 0;
    let array = palavra.split('');
    for(i=0;i < array.length;i++) if (array[i] == letra) cont++
    return cont
}