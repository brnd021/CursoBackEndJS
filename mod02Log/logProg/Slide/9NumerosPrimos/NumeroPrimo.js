const numeros =[];
const numerosPrimos = [];

for(let i = 2;i<=1000;i++) numeros.push(i)

for(let e of numeros){
    let contador = 0;
    let divi = 1;
    while (divi <= e) {
        if (e%divi === 0) contador++;
        divi++
    }
    if(contador == 2)numerosPrimos.push(e)
}    

console.table(numerosPrimos)