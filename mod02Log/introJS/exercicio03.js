alert("Bem-vindo ao site");
/*let nome = prompt("Qual seu nome?");
--if (nome){
    alert(``)
}*/
let nome = prompt("Qual é o seu nome?");
let resposta = confirm(`O nome digitado esta correto? ${nome}`);
if (resposta) {
    alert(`Bem-vindo ${nome}`);
} else {
    alert("Insira o nome novamente");
}
console.log(`Nome do usuario:${nome}`);