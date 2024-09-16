let alunos = [
    aluno1 = {
        nome: "Thais",
        nota1: 5,
        nota2: 9
    },
    aluno2 = {
        nome: "Junior",
        nota1: 10,
        nota2: 9
    },
    aluno3 = {
        nome: "Samuel",
        nota1: 7,
        nota2: 6
    }
]

for (let aluno of alunos){
    let media = (aluno.nota1 + aluno.nota2) / 2
    console.log (`A média de ${aluno.nome} é ${media.toFixed(2)}`)
}