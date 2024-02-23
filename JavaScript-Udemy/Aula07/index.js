// O valor de uma constante não pode ser alterado.

const nome = 'João';
console.log(nome);

// O valor de uma constante pode evoluir em outra constante.

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

console.log(resultado);
console.log(resultadoDuplicado);

// Tem como verificar o tipo da constante / variável.

console.log(typeof primeiroNumero);

// Concatenação de string.

const numeroCinco = '5';
const numeroDez = 10;

console.log(numeroCinco + numeroDez);
console.log(typeof(numeroCinco + numeroDez)); //string