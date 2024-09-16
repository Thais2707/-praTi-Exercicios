let estoque = [
    {
        produto: "Livro: O Desafio de ferro",
        quantidade: 10,
        minimo: 5
    },
    {
        produto: "Livro: A luva de cobre",
        quantidade: 4,
        minimo: 5
    },
    {
        produto: "Livro: A chave de bronze",
        quantidade: 3,
        minimo: 5
    }
]

estoque.forEach (estoqueTotal => {
    if (estoqueTotal.quantidade < estoqueTotal.minimo){
        estoqueTotal.quantidade = estoqueTotal.quantidade * 2
    }
    }
)

console.log (estoque)