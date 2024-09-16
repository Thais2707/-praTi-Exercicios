const prompt = require ("prompt-sync")()

let num 
let i = 0
let soma = 0

while (num !== 0){
    num = parseFloat(prompt("Digite um numero decimal (ou 0 para finalizar): "))
    soma += num
    i++
}

console.log("A media aritmetica dos numeros digitados é: ", soma / i)

