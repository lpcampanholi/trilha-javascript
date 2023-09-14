// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log (numero === numeroString)
console.log (numero == numeroString)
console.log (numero + numeroString) //concatenação (transformou o número em string)
console.log(typeof (numero + numeroString))

// conversão explícita

// Number()
// String()

console.log(numero + Number(numeroString))