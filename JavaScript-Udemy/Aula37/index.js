const nome = ['Eduardo', 'Luiz', 'Otávio'];
const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Rodrigues'
};


// For clássico - Geralmente com iteráveis (Strings, arrays);
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('=================')

// For in - Retorna o índice ou chave (Strings, arrays ou objetos);
for (let i in nome) {
    console.log(nome[i]);
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

console.log('=================')

// Retorna apenas o valor em si (Iteráveis: Strings e arrays);
for (let valor of nome) {
    console.log(valor);
}