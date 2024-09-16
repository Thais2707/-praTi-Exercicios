const prompt = require('prompt-sync')()

let peso = parseFloat(prompt("Digite o seu peso (use . como separador decimal): "))
let altura = parseFloat(prompt("Digite a sua altura (use . como separador decimal): "))

let imc = peso / (altura * altura)

if (imc <= 18.5){
    console.log(`Seu IMC é ${imc.toFixed(2)}, classificado como "Abaixo do peso".`)
} else if (imc >= 18.5 && imc <= 24.9){
    console.log(`Seu IMC é ${imc.toFixed(2)}, classificado como "Peso normal".`)
} else if (imc >= 25 && imc <= 29.9){
    console.log(`Seu IMC é ${imc.toFixed(2)}, classificado como "Sobrepeso".`)
} else {
    console.log(`Seu IMC é ${imc.toFixed(2)}, classificado como "Obesidade".`)
}
