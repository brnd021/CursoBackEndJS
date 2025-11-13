const numeros = [3, -5, 7, 10, -2, 0, 12, 8];
let i= 0
while(i<numeros.length){
    if(numeros[i]> 0 && numeros [i] != 0){
        console.log(numeros[i])
        i++
    }
        else if (numeros[i]<0 && numeros[i] != 0){
            i++
            continue;
        }
        else break;
}