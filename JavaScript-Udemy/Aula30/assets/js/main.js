// const texto = document.querySelector('#texto');

// function getDate() {
//     return new Date();
// }

// const date = getDate();

// function leftZero(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function getDayMonth() {
//     return date.getDate();
// }

// function getYear(date) {
//     return date.getFullYear();
// }

// function getHoursData(date) {
//     return leftZero(date.getHours());
// }

// function getMinutesData(date) {
//     return leftZero(date.getMinutes());
// }

// function formatDayWeek(date) {
//     let numberDayWeek = date.getDay();

//     switch (numberDayWeek) {
//         case 0:
//             return numberDayWeek = 'Domingo';
//         case 1:
//             return numberDayWeek = 'Segunda-feira';
//         case 2:
//             return numberDayWeek = 'Terça-feira';
//         case 3:
//             return numberDayWeek = 'Quarta-feira';
//         case 4:
//             return numberDayWeek = 'Quinta-feira';
//         case 5:
//             return numberDayWeek = 'Sexta-feira';
//         case 6:
//             return numberDayWeek = 'Sábado';
//         default:
//             return numberDayWeek = '';
//     }
// }

// function formatMonth(date) {
//     let numberMonth = date.getMonth();

//     switch (numberMonth) {
//         case 0:
//             return numberMonth = 'Janeiro';
//         case 1:
//             return numberMonth = 'Fevereiro';
//         case 2:
//             return numberMonth = 'Março';
//         case 3:
//             return numberMonth = 'Abriu';
//         case 4:
//             return numberMonth = 'Maio';
//         case 5:
//             return numberMonth = 'Junho';
//         case 6:
//             return numberMonth = 'Julho';
//         case 7:
//             return numberMonth = 'Agosto';
//         case 8:
//             return numberMonth = 'Setembro';
//         case 9:
//             return numberMonth = 'Outubro';
//         case 10:
//             return numberMonth = 'Novembro';
//         case 11:
//             return numberMonth = 'Dezembro';
//         default:
//             return numberMonth = '';
//     }
// }

// const dayWeek = formatDayWeek(date);
// const Month = formatMonth(date);
// const dayMonth = getDayMonth(date);
// const year = getYear(date);
// const hours = getHoursData(date);
// const minutes = getMinutesData(date);

// function setMsg(dayWeek, dayMonth, month, year, hours, minutes) {
//     texto.innerHTML = `${dayWeek}, ${dayMonth} de ${month} de ${year} ${hours}:${minutes}`;
// }

// setMsg(dayWeek, dayMonth, Month, year, hours, minutes)










// const h1 = document.querySelector('.container h1')
// const data = new Date();

// h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});








const h1 = document.querySelector('.container h1');

function getDate() {
    return new Date();
}

const date = getDate();

function leftZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function getDayMonth() {
    return date.getDate();
}

function getYear(date) {
    return date.getFullYear();
}

function getHoursData(date) {
    return leftZero(date.getHours());
}

function getMinutesData(date) {
    return leftZero(date.getMinutes());
}

function formatDayWeek(date) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 
        'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const i = date.getDay();
        return diasSemana[i];
}

function formatMonth(date) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const i = date.getMonth();
    return meses[i];
}

const dayWeek = formatDayWeek(date);
const Month = formatMonth(date);
const dayMonth = getDayMonth(date);
const year = getYear(date);
const hours = getHoursData(date);
const minutes = getMinutesData(date);

function setMsg(dayWeek, dayMonth, month, year, hours, minutes) {
    h1.innerHTML = `${dayWeek}, ${dayMonth} de ${month} de ${year} ${hours}:${minutes}`;
}

setMsg(dayWeek, dayMonth, Month, year, hours, minutes)