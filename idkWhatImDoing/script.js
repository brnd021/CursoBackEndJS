const biblioteca = [
    { 
        autor: 'Bill Gates', 
        titulo: 'O Caminho à Frente',
        ano: 2014
    }, 
    { 
        autor: 'Steve Jobs',
        titulo: 'Walter Isaacson',
        ano:2020
    },
    {
        autor: 'Suzanne Collins',
        titulo:  'A Esperança: O Último Livro de Jogos Vorazes',
        ano:2015
    }
]

function gerarTabela(){
    for(let i = 0; i <= biblioteca.length; i++){
    const autor = document.getElementById(`autor ${i}`);
    const titulo = document.getElementById(`titulo ${i}`);
    const ano = document.getElementById(`ano ${i}`);

    autor.textContent = biblioteca[i].autor;
    titulo.textContent = biblioteca[i].titulo;
    ano.textContent = biblioteca[i].ano;
}
}
gerarTabela();