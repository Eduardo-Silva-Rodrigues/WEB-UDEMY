let num1 = 1500.456464654646;
let num2 = 2.5;

console.log(num1.toString + num2); // .toString = Retorna uma String temporariamente.

console.log(num1.toString(2)); // .toString(2) = Retorna um valor binário.

console.log(num1.toFixed(2)); // .toFixed() = Altera o tamanho das casas decimais.

console.log(Number.isInteger(num1)); // Number.isInteger = Verifica se o número é inteiro.

console.log(Number.isNaN(num1)); // Number.isInteger = Verifica se o número é um Not a Number.

// Resolvendo imprecisões:

let num3 = 0.7;
let num4 = 0.1;

console.log(num3 + num4);

num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;

num3 = Number(num3.toFixed(2));

console.log(num3)

console.log(Number.isInteger(num3));