// Atribuição via desestruturação:

let a = 'A'; // B;
let b = 'B'; // C;
let c = 'C'; // A;

[a, b, c] = ['B', 'C', 'B']; // O array foi desestruturado, para então ter novos itens atribuidos;

console.log(a, b, c)

// Atribuição via desestruturação usando o operador '...':

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [um, dois, tres, ...rest] = numeros;

console.log(um, dois, tres);
console.log(rest);

const spread = [...rest];

const outrosNumeros = [...spread];

console.log(outrosNumeros);

// Atribuição via desestruturação usando array dentro de array;

//                  0          1          2
//               0  1  2    0  1  2    0  1  2
const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(arrays[0][2]); // Capturando item de uma lista dentro de outra lista;

const [, , [, , num]] = arrays; // Atribuição via desestruturação de array dentro de array;

console.log(num);

const [lista1, lista2, lista3] = arrays; /* Capturando as listas dentro da lita em variáveis
                                            individuais, para depois capturar seus itens;*/

console.log(lista3[1]);