// == (comparação implícita)
// compara apenas os valores das variáveis

const numero = 5
const texto = "5"

console.log(numero == texto)

// === (comparação explícita)
// compara os valores e os tipos das variáveis
console.log(numero === texto)

// typeof - descobrir o tipo de dado que está sendo salvo na variável

console.log(typeof numero)
console.log(typeof texto)

// == só compara o valor
// === copara o valor e o tipo de dado

// sempre usar o === (boas práticas)

// usar sempre conversões explícitas:

Number()
String()