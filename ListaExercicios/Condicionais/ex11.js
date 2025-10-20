const resultado = document.getElementById('resultado');
const idade = parseInt(prompt('Digite a primeira idade:'));
const idade2 = parseInt(prompt('Digite a segunda idade:'));
const idade3 = parseInt(prompt('Digite a terceira idade:'));

if (idade >= 18 && idade2 >= 18 && idade3 >= 18) {
    resultado.innerHTML = 'Todos são maiores de idade';
} else if (idade >= 18 || idade2 >= 18 || idade3 >= 18) {
    resultado.innerHTML = 'Pelo menos um é maior de idade';
} else if (idade < 18 && idade2 < 18 && idade3 < 18) {
    resultado.innerHTML = 'Todos são menores de idade';
}