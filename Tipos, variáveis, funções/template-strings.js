const nome = "Luis";
const idade = 2021 - 1994;
const cidadeDeNascimento = "Maringá";

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " anos e nasci na cidade de " + cidadeDeNascimento + ".";

const templateString = `Meu nome é ${nome}, minha idade é ${idade} ano e nasci na cidade de ${cidadeDeNascimento}.`

console.log(apresentacao);
console.log(templateString);

