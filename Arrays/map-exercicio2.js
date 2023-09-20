const arrayNums = [1, 2, 3, 4];

const arrayNumsMultiplicado = arrayNums.map(multiplicaPorDez);

function multiplicaPorDez(num) {
  return num * 10;
}

console.log(arrayNumsMultiplicado);
