const prompt = require('prompt-sync')()

let A = Number(prompt("Digite a medida do primeiro lado do triângulo: "))
let B = Number(prompt("Digite a medida do segundo lado do triângulo: "))
let C = Number(prompt("Digite a medida do terceiro lado do triângulo: "))

if (A < (B + C) && B < (A + C) && C < (A + B)){
    if (A === B && A === C && B === C){
        console.log('As medidas fornecidas formam um "Triângulo Equilatero".')
    } else if (A !== B && B !== C && C !== A){
        console.log('As medidas fornecidas formam um "Triângulo Escaleno".')
    } else if (A === B || A === C || B === C){
            console.log('As medidas fornecidas formam um "Triângulo Isósceles".')
    }
} else {
    console.log("As medidas fornecidas não formam um triângulo.")
}