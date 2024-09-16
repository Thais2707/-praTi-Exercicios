let filmes = [
    {
        titulo: "O Exorcista",
        diretor: "William Friedkin",
        anoLancamento: 1973
    },
    {
        titulo: "O Iluminado",
        diretor: "Stanley Kubrick",
        anoLancamento: 1980
    },
    {
        titulo: "Hereditario",
        diretor: "Ari Aster",
        anoLancamento: 2018
    },
]

let titulos = []

filmes.forEach(filme => {
    titulos.push (filme.titulo)
})

console.log (titulos)