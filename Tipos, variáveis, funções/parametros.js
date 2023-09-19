// parâmetros de função

function soma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// parâmetros x argumentos

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(28, "Luis"))

function multiplica (numero1 = 1, numero2 = 1) { //definindo valores padrões para os parâmetros
    return numero1 * numero2
}

console.log(multiplica(soma(4,5), soma(3,3)))
console.log(multiplica(soma(4,5)))


function cumprimentar(){
    return 'Oi gente!'
   }
   
console.log(cumprimentar())


function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


   function comParametro(param) {
    console.log(param)
}
comParametro()