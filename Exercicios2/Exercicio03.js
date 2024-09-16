let objeto = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
    num5: 5
}

let novoObjeto = {}

function maiorNum (objeto){
    for (let key in objeto){
        if (objeto[key] >= 3){
            novoObjeto[key] = objeto[key]
        }
    }

    return novoObjeto
} 

novoObjeto = maiorNum (objeto)

console.log (novoObjeto)
