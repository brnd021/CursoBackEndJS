const idades = [22, 17, 35, 15, 40, -1, 29];
let cadastro = [];
let i = 0
while(i<=idades.length){
    if(idades[i]<18 && idades[i]>=0){
        i++;
        continue;
    }
    else if(idades[i]<0)break;
    else{
        cadastro.push(idades[i]);
        i++;
    }
}
console.log(cadastro)