/*
&& -> false - true = false (o valor mesmo - se todos forem verdadeiros, retorna o último - o primeiro false encontrado é retornado).
|| -> false - true = true (o valor mesmo - se todos forem falsos, returna o último - o primeiro verdadeiro encontrado é retornado).
*/

console.log('Eduardo' && true && 'Laura');
/*
Usando o operador lógico &&: 

- Caso exista uma "item" falso no meio da minha expressão,
o programa retornará o valor deste item.

- Caso todos os "itens" forem verdadeiros na minha expressão, 
o programa retirnará o valor do último "item" da minha expressão.


VALORES FALSY:
*false = valor literal.
0
'' "" ``
null / undefined
NaN
*/

function falaOi() {
    return 'Oi.'
}

let vaiExecutar = null;

console.log(vaiExecutar && falaOi());