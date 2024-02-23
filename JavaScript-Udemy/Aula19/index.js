/*
Primitivos (Imunáveis) - string, number, bolean, symbol, bigint, null, undefined. - Valores copiados.
Referência (Mutáveis) - array, object, function. - Valores passados por referência.
*/

let a = 'A';
let b = a; // Cópia (Apontam para lugares diferentes na memória).

console.log(a, b);

a = 'B';

console.log(a, b);


const arrayA = [1, 2, 3];
const arrayB = arrayA; // Referência (Apontam para o mesmo lugar na memória).

console.log(arrayA, arrayB);

arrayA.push(4);

console.log(arrayA, arrayB);

arrayB.pop();

console.log(arrayA, arrayB);


const arrayC = ['A', 'B', 'C'];
const arrayD = [...arrayC]; // Cópia independete.

console.log(arrayC, arrayD);

arrayD.pop();

console.log(arrayC, arrayD);


const A = {
    nome: 'Eduardo',
    sobrenome: 'Silva'
}

const B = A;

console.log(B);

A.nome = 'Augusto';

console.log(B);


const A1 = {
    nome: 'Eduardo',
    sobrenome: 'Silva'
}

const B1 = {...A1};

delete A1.nome;

console.log(A1, B1);