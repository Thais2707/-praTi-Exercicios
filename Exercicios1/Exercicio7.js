const prompt = require ("prompt-sync")()

let quant = Number(prompt ("Qual a quantidade de maças que deseja comprar: "))

if (quant === 0){
    console.log("Escreva uma quantidade maior que 0.")
} else if (quant >= 1 && quant <= 11){
    let total = (quant * 0.30)
    console.log(`Sua compra de ${quant} maças fica no total R$ ${total}.`)
} else {
    let total = (quant * 0.25)
    console.log(`Sua compra de ${quant} maças fica no total R$ ${total}.`)
}