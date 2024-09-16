let funcionarios = [
    funcionario1 = {
        nome: "Fulano",
        cargo: "Gerente",
        salario: 5000
    },
    funcionario2 = {
        nome: "Siclano",
        cargo: "Vendedor",
        salario: 1700
    },
    funcionario3 = {
        nome: "Beltrano",
        cargo: "Auxiliar",
        salario: 1500
    }
]

for (let funcionario of funcionarios){
    if (funcionario.salario >= 1700){
        console.log(funcionario)
    }
}