// Try, catch, throw (tratamento de erros):

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números!')
    }
    return x + y;
}

try {
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch (error) {
    // console.log(error);
    console.log('Algo mais amigável para o usuário.');
}









// function numero (num) {
//     if (typeof num !== 'number') {
//         throw new Error('num tem que ser number');
//     }

//     return num;
// }


// try {
//     console.log(numero(93))
//     console.log(numero('90'))
// } catch (error) {
//     console.log(error);
// }









function contadorDeVogais(palavra) {
    if (typeof palavra !== 'string') {
        throw new Error('Numeros não são aceitos!')
    }

    let contador = 0;
    palavra = palavra.toLowerCase();

    
    for (let i = 0; i < palavra.length; i++) {
        if (palavra.charAt(i) === 'a' || palavra.charAt(i) === 'e' || palavra.charAt(i) === 'i' || palavra.charAt(i) === 'o' || palavra.charAt(i) === 'u') {
            contador++
        }
    }

    return contador;
}

try {
    console.log(contadorDeVogais('4587'));
} catch (Error) {
    console.log(Error);
}








function censurador(frase) {
    return console.log(frase.replace(/caralho/g, '#######'));
}
censurador('Cade caralho');
