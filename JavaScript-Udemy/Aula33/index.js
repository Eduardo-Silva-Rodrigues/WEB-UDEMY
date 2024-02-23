// Atribuição via desestruturação em objetos:

const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Rodrigues',
    idade: 19,
    endereco: { 
        rua: 'Qualquer coisa',
        numero: 77
    }
}

const {nome: n, sobrenome: sn, idade: i, endereco: end,endereco: {rua: r, numero: num}} = pessoa;

console.log(n, sn, i, end, r, num);

const {nome: n2, sobrenome: sb, idade: i2, ...rest} = pessoa;

console.log(n2, sb, i2, rest);