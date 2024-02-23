// Operador de repetição While:

let i = 0;

while (i <= 10) { // While = Enquanto a condição for verdadeira o código será executado;
    console.log(i);
    i++;
}

console.log('===========○')

const min = 1;
const max = 50;

let r = Math.random() * (max - min) + min;
console.log(Math.floor(r))

function random(min, max) {
    r = Math.floor(Math.random() * (max - min) + min);
    return r;
}

while (r !== 10) {
    console.log(r = random(10, 50));
}

// Operador de repetição Do While:

console.log('===========○')

r = 10;

do { // Primeiro executa o código e depois verifica a condição;
    console.log(r = 10);
} while (r !== 10); // O código sempre será executado pelo menos 1 vez;