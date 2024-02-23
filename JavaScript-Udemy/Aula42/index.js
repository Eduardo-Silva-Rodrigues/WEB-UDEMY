// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma
// imagem (number). Retorne true se a imagem estiver em modo paisagem (deitada);

// Minha solução:
ePaisagem = (largura, altura) => {
    if (largura > altura) return true;
    return false;
}

console.log(ePaisagem(50,80));

// Solução do professor:

ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(1080,1920));