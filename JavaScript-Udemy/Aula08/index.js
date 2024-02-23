/*Luíz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 de altura
e seu IMC é de 25.925984268448 */

const nome = 'Eduardo Silva';
const sobrenome = 'Rodrigues';
const idade = 19;
const peso = 49;
const alturaEmM = 1.67;
let indiceDeMassaCorporal;
let anoNascimento;

indiceDeMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;

// Templates Strings.

console.log(`${nome} ${sobrenome}  tem  ${idade}  anos, pesa ${peso} kg,`);
console.log(`tem ${alturaEmM}m, seu IMC é de ${indiceDeMassaCorporal}`);  
console.log(`e o ano de seu nascimento é ${anoNascimento}`);