// const pessoa01 = {
//     nome: 'Eduardo',
//     sobrenome: 'Silva',
//     idade: 19
// }

// console.log(pessoa01.nome);
// console.log(pessoa01.sobrenome);
// console.log(pessoa01.idade);


// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa01 = criaPessoa('Eduardo', 'Rodrigues', 19);
// const pessoa02 = criaPessoa('Gustavo', 'Taquiwi', 19);
// const pessoa03 = criaPessoa('Jociane', 'Silva', 19);
// const pessoa04 = criaPessoa('Davi', 'Marinelli', 19);

// console.log(pessoa01.nome, pessoa03.nome)


// const pessoa01 = {
//     nome: 'Eduardo',
//     sobrenome: 'Silva',
//     idade: 19,

//     fala() {
//         console.log(`Minha idade atual é ${this.idade}`);
//     },

//     incrementoIdade() {
//         this.idade++;
//     }
// };

// pessoa01.fala();
// pessoa01.incrementoIdade();
// pessoa01.fala();
// pessoa01.incrementoIdade();
// pessoa01.fala();
// pessoa01.incrementoIdade();
// pessoa01.fala();
// pessoa01.incrementoIdade();
// pessoa01.fala();


const nome = prompt('Digite seu nome:');
const sobrenome = prompt('Digite seu sobrenome:');
const idade = Number(prompt('Digite sua idade:'));
const titulo = document.getElementById('nome-completo');

titulo.innerHTML = nome + ' ' + sobrenome;

const pessoa = function() {
    return {nome, sobrenome, idade};
}

pessoa(nome, sobrenome, idade);

document.body.innerHTML += `<p>Seu nome é: <strong>${nome}</strong><br/><p>`;
document.body.innerHTML += `<p>Seu sobrenome é: <strong>${sobrenome}</strong><br/><p>`;
document.body.innerHTML += `<p>Sua idade é: <strong>${idade}</strong><p>`;