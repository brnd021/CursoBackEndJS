function contaVogal(palavra){
    let array = palavra.split('').toLowerCase();
    let cont = 0;
    for(i=0;i<array.length;i++) if (array[i]== "a" || array[i]== "e" || array[i] == "i" || array[i] == "o" || array[i] == "u") cont ++;
    return cont;
}
