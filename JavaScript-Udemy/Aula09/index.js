// A variável de LET não pode ser redeclarada, mas a de VAR pode.

var nome = 'Eduardo';
var nome = 'Pedro';

console.log(nome);

// NÃO CRIE VARIÁVEIS SEM ESPECIFICAÇÃO:

nome = 'João';
console.log(nome);

// Tipos primitivos:

const nome1 = 'Eduardo'; // String.
const nome2 = "Eduardo"; // String.
const nome3 = `Eduardo`; // String.
const num1 = 5; // Number.
const num2 = 15.80; // Number.
let nomeAluno; // Undefined = Não aponta para nenhum lugar na memória.
const sobrenomeAluno = null; // Null = Não aponta para nenhum lugar na memória.
const aprovado = false; // Boolean = true, false.

let a = 2;
let b = a;

console.log(a, b) // 2, 2.

a = 3

console.log(a, b) // 3, 2.