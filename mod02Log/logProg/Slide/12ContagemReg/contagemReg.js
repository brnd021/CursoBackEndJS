let i = 10
const regre = setInterval(()=>{
    if(i<0){
        clearInterval(regre);
        console.log("Tempo esgotado!")
    }
    else console.log(i--);
},1000);


const timeout = setTimeout(()=>{
    console.log("Reiniciando contagem");
},13000);