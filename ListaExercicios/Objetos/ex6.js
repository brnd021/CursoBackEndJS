const produto = {
    nome : "teclado",
    preco : 200,
    estoque : 600
}

for( let propriedade in produto){
    console.log(propriedade,produto[propriedade]);
}