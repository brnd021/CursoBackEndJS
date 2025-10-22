const livros =[
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
let ano = livros.filter(p=>p.ano >= 2015);

console.log(ano);