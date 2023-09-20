const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [numerosPares, numerosImpares]

const numerosSeparados = [...numerosPares, ...numerosImpares] //espalhar elementos do array

console.log(numeros)
console.log(numerosSeparados)

// const num1 = 1
// const num2 = 2
// É a mesma coisa que:
const [num1, num2] = [1, 2]
console.log(num1, num2)

const [numero1, numero2, ...outrosNumeros] = [1, 2, 3, 4, 5]
console.log(numero1, numero2, outrosNumeros)

const [nome1 = 'Ju'] = []
console.log(nome1)