let carrinho = {
    itens: [
        {Nome: "Caneta Yoda", quantidade: 3, precoUnitario: 1.25},
        {Nome: "Caneta Martelo", quantidade: 2, precoUnitario: 1.50},
        {Nome: "Caneta Astronauta", quantidade: 4, precoUnitario: 5},
        {Nome: "Caneta Pompom", quantidade: 7, precoUnitario: 0.75},
    ]
}
let totalCarrinho = 0

carrinho.itens.forEach(produtos => {
    totalCarrinho += produtos.quantidade * produtos.precoUnitario
})

console.log (`O valor total do carrinho é R$ ${totalCarrinho}`)