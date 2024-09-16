let produtos = [
    produto1 = {
        nome: "Caneta",
        preco: 5,
        desconto: 10
    },
    produto2 = {
        nome: "Caderno",
        preco: 15,
        desconto: 10
    },
    produto3 = {
        nome: "Estojo",
        preco: 50,
        desconto: 10
    }
]

produtos.forEach(produto => {
    let descontoValor = (produto.preco * produto.desconto) / 100
    let precoNovo = produto.preco - descontoValor

    console.log (`O produto: ${produto.nome} esta de R$ ${produto.preco.toFixed(2)} por R$ ${precoNovo.toFixed(2)}`)
})