let umaString = "Um \"texto\" dasdasd"; // "\" caracter de escape.

console.log(umaString.charAt(5)); // Selecionar índice. 

console.log(umaString.concat(' em', ' um', ' lindo', ' dia')); // Concatenar. 

console.log(umaString + ' em um lindo dia'); // Concatenar. 

console.log(`${umaString} em um lindo dia`); // Concatenar. 

console.log(umaString.indexOf('texto')); // Encontra o primeiro índice de uma palavra.

console.log(umaString.indexOf('o', 3)); // Encontra o primeiro índice de uma palavra.

console.log(umaString.lastIndexOf('o', 12)); // Encontra o último índice de uma palavra.

console.log(umaString.match(/[a-z]/g)); // Expressões regulares (RegX).

console.log(umaString.search(/[x]/g)); // Expressões regulares (RegX).

console.log(umaString.replace(/Um/, 'Outro')); // Substituir strings.

console.log(umaString.replace(/t/g, '#')); // Substituir strings.

console.log(umaString.length); // Contar a quantidade de caracteres.

console.log(umaString.slice(4, 9)); // Fatiar uma string.

console.log(umaString.slice(-6)); // Fatiar uma string ao contrário.

console.log(umaString.slice(-6, -1)); // Fatiar uma string ao contrário, ignorando um índice.

console.log(umaString.substring(umaString - 6, umaString - 1)); // Fatiar uma string ao contrário, ignorando um índice.

console.log(umaString.split(' ')); // Separar as palavras a partir de um caracter específico.

console.log(umaString.split(' ', 1)); // Separar as palavras a partir de um caracter específico, e escolhendo a quantidade de resultados.

console.log(umaString.toUpperCase()); // Deixar a String toda em maiúscula.

console.log(umaString.toLowerCase()); // Deixar a String toda em minúscula.
