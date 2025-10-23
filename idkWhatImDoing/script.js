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
const autor1 = document.getElementById("autor 1");
const titulo1 = document.getElementById("titulo 1");
const ano1 = document.getElementById("ano 1");

const autor2 = document.getElementById("autor 2");
const titulo2 = document.getElementById("titulo 2");
const ano2 = document.getElementById("ano 2");

const autor3 = document.getElementById("autor 3");
const titulo3 = document.getElementById("titulo 3");
const ano3 = document.getElementById("ano 3");

autor1.textContent = biblioteca[0].autor;
titulo1.textContent = biblioteca[0].titulo;
ano1.textContent = biblioteca[0].ano;
autor2.textContent = biblioteca[1].autor;
titulo2.textContent = biblioteca[1].titulo;
ano2.textContent = biblioteca[1].ano;
autor3.textContent = biblioteca[2].autor;
titulo3.textContent = biblioteca[2].titulo;
ano3.textContent = biblioteca[2].ano;
