/**
    Faça um programa  que obtenha quatro notas de um aluno.
    Em seguida calcule a média simples das notas
    se a média for maior ou igual a 7 imprimir aluno aprovado, maior ou igual a 5 aluno em recuperação caso menor que 5 

 */

const nota1 = Number(prompt("informe a nota 1"))
const nota2 = Number(prompt("informe a nota 2"))
const nota3 = Number(prompt("informe a nota 3"))
const nota4 = Number(prompt("informe a nota 4"))

const media = (nota1 + nota2 + nota3 + nota4) / 4
let mensagem = ""

if (media >= 7) {
    mensagem = "Aluno aprovado"
} else {
    if (media >= 5) {
        mensagem = "Aluno em recuperação"
    } else {
        mensagem = "Aluno reprovado"
    }

}

document.body.appendChild(document.createTextNode(mensagem))
