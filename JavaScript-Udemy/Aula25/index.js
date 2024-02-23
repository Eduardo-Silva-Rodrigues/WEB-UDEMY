const number = 10;

if (number >= 0 && number <= 5) {
    console.log('Sim, o número está entre 0 e 5!');
} else if (number >= 6 && number <= 8) {
    console.log('Sim, o número está entre 6 e 8!');
} else if ( 1 === 1) {
    console.log ('LITERAL!')
}else if (number >= 9 && number <= 11) {
    console.log('Sim, o número está entre 9 e 11!');
} else {
    console.log('O número é maior que 11!')
}

/* Mais de uma condicional verdadeira em uma corrente de if, else if e else
   pode causar uma quebra no código.
   
   Cada checagem deve conter seu objetivo próprio.*/