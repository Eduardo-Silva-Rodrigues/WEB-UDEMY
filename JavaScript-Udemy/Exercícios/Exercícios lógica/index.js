// Escreva uma função que retorne o cubo de um número fornecido pelo usuário.
cubo = (n) => {return n ** 3};
console.log(cubo(2));

/* Escreva uma função em JavaScript que realize a conversão de uma temperatura 
   fornecida em graus Fahrenheit (F) para Celsius (C).*/

conversaoF = (n) => {return (n - 32) * 0.5556};
console.log(conversaoF(48));

/* Escreva uma função que retorne a área de um triângulo, a partir dos valores 
   de base e altura fornecidos.*/

areaTriangulo = (base, altura) => {return (base*altura)/2};
console.log(areaTriangulo(50,60));

/* Escreva uma função que encontre a área e o perímetro de um círculo, de acordo
   com o raio fornecido.*/

areaPerimetroCirculo = (r) => {return 3.14 * r ** 2};
console.log(areaPerimetroCirculo(80));

/* Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido.
   Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.*/

inverteNumeros = (n) => {
    return parseFloat(n.toString().split('').reverse().join('') * Math.sign(n));
}
console.log(inverteNumeros(842));

/* Escreva uma função que permita contar o número de vogais contidas em uma string fornecida
   pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o 
   número 4 (há 4 vogais nessa palavra). */

contadorVogais = (palavra) => {
    let cont = 0;
    palavra = palavra.toLowerCase();
    for (let i = 0; i < palavra.length; i++) {
        if (palavra.charAt(i) === 'a'||palavra.charAt(i) === 'e'||palavra.charAt(i) === 'i'||palavra.charAt(i) === 'o'||palavra.charAt(i) === 'u') {
            cont++
        }   
    }
    return cont;
}
console.log(contadorVogais('Eduardo'));

/* Escreva uma função que informe o retorno de um investimento (montante) com base nos valores
   do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.*/

montante = (cap, temp, juros) => {return cap * (1+juros) ** temp;};
console.log(montante(958,2,58))

