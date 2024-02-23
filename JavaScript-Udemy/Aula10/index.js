// Aritméticos:

/**
 *  Adição: +
 *  Subtração: -
 *  Multiplicação: *
 *  Divisão: /
 *  Potenciação: **
 *  Resto de divisão: %
 * 
 *  Incremento: ++
 *  Decremento: --
 **/

const num1 = 5;
const num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num2 / num1);
console.log(num2 ** num1);
console.log(num2 % num1);

// Incremento e Decremento:

let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4 
contador++; // 5
console.log(contador); // 5

let contador2 = 10;
contador2--; // 9
contador2--; // 8
contador2--; // 7
contador2--; // 6
console.log(contador2); //6

let contador3 = 1;
console.log(++contador3) //Pré-Incremento

let contador4 = 10;
console.log(--contador4); //Pré-Decremento

// Operadores de atribuição:

let contador5 = 0;
contador5 += 2
contador5 += 2
contador5 += 2
console.log(contador5); // 6 

let contador6 = 2;
contador6 *= 2
contador6 *= 2
contador6 *= 2
console.log(contador6); // 16

// NaN = Not a Number:

const num3 = 5;
const num4 = 'Eduardo';
console.log(num3 * num4);

// Converter String para Number (parseInt = Inteiros / parseFloat = Decimais):

const num5 = 5;
const num6 = parseInt('10');
console.log(num5 + num6);

const num7 = 5;
const num8 = parseFloat('10.7');
console.log(num7 + num8);

const num9 = 5;
const num10 = Number('20');
console.log(num9 + num10);

