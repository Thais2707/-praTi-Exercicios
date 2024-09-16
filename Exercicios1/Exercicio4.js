const prompt = require('prompt-sync')()

console.log("Escolha uma das opções: ")
console.log("1 - Exibir mensagem de boas vindas.")
console.log("2 - Calcular a média de duas notas.")
console.log("3 - Sair do menu.")
let opcao = Number(prompt("Escolha a opção desejada: "))

switch (opcao){
    case (1):
        console.log ("Bem vindo(a) ao programa!")
        break
    case (2):
        let nota1 = parseInt (prompt("Digite a primeira nota: "))
        let nota2 = parseInt (prompt("Digite a segunda nota: "))
        let media = (nota1 + nota2) / 2
        console.log ("A media das notas é: ", media)
        break
    case(3):
        console.log("Obrigada por usar o programa, bye bye!")
        break
    default:
        console.log("Opção invalida, escolha entre 1,2 e 3.")
        break
} 
