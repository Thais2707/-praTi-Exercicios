let clientes = [
    {
        nome: "Fulano",
        idade: 55,
        cidade: "Canoas"
    },
    {
        nome: "Siclano",
        idade: 26,
        cidade: "Canoas"
    },
    {
        nome: "Beltrano",
        idade: 35,
        cidade: "Canoas"
    }
]
let contador = 0

clientes.forEach(cliente => {
    if (cliente.idade > 30){
        contador++
    }
})

console.log (`Na lista de clientes existem ${contador} clientes com mais de 30 anos.`)