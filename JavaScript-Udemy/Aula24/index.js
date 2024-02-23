const hora = 220;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá!');
}

// If pode ser usado sozinho.
// Sempre que uso else precisa ter um if antes.
// Posso usar o else if várias vezes na checagem.
// Só posso ter um else na checagem.
// Podemos usar condições sem else if, apenas com if e else.