// Let = fica reservado em escopos;
// Var = fica reservado apenas em escopos de função;

// LET:

let nome = 'Eduardo';
let = verdadeiro = true;

if (verdadeiro) {
    let nome = 'Fernando';
    console.log(nome);
}

function falaOi() {
    console.log(nome);
}

falaOi();

function falaOi2() {
    let nome = 'Mariana';
    console.log(nome);
}

falaOi2();

function falaOi3() {
    let nome = 'Leticia';
    console.log(nome);

    if (verdadeiro) {
        let nome = 'Rafa';
        console.log(nome);
    }
}

falaOi3();

function falaOi4() {
    let nome1 = 'Gus';
    console.log(nome1);
}

falaOi4();
// console.log(nome1); // ReferenceError: nome1 is not defined;

/* VAR:*/ console.log('===============')

var nome02 = 'Eduardo';

if (verdadeiro) {
    console.log(nome02);
}

console.log(nome02)

var nome03 = 'Fran'; // Criado;

if (verdadeiro) {
    var nome03 = 'Carlos'; // Redeclarado;
    console.log(nome03);
}

function falaNome() {
    var nome05 = 'Dionisio';
    console.log(nome);
}

falaNome();

// console.log(nome05); // ReferenceError: nome05 is not defined;

/* Hoisting = O ato da engine do JavaScript declarar todas as variaveis (var) e funcões
   no topo do script, independente de onde foram criadas realmente;*/


console.log(sobrenome); // Undefined = porque foi declarada antes da atribuição do valor;
var sobrenome = 'Silva';

// console.log(sobrenome2);
// let sobrenome2 = 'Miranda'; // ReferenceError: Cannot access 'sobrenome2' before initialization