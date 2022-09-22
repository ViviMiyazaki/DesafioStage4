let firstNumber = prompt ('Digite o primeiro número:')
let secondNumber = prompt ('Digite o segundo número:')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const soma = firstNumber + secondNumber
const subtração = firstNumber - secondNumber
const multiplicação = firstNumber * secondNumber
const divisão = firstNumber / secondNumber
const restoDiv = firstNumber % secondNumber

alert ('Resultado da soma entre os 2 números: ' + soma)
alert ('Resultado da subtração entre os 2 números: ' + subtração)
alert ('Resultado da multiplicação entre os 2 números: ' + multiplicação)
alert ('Resultado da divisão entre os 2 números: ' + divisão.toFixed(2))
alert ('Resultado do resto da divisão entre os 2 números: ' + restoDiv)

const parImpar = (soma % 2 )

if(parImpar == 0) {
alert ('A soma dos dois números é um número par:' + soma )
} else if (parImpar != 0) {
  alert ('A soma dos dois números é um número impar: ' + soma)
};

if(firstNumber == secondNumber) {
  alert ('Os número são iguais')
} else if (firstNumber != secondNumber) {
  alert ('Os números são diferentes')
}

