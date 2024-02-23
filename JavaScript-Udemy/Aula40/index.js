// Break e Continue:

const numeros = [1,2,3,4,5,6,7,8,9];

let i = 0

while (i < numeros.length) {
    let numero = numeros[i];
    i++;

    if (numero === 2) {
        console.log('Pulei o número 2.')
        continue; // Pula uma parte de iteração que está sendo executada;
    }

    console.log(numero);

    if(numero === 7) {
        console.log('7 encontrado, saindo...')
        break; // Interrompe o código assim que a condição se torna verdadeira;
    }
}

console.log('===========================○')

let ind = 0

do {
    let numero = numeros[ind];
    ind++
    
    if (numero === 4) {
        console.log('Pulei o 4!')
        continue;
    }

    if (numero === 6) {
        console.log('Encontrei o 6, saindo...');
        break;
    }

    console.log(numero);
} while (ind < numeros.length);