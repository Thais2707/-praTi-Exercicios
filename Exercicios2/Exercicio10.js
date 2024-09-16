let vendas = [
    {
        produto: "Arroz",
        quantidade: 5,
        preco: 11
    },
    {
        produto: "Farinha",
        quantidade: 12,
        preco: 9
    },
    {
        produto: "Massa",
        quantidade: 8,
        preco: 13
    }
]

let totalGeral = 0

vendas.forEach (todasVendas => {
    let totalVendas = todasVendas.quantidade * todasVendas.preco
    totalGeral += totalVendas
})

console.log (`O total de vendas foi R$ ${totalGeral.toFixed(2)}`)