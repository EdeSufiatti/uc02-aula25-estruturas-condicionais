//crie um programa que leia dois valres numericos do user e em seguida calcule a sua soma 
//em seguida valide se o resultado da soma é maior 5, se sim então escreva "passou do limite"
// caso não seja maior que 5, escreva "Dentro do Limite"

//ENTRADA
//obter o valor primário e guardar na variavel valor1
//obber o valor secundário e guardar na variável valor2

const valor1 = Number(prompt("Informe o valor um"))
const valor2 = Number(prompt("Informe o valor dois"))
console.log(valor1, valor2)

//PROCESSAMENTO

//Somar as variáveis valor1 e valor2  e guardar em uma variável chamada soma
//validar se o valor é maior que cinco para aplicar as condições acima estabelecidas
const resultado = valor1 + valor2
console.log(resultado)
let mensagem = ""
if (resultado < 5) {
    mensagem = "Dentro do Limite"
}
else {
    mensagem = "Passou do Limite "
}

const percentual = (valor1 * 0.10) / valor2


if ((percentual >  10) && (percentual == 10)){
    
}



//SAIDA

const divRoot = document.getElementById("root")
divRoot.appendChild(document.createTextNode(resultado))
divRoot.appendChild(document.createTextNode(mensagem))