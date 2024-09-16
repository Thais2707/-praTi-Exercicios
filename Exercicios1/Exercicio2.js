const prompt = require ('prompt-sync')()

let idade = parseInt(prompt("Escreva sua idade: "))

if (idade >= 0 && idade <= 11){
    console.log(`Com ${idade} anos, você é um(a) criança.`)
} else if (idade >= 12 && idade <= 17){
    console.log (`Com ${idade} anos, você é um(a) adolescente.`)
} else if (idade >= 18 && idade <= 60){
    console.log(`Com ${idade} anos, você é um(a) adulto(a).`)
} else {
    console.log(`Com ${idade} anos, você é um(a) idoso(a).`)
}