const prompt = require ("prompt-sync")()

let num = parseInt(prompt("Escreva um numero para descobrir seu fatorial: "))
let result = 1

for (let fatorial = 1; fatorial <= num; fatorial++){
    result = result * fatorial
}

console.log (result)
