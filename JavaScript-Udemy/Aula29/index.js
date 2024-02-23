// Switch / Case;

const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

console.log(data, diaSemana);

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break; // (Obrigatório);
    case 1:
        diaSemanaTexto = 'Segunda';
        break; // (Obrigatório);
    case 2:
        diaSemanaTexto = 'Terça';
        break; // (Obrigatório);
    case 3:
        diaSemanaTexto = 'Quarta';
        break; // (Obrigatório);
    case 4:
        diaSemanaTexto = 'Quinta';
        break; // (Obrigatório);
    case 5:
        diaSemanaTexto = 'Sexta';
        break; // (Obrigatório);
    case 6:
        diaSemanaTexto = 'Sábado';
        break; // (Obrigatório);
    default:
        diaSemanaTexto = '--';
        break; // (Opicional);
}

console.log(diaSemana, diaSemanaTexto);


// Switch / Case (Função - Break não se faz necessário);

function getDayWeek(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto; // (Obrigatório);
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto; // (Obrigatório);
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto; // (Obrigatório);
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto; // (Obrigatório);
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto; // (Obrigatório);
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto; // (Obrigatório);
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto; // (Obrigatório);
        default:
            diaSemanaTexto = '--';
            return diaSemanaTexto; // (Obrigatório);
    }
}

const diaSemanaTexto02 = getDayWeek(diaSemana);
console.log(diaSemanaTexto02);