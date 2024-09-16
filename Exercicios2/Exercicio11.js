let pedidos = [
    {
        cliente: "Fulano",
        produto: "Caderno",
        quantidade: 3
    },
    {
        cliente: "Siclano",
        produto: "Mochila",
        quantidade: 5
    },
    {
        cliente: "Beltrano",
        produto: "Caneta",
        quantidade: 9
    },
    {
        cliente: "Fulano",
        produto: "Beterraba",
        quantidade: 20
    }
]

let totalPorCliente = {}

pedidos.forEach(pedido => {
    if (totalPorCliente[pedido.cliente]){
        totalPorCliente[pedido.cliente] += pedido.quantidade
    } else {
        totalPorCliente[pedido.cliente] = pedido.quantidade
    }
})

for (let cliente in totalPorCliente){
    console.log(`Cliente ${cliente} comprou ${totalPorCliente[cliente]} itens.`)
}
