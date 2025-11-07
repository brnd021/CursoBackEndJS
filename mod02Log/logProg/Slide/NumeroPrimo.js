let i = 1;
const numeros =[];
const numerosPrimos = [1];
for(;i<=1000;i++) numeros.push(i)
for(let e of numeros){
    let contador = 0;
    let divi = 0;
    while (divi <= e) {
        if (e%divi === 0) contador++;
        divi++
    }
    if(contador == 2)numerosPrimos.push(e)
}    
console.log(numeros) 
console.table(numerosPrimos)