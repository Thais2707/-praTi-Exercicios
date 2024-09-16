let empresa = {
    departamento: [
        {nome: "Recursos Humanos",
         funcionarios: [
            {nome: "Fulano"},   
            {nome: "Siclano"},   
            {nome: "Beltrano"}
         ] 
        },
        {nome: "Financeiro",
         funcionarios: [
            {nome: "João"},   
            {nome: "Maria"},   
            {nome: "Joana"}   
         ]
        },
        {nome: "Vendas",
         funcionarios: [
            {nome: "Claudio"},   
            {nome: "Creusa"},   
            {nome: "Gertudes"} 
         ]  
        }
    ]
}

for (let key in empresa.departamento){
    let departamento = empresa.departamento[key]
    console.log("---------------------------------------------------")
    console.log (`Departamento: ${departamento.nome}`)
    for (let funcionario of departamento.funcionarios){
        console.log(`Funcionario ${funcionario.nome} trabalha no departamento "${departamento.nome}" `)
    }

}