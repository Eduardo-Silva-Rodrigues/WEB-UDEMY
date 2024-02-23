/*
&& - AND - E.
|| - OR - OU.
! - NOT - NÃO.
*/

const usuario = 'Eduardo';
const senha = '1234';

const vaiLogar01 = usuario === 'Eduardo' && senha === '123'; //And.
console.log(vaiLogar01);

const vaiLogar02 = usuario === 'Eduardo' || senha === '123';  // Or.
console.log(vaiLogar02);

console.log(!false); // Not.