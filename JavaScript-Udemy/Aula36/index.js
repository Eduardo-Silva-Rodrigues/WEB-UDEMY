// For in lê os indices ou chaves dos objetos;
//                0       1       2
const frutas = ['Pera', 'Maça', 'Uva'];

for (let i = 0; i < frutas.length; i++) {

}

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {nome: 'Luiz', sobrenome: 'Miranda', idade: 29}

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}