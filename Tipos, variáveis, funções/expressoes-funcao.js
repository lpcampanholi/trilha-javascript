// desclaração de função

console.log(apresentar())

function apresentar () {
    return "olá";
}

// expressão de função

const soma = function(num1, num2) {return num1 + num2}

console.log(soma(1,3))


// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.