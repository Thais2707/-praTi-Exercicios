const prompt = require ('prompt-sync')()

let num1 = parseInt(prompt("Escreva um numero para descobrir se é par ou impar: "))

if(num1 % 2 === 0){
    console.log(`O numero ${num1} é par.`)
} else {
    console.log(`O numero ${num1} é impar.`)
}