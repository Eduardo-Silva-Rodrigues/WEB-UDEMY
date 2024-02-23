// Escreva uma função que receba dois números e retorne o maior deles;

// Minha solução:
function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2
    } else {
        return num1, num2;
    }
}

func = maiorNumero(78,78);
console.log(func);

// Solução do professor:
maiorNumero2 = (x, y) => {return x > y ? x : y};
console.log(maiorNumero2(12,20));