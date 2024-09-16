const prompt = require("prompt-sync")()

let valor1 = Number(prompt("Escreva o primeiro valor: "))
let valor2 = Number(prompt("Escreva o segundo valor: "))

if (valor1 === valor2){
    console.log("Os valores digitados são iguais, por favor, digite valores diferentes.")
} else if (valor1 < valor2){
    console.log (valor1)
    console.log (valor2)
} else {
    console.log (valor2)
    console.log (valor1)
}