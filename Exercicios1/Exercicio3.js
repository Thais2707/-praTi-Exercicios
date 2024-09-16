const prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Escreva uma nota de 0 a 10: "))

if (nota >= 0 && nota <= 3){
    console.log("Você esta reprovado.")
} else if (nota >= 4 && nota <= 6 ){
    console.log("Você esta em recuperação.")
} else {
    console.log("Você esta aprovado.")
}