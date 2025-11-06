const produto = {
  nome: 'Notebook',
  preco: 4500,
  especificacoes: {
    memoria: '16GB',
    armazenamento: '512GB SSD',
    processador: 'Intel Core i7'
  },
  disponivel: true
};

function mostrarProduto(produto){
    const {nome, preco, especificacoes:{memoria, armazenamento, processador},disponivel} = produto
    const disp = disponivel ? "Sim":"Nao"
    console.log(`        Produto: ${nome}
        Preço: R$ ${preco}
        Memória: ${memoria}
        Armazenamento: ${armazenamento}
        Processador: ${processador}
        Disponível: ${disp}`)
}

mostrarProduto(produto);