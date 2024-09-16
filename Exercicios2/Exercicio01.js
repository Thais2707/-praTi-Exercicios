// Manipulação de Objetos

let carro = {
    marca: "Fiat",
    modelo: "Idea Adventure",
    ano: 2016,
    cor: "Preta"
}

for (let key in carro){
    console.log (`${key}: ${carro[key]}`)
}