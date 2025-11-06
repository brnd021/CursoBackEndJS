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

produto.fornecedor = {marca:"DELL",country:"EUA"}
console.log(produto)

function mostrarProduto(produto){
    const {nome, preco, especificacoes:{memoria, armazenamento, processador},disponivel,fornecedor:{marca, country}} = produto
    const disp = disponivel ? "Sim":"Nao"
    console.log(`        Produto: ${nome}
        Preço: R$ ${preco}
        Memória: ${memoria}
        Armazenamento: ${armazenamento}
        Processador: ${processador}
        Disponível: ${disp}
        Marca: ${marca}
        Pais: ${country}`)
}

mostrarProduto(produto)