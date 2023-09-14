// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString);
console.log(numero == numeroString);
console.log(numero + numeroString); //concatenação (transformou o número em string)
console.log(typeof (numero + numeroString)); //string

// conversão explícita

// Number()
// String()

console.log(numero + Number(numeroString)); //soma de dois números
console.log(typeof (numero + Number(numeroString))); //number

console.log(String(numero) + numeroString); //concatenação de duas strings
console.log(typeof (String(numero) + numeroString)); //string


console.log(Number('456a')) //NaN (Not a number)