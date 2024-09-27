const divRoot = document.getElementById("root")
const numero = Number(prompt("Informe o valor, para saber se é par ou ímpar"))

const resto = numero % 2
console.log(resto)

let mensagem = ""

if (resto === 0) {
    mensagem = `${numero}é  um numero par`

} else {
    mensagem = "é um numero ímpar"
}



divRoot.appendChild(document.createTextNode(mensagem))