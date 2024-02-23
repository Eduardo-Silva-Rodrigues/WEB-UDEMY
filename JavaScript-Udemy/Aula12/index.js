let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

let var1 = 'A'; //B
let var2 = 'B'; //C
let var3 = 'C'; //A

[var1, var2, var3] = [1, 2, 3]

console.log(var1, var2, var3);