// Timestamp unix ou época unix;

const maisTresHoras = 60 * 60 * 8 * 1000;
const umDia = 60 * 60 * 72 * 1000;
const date01 = new Date(0 + maisTresHoras + umDia);

console.log(date01);

console.log('================================')

// Date (ano, mes, dia, hora, minuto, segundo, millisegundo);

const date02 = new Date(2024, 0, 29, 14, 4, 48, 999); //Janeiro 0 / Dezembro 11;
console.log(date02);

console.log('================================')

// Date(Data String);

const date03 = new Date('2024-01-29T14:06:25.999'); // Ou '2024-01-29 14:06:25.999'
console.log(date03.toString());

console.log('================================')

// Métodos get para pegar dia, mes, ano, hora, minuto, segundo, millisegundo;

const date04 = new Date('2024-01-29T14:06:25.999');
console.log('Dia:', date04.getDate());
console.log('Mês:', date04.getMonth());
console.log('Ano:', date04.getFullYear());
console.log('Hora:', date04.getHours());
console.log('Minuto:', date04.getMinutes());
console.log('Segundo:', date04.getSeconds());
console.log('Millisegundo:', date04.getMilliseconds());
console.log('Dia da semana:', date04.getDay());
console.log(date04.toString());
console.log(Date.now());

console.log('================================')

// Função de formatação de data usando Date;

function zeroAEsquerda (num) { // Função para colocar 0 a esquerda dos números menores que 10;
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {    
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());
    const millisegundo = zeroAEsquerda(data.getMilliseconds());
    const diaSemana = zeroAEsquerda(data.getDay());

    console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}.${millisegundo} ${diaSemana}`)
}

const data05 = new Date();
formataData(data05);