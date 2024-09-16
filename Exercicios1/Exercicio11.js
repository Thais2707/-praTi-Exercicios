const prompt = require ("prompt-sync")()

let soma = 0

for (let i = 1; i <= 5; i++){
    let num = Number(prompt("Escreva um numero: "))
    soma += num
}

console.log(soma)