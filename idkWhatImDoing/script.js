const botao = document.getElementById("botao");
const bodyTabela = document.getElementById("tabela");

const biblioteca = [
    { autor: 'Bill Gates', titulo: 'O Caminho à Frente',ano: 1995}, 
    { autor: 'Walter Isaacson' , titulo: 'Steve Jobs', ano: 2022},
    { autor: 'Suzanne Collins', titulo:  'A Esperança: O Último Livro de Jogos Vorazes', ano: 2011}
];

function gerarTabela(){
    let html ='';
    biblioteca.forEach((livro,p)=>{
    html += `
        <tr>
            <th scope="row">${p + 1}</th>
            <td>${livro.autor}</td>
            <td>${livro.titulo}</td>
            <td>${livro.ano}</td>
        </tr>`
    })
    bodyTabela.innerHTML = html;
};

gerarTabela();

botao.addEventListener('click', function(e) {
    e.preventDefault();
    const novoAutorInput = document.getElementById("novo-autor");
    const novoTituloInput = document.getElementById("novo-titulo");
    const novoAnoInpunt = document.getElementById("novo-ano");

    const autor = novoAutorInput.value;
    const titulo = novoTituloInput.value;
    const ano = parseInt(novoAnoInpunt.value);
    if(autor && titulo && !isNaN(ano)){
        biblioteca.push({
        autor: autor,
        titulo: titulo,
        ano: ano
        });
        gerarTabela();
    }else alert("Insira os dados corretamente:");
});