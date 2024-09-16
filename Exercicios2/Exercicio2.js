let livro = {
    titulo: "A Paciente Silenciosa",
    autor: "Alex Michaelides",
    anoPublicacao: 2022,
    genero: "Misterio"
}
let contador = 0

for(let propriedade in livro){
    if (propriedade === "editora"){
    contador++
    }
}

if (contador === 0){
    livro.editora = "Record"
}

console.log(livro)
