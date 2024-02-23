// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisivel por 3 = Fizz;
// Número é divisivel por 5 = Buzz;
// Número é divisível por 3 e 5 = Fizz e Buzz;
// Número não é divisivel por 3 e 5 = Retorne o próprio número;
// Checar se o número é realmente um número = Retorne o próprio número;
// Use a função com números de 0 a 100;

// Minha solução:
const fizzBuzz = (i) => {    
    while (i < 100) {
        if (!i) {
            console.log('Olá');
            continue;
        } else if (i % 5 === 0) {
            console.log('Buzz');
            i++;
        } else if (i % 3 === 0) {
            console.log('Fizz');
            i++;
        } else if (i % 3 === 0 && i % 5 === 0 ) {
            console.log('Fizz e Buzz');
            i++;
        } else if (i % 3 !== 0 && i % 5 !== 0) {
            console.log(i);
            i++;
        }
    }
}

console.log(fizzBuzz('s'))

// Solução do professor:
function fizzBuzzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 5 === 0) return 'Buzz';
    if (numero % 3 === 0) return 'Fizz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzzz(i));
}