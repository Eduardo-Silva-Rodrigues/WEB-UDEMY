// function saudacao(nome) {
//     return `Bom dia ${nome}!`
// }

// const variavel = saudacao('Eduardo');
// console.log(variavel);

// function soma(x = 1, y = 1) {
//     const resultado = x + y
//     return resultado
// }

// console.log(soma(2, 4))

// const raiz = (n) => n ** 0.5;

// console.log(raiz(12));

const num = Number(prompt('Digite um número para saber sua raiz quadrada:'));
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = num;

function raiz(x) {
    return x ** 0.5
}

const resultado = raiz(num);

document.body.innerHTML += `A raiz quadrada de ${num} é: <strong>${resultado.toFixed(2)}<strong/> <br />`;