const prompt = require("prompt-sync") ()

let tabuada = Number(prompt("Digite o numero que deseja gerar a tabuada: "))

for (let i = 1; i <= 10; i ++){
    console.log (`${tabuada} * ${i} = `, tabuada * i)
}

