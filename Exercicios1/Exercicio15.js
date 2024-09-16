let num1 = 1
let num2 = 1
let soma

console.log(`Os primeiros 10 numeros da sequencia de Fibonacci são: `)

for (let i = 1; i <= 10; i++){
    console.log(num1)

    soma = num1 + num2

    num1 = num2 
    num2 = soma
}


