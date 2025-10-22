const pessoa = {
    nome: "Bernardo",
    cidade: "Rio de Janeiro",
    idade: 22
}
const carro = {
    marca: "Toyota",
    modelo:"Corolla",
    ano: 2020
}
console.log(carro);

carro.ano = 2024;

console.log(carro);

carro.cor = "prata";

console.log(carro);

delete carro.modelo;

console.log(carro);