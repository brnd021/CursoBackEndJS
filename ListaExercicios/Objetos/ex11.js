const biblioteca = {
    livros: [
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
    },],
    adicionarLivro: function(autor, titulo, ano){
        this.livros.push({autor:autor,titulo:titulo,ano:ano});
    },
    buscarPorAutor: function(nomeAutor){
        let livrosDoAutor = this.livros.filter(p=>p.autor === nomeAutor);
        if (livrosDoAutor.length>0) console.log(`Livros encontrados para o autor: "${nomeAutor}".`,"\n",livrosDoAutor)
            else console.log (`Nenhum livro encontrado para o autor: "${nomeAutor}".`)
    },
    listarLivros: function(){
        console.log(this.livros);
    }

}
biblioteca.buscarPorAutor("Steve Jobs");


